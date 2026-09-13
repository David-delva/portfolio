'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Sphere, Torus, Float, MeshDistortMaterial } from '@react-three/drei';
import { useEffect, useState } from 'react';

function RotatingIcon({ position, type, color }: { position: [number, number, number]; type: string; color: string }) {
  return (
    <Float speed={2} rotationIntensity={3} floatIntensity={1.5}>
      {type === 'code' && (
        <Box args={[0.8, 0.8, 0.8]} position={position}>
          <MeshDistortMaterial color={color} attach="material" distort={0.3} speed={3} roughness={0.3} metalness={0.7} />
        </Box>
      )}
      {type === 'database' && (
        <Sphere args={[0.5, 32, 32]} position={position}>
          <MeshDistortMaterial color={color} attach="material" distort={0.2} speed={2} roughness={0.4} metalness={0.6} />
        </Sphere>
      )}
      {type === 'network' && (
        <Torus args={[0.4, 0.15, 16, 32]} position={position}>
          <MeshDistortMaterial color={color} attach="material" distort={0.4} speed={4} roughness={0.2} metalness={0.8} />
        </Torus>
      )}
    </Float>
  );
}

export default function TechIcons3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) return null;

  const icons = [
    { position: [-6, 3, -4] as [number, number, number], type: 'code', color: '#3b82f6' },
    { position: [6, 3, -4] as [number, number, number], type: 'database', color: '#10b981' },
    { position: [-6, -3, -4] as [number, number, number], type: 'network', color: '#f59e0b' },
    { position: [6, -3, -4] as [number, number, number], type: 'code', color: '#8b5cf6' },
    { position: [0, 5, -5] as [number, number, number], type: 'database', color: '#06b6d4' },
    { position: [0, -5, -5] as [number, number, number], type: 'network', color: '#ec4899' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 3], fov: 70 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <pointLight position={[-10, -10, -5]} intensity={0.8} />
        {icons.map((icon, index) => (
          <RotatingIcon
            key={index}
            position={icon.position}
            type={icon.type}
            color={icon.color}
          />
        ))}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
      </Canvas>
    </div>
  );
}
