'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Cylinder, Box, Float, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function FloatingEducationBlock({ position, color, delay, height }: { position: [number, number, number]; color: string; delay: number; height: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.3;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <Cylinder ref={meshRef} args={[0.4, 0.4, height, 32]} position={position}>
        <MeshDistortMaterial color={color} attach="material" distort={0.2} speed={1.5} roughness={0.3} metalness={0.7} />
      </Cylinder>
    </Float>
  );
}

export default function EducationTimeline3D() {
  const blocks = [
    { position: [-5, 2, -2] as [number, number, number], color: '#3b82f6', delay: 0, height: 1.5 },
    { position: [-2.5, 1, -3] as [number, number, number], color: '#8b5cf6', delay: 1, height: 1.2 },
    { position: [0, 2, -2] as [number, number, number], color: '#06b6d4', delay: 2, height: 1.8 },
    { position: [2.5, 1, -3] as [number, number, number], color: '#10b981', delay: 3, height: 1.3 },
    { position: [5, 2, -2] as [number, number, number], color: '#f59e0b', delay: 4, height: 1.6 },
    { position: [-3.5, -1, -3] as [number, number, number], color: '#ec4899', delay: 1.5, height: 1.1 },
    { position: [3.5, -1, -3] as [number, number, number], color: '#ef4444', delay: 2.5, height: 1.4 },
  ];

  return (
    <div className="w-full h-64 md:h-80 relative">
      <Canvas camera={{ position: [0, 0, 4], fov: 65 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.3} />
        <pointLight position={[-10, -10, -5]} intensity={0.6} />
        {blocks.map((block, index) => (
          <FloatingEducationBlock
            key={index}
            position={block.position}
            color={block.color}
            delay={block.delay}
            height={block.height}
          />
        ))}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  );
}
