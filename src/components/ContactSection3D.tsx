"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Cylinder, Sphere, Box } from "@react-three/drei";
import * as THREE from "three";

function ContactElement({ position, color, delay, type }: { position: [number, number, number]; color: string; delay: number; type: string }) {
  const groupRef = useRef<THREE.Group>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4 + delay) * 0.3;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + delay) * 0.15;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.9}>
      <group ref={groupRef} position={position}>
        {type === "message" && (
          <>
            {/* Message bubble */}
            <Box args={[2, 1.5, 0.1]}>
              <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} transparent opacity={0.8} />
            </Box>
            <Sphere args={[0.3, 32, 32]} position={[0, -0.9, 0]}>
              <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
            </Sphere>
          </>
        )}
        {type === "email" && (
          <>
            {/* Email icon abstract */}
            <Box args={[1.8, 1.2, 0.1]}>
              <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
            </Box>
            <Cylinder args={[0.2, 0.2, 1.5, 32]} position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
            </Cylinder>
          </>
        )}
        {type === "phone" && (
          <>
            {/* Phone abstract */}
            <Box args={[1, 1.8, 0.1]}>
              <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} transparent opacity={0.8} />
            </Box>
            <Sphere args={[0.25, 32, 32]} position={[0, 0.6, 0.1]}>
              <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} emissive="#ffffff" emissiveIntensity={0.4} />
            </Sphere>
          </>
        )}
        {type === "social" && (
          <>
            {/* Social network node */}
            <Sphere args={[0.7, 32, 32]}>
              <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
            </Sphere>
            <Torus args={[1, 0.1, 16, 64]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#ffffff" transparent opacity={0.5} />
            </Torus>
          </>
        )}
      </group>
    </Float>
  );
}

// Add Torus import
const Torus = ({ args, position, rotation, children }: any) => (
  <mesh position={position} rotation={rotation}>
    <torusGeometry args={args} />
    {children}
  </mesh>
);

function ContactScene() {
  const elements = [
    { position: [-3, 2, -4] as [number, number, number], color: "#3B82F6", delay: 0, type: "message" },
    { position: [3, 1, -4] as [number, number, number], color: "#8B5CF6", delay: 0.6, type: "email" },
    { position: [-2, -2, -5] as [number, number, number], color: "#EC4899", delay: 1.2, type: "phone" },
    { position: [2, -1, -5] as [number, number, number], color: "#06B6D4", delay: 1.8, type: "social" },
    { position: [0, 3, -6] as [number, number, number], color: "#F59E0B", delay: 2.4, type: "message" },
  ];

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[6, 8, 5]} intensity={1.3} />
      <pointLight position={[-6, -6, -5]} intensity={0.7} />
      <spotLight position={[0, 10, 0]} intensity={0.9} angle={0.5} penumbra={1} />
      
      {elements.map((element, index) => (
        <ContactElement
          key={index}
          position={element.position}
          color={element.color}
          delay={element.delay}
          type={element.type}
        />
      ))}
    </>
  );
}

export default function ContactSection3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-65">
      <Canvas camera={{ position: [0, 0, 9], fov: 65 }}>
        <ContactScene />
      </Canvas>
    </div>
  );
}
