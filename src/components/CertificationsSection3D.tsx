"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, TorusKnot, Box, Sphere } from "@react-three/drei";
import * as THREE from "three";

function CertificationBadge({ position, color, delay, type }: { position: [number, number, number]; color: string; delay: number; type: string }) {
  const groupRef = useRef<THREE.Group>(null!);
  const innerRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + delay) * 0.4;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2 + delay) * 0.15;
    }
    if (innerRef.current) {
      innerRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} position={position}>
        {/* Outer frame */}
        {type === "knot" ? (
          <TorusKnot args={[0.9, 0.3, 128, 32]}>
            <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
          </TorusKnot>
        ) : (
          <>
            <Box args={[2, 2, 0.1]} position={[0, 0, 0]}>
              <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} transparent opacity={0.8} />
            </Box>
            <Sphere args={[0.4, 32, 32]} position={[0, 0, 0.1]} ref={innerRef}>
              <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} emissive="#ffffff" emissiveIntensity={0.5} />
            </Sphere>
          </>
        )}
        {/* Inner glow sphere */}
        <Sphere args={[0.5, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#ffffff" transparent opacity={0.3} emissive="#ffffff" emissiveIntensity={0.8} />
        </Sphere>
      </group>
    </Float>
  );
}

function CertificationsScene() {
  const badges = [
    { position: [-3, 2, -4] as [number, number, number], color: "#3B82F6", delay: 0, type: "knot" },
    { position: [3, 2, -4] as [number, number, number], color: "#8B5CF6", delay: 0.8, type: "box" },
    { position: [-2, -2, -5] as [number, number, number], color: "#EC4899", delay: 1.6, type: "knot" },
    { position: [2, -2, -5] as [number, number, number], color: "#06B6D4", delay: 2.4, type: "box" },
  ];

  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[8, 8, 5]} intensity={1.5} />
      <pointLight position={[-8, -8, -5]} intensity={0.8} />
      <spotLight position={[0, 12, 0]} intensity={1} angle={0.4} penumbra={1} />
      
      {badges.map((badge, index) => (
        <CertificationBadge
          key={index}
          position={badge.position}
          color={badge.color}
          delay={badge.delay}
          type={badge.type}
        />
      ))}
    </>
  );
}

export default function CertificationsSection3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 9], fov: 65 }}>
        <CertificationsScene />
      </Canvas>
    </div>
  );
}
