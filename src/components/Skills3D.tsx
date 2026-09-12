'use client';

import { useRef } from 'react';
import { useFrame, Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function SkillSphere({ position, color, speed, size }: { position: [number, number, number]; color: string; speed: number; size: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += speed * 0.02;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.2} position={position}>
      <mesh ref={meshRef} scale={size}>
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={speed}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function Skills3D() {
  const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444'];
  
  return (
    <Canvas className="w-full h-32 md:h-48" camera={{ position: [0, 0, 8], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      {colors.map((color, index) => (
        <SkillSphere
          key={index}
          position={[(index - 2.5) * 1.5, Math.sin(index) * 0.5, 0]}
          color={color}
          speed={1 + index * 0.2}
          size={0.6 + Math.random() * 0.3}
        />
      ))}
    </Canvas>
  );
}
