"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere({ position, color, speed, distort }: { position: [number, number, number]; color: string; speed: number; distort: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 64, 64]} position={position} ref={meshRef}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      <AnimatedSphere position={[-4, 2, -5]} color="#3B82F6" speed={0.3} distort={0.4} />
      <AnimatedSphere position={[4, -2, -3]} color="#8B5CF6" speed={0.4} distort={0.5} />
      <AnimatedSphere position={[0, 4, -6]} color="#EC4899" speed={0.2} distort={0.3} />
      <AnimatedSphere position={[-3, -3, -4]} color="#06B6D4" speed={0.35} distort={0.45} />
      <AnimatedSphere position={[3, 3, -5]} color="#F59E0B" speed={0.25} distort={0.35} />
    </>
  );
}

export default function HeroSection3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <HeroScene />
      </Canvas>
    </div>
  );
}
