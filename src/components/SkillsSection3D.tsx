"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Octahedron, Icosahedron, Tetrahedron } from "@react-three/drei";
import * as THREE from "three";

function SkillShape({ position, color, type, speed }: { position: [number, number, number]; color: string; type: string; speed: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 1.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed * 0.8;
    }
  });

  let geometry;
  switch (type) {
    case "octahedron":
      geometry = <Octahedron args={[0.8, 0]} />;
      break;
    case "icosahedron":
      geometry = <Icosahedron args={[0.8, 0]} />;
      break;
    case "tetrahedron":
      geometry = <Tetrahedron args={[0.8, 0]} />;
      break;
    default:
      geometry = <Octahedron args={[0.8, 0]} />;
  }

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshStandardMaterial 
          color={color} 
          metalness={0.7} 
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  );
}

function SkillsScene() {
  const shapes = [
    { position: [-4, 2, -3] as [number, number, number], color: "#3B82F6", type: "octahedron", speed: 0.4 },
    { position: [-2, -2, -4] as [number, number, number], color: "#8B5CF6", type: "icosahedron", speed: 0.5 },
    { position: [0, 3, -5] as [number, number, number], color: "#EC4899", type: "tetrahedron", speed: 0.3 },
    { position: [2, -1, -3] as [number, number, number], color: "#06B6D4", type: "octahedron", speed: 0.45 },
    { position: [4, 1, -4] as [number, number, number], color: "#F59E0B", type: "icosahedron", speed: 0.35 },
    { position: [-3, -3, -5] as [number, number, number], color: "#10B981", type: "tetrahedron", speed: 0.4 },
    { position: [3, 3, -5] as [number, number, number], color: "#EF4444", type: "octahedron", speed: 0.38 },
    { position: [0, -3, -4] as [number, number, number], color: "#6366F1", type: "icosahedron", speed: 0.42 },
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.8} />
      
      {shapes.map((shape, index) => (
        <SkillShape
          key={index}
          position={shape.position}
          color={shape.color}
          type={shape.type}
          speed={shape.speed}
        />
      ))}
    </>
  );
}

export default function SkillsSection3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 8], fov: 70 }}>
        <SkillsScene />
      </Canvas>
    </div>
  );
}
