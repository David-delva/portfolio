'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useEffect, useState } from 'react';

function AnimatedParticle({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <Sphere args={[0.3, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function Particles3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  const particles = [
    { position: [-4, 2, -5] as [number, number, number], color: '#8b5cf6', speed: 1.5 },
    { position: [4, -2, -5] as [number, number, number], color: '#06b6d4', speed: 1.8 },
    { position: [-3, -3, -4] as [number, number, number], color: '#ec4899', speed: 1.2 },
    { position: [3, 3, -6] as [number, number, number], color: '#10b981', speed: 1.6 },
    { position: [0, 0, -7] as [number, number, number], color: '#f59e0b', speed: 1.4 },
    { position: [-5, 0, -3] as [number, number, number], color: '#3b82f6', speed: 1.7 },
    { position: [5, 1, -4] as [number, number, number], color: '#ef4444', speed: 1.3 },
    { position: [-2, 4, -6] as [number, number, number], color: '#8b5cf6', speed: 1.9 },
    { position: [2, -4, -5] as [number, number, number], color: '#06b6d4', speed: 1.1 },
    { position: [0, 5, -8] as [number, number, number], color: '#ec4899', speed: 1.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} />
        {particles.map((particle, index) => (
          <AnimatedParticle
            key={index}
            position={particle.position}
            color={particle.color}
            speed={particle.speed}
          />
        ))}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
