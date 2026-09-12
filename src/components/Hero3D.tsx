'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function RotatingCube({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01;
      meshRef.current.rotation.y += speed * 0.015;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.3} position={position}>
      <mesh ref={meshRef} scale={0.8}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.2}
          speed={speed}
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas className="absolute top-0 right-0 w-full h-full" camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <RotatingCube position={[2, 1, -1]} color="#6366f1" speed={2} />
      <RotatingCube position={[-2, -1, 0]} color="#8b5cf6" speed={1.5} />
      <RotatingCube position={[1, -2, -2]} color="#06b6d4" speed={1.8} />
      
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
}
