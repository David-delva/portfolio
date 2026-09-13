"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Box, Ring, Sphere } from "@react-three/drei";
import * as THREE from "three";

function ProjectCard3D({ position, color, delay, index }: { position: [number, number, number]; color: string; delay: number; index: number }) {
  const groupRef = useRef<THREE.Group>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4 + delay) * 0.2;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + delay) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={groupRef} position={position}>
        {/* Main card */}
        <Box args={[2.8, 3.5, 0.15]}>
          <meshStandardMaterial color={color} transparent opacity={0.85} metalness={0.6} roughness={0.3} />
        </Box>
        {/* Screen/Content area */}
        <Box args={[2.4, 2.5, 0.05]} position={[0, 0.3, 0.08]}>
          <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
        </Box>
        {/* Decorative ring */}
        <Ring args={[1.6, 1.7, 32]} position={[0, 0.3, 0.16]} ref={ringRef}>
          <meshStandardMaterial color="#ffffff" transparent opacity={0.6} side={THREE.DoubleSide} />
        </Ring>
        {/* Base sphere */}
        <Sphere args={[0.3, 32, 32]} position={[0, -1.5, 0]}>
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </Sphere>
      </group>
    </Float>
  );
}

function ProjectsScene() {
  const cards = [
    { position: [-4, 1, -5] as [number, number, number], color: "#3B82F6", delay: 0 },
    { position: [0, 2, -6] as [number, number, number], color: "#8B5CF6", delay: 0.5 },
    { position: [4, 0, -5] as [number, number, number], color: "#EC4899", delay: 1 },
    { position: [-2, -2, -6] as [number, number, number], color: "#06B6D4", delay: 1.5 },
    { position: [2, -1, -5] as [number, number, number], color: "#F59E0B", delay: 2 },
  ];

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} />
      <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.5} penumbra={1} />
      
      {cards.map((card, index) => (
        <ProjectCard3D
          key={index}
          position={card.position}
          color={card.color}
          delay={card.delay}
          index={index}
        />
      ))}
    </>
  );
}

export default function ProjectsSection3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 65 }}>
        <ProjectsScene />
      </Canvas>
    </div>
  );
}
