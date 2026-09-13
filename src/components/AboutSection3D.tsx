"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Box, Cylinder, Torus } from "@react-three/drei";
import * as THREE from "three";

function RotatingCard({ position, color, delay }: { position: [number, number, number]; color: string; delay: number }) {
  const meshRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.3;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={meshRef} position={position}>
        {/* Card base */}
        <Box args={[2.5, 3, 0.1]}>
          <meshStandardMaterial color={color} transparent opacity={0.9} />
        </Box>
        {/* Decorative elements */}
        <Cylinder args={[0.3, 0.3, 0.5, 32]} position={[0, 1.2, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} />
        </Cylinder>
        <Torus args={[0.4, 0.1, 16, 32]} position={[0, -0.8, 0.15]}>
          <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.3} />
        </Torus>
      </group>
    </Float>
  );
}

function AboutScene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />
      
      <RotatingCard position={[-3, 0, -4]} color="#3B82F6" delay={0} />
      <RotatingCard position={[0, 1, -5]} color="#8B5CF6" delay={1} />
      <RotatingCard position={[3, -1, -4]} color="#EC4899" delay={2} />
    </>
  );
}

export default function AboutSection3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <AboutScene />
      </Canvas>
    </div>
  );
}
