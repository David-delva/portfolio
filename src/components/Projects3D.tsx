'use client';

import { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ProjectCard3D({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() + delay;
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
      meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.15;
      meshRef.current.position.y = position[1] + Math.sin(time) * 0.2;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.3} position={position}>
      <mesh ref={meshRef} scale={0.7}>
        <boxGeometry args={[1.5, 1, 0.2]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.1}
          speed={1.5}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

export default function Projects3D() {
  const projects = [
    { position: [-2, 1, -1] as [number, number, number], color: '#6366f1', delay: 0 },
    { position: [0, 0, -0.5] as [number, number, number], color: '#8b5cf6', delay: 0.5 },
    { position: [2, -1, -1.5] as [number, number, number], color: '#06b6d4', delay: 1 },
  ];

  return (
    <Canvas className="w-full h-48 md:h-64" camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {projects.map((project, index) => (
        <ProjectCard3D
          key={index}
          position={project.position}
          color={project.color}
          delay={project.delay}
        />
      ))}
    </Canvas>
  );
}
