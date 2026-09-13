'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function RotatingCube({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + delay) * 0.5;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime + delay) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Box ref={meshRef} args={[0.6, 0.6, 0.6]} position={position}>
        <MeshDistortMaterial color={color} attach="material" distort={0.5} speed={2} roughness={0.2} metalness={0.9} />
      </Box>
    </Float>
  );
}

export default function CertificationBadges3D() {
  const badges = [
    { position: [-4, 2, -3] as [number, number, number], color: '#8b5cf6', delay: 0 },
    { position: [-2, 3, -4] as [number, number, number], color: '#06b6d4', delay: 1 },
    { position: [0, 2, -3] as [number, number, number], color: '#10b981', delay: 2 },
    { position: [2, 3, -4] as [number, number, number], color: '#f59e0b', delay: 3 },
    { position: [4, 2, -3] as [number, number, number], color: '#ec4899', delay: 4 },
    { position: [-3, 0, -4] as [number, number, number], color: '#3b82f6', delay: 1.5 },
    { position: [-1, -1, -3] as [number, number, number], color: '#8b5cf6', delay: 2.5 },
    { position: [1, -1, -3] as [number, number, number], color: '#06b6d4', delay: 3.5 },
    { position: [3, 0, -4] as [number, number, number], color: '#ef4444', delay: 0.5 },
  ];

  return (
    <div className="w-full h-64 md:h-80 relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        {badges.map((badge, index) => (
          <RotatingCube
            key={index}
            position={badge.position}
            color={badge.color}
            delay={badge.delay}
          />
        ))}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
