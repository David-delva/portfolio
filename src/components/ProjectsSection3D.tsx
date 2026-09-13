"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Box, Ring, Sphere, Cylinder } from "@react-three/drei";
import * as THREE from "three";

interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  position: [number, number, number];
  color: string;
  delay: number;
}

const projectsData: ProjectData[] = [
  {
    title: "Ramsey Automotive Hub",
    description: "Plateforme de vente et location de voitures en temps réel avec interface moderne",
    tech: ["React 18", "TypeScript", "Node.js", "Express"],
    github: "https://github.com/David-delva/ramsey-automotive-hub",
    position: [-5, 2, -4] as [number, number, number],
    color: "#3B82F6",
    delay: 0,
  },
  {
    title: "Gestion Scolaire II",
    description: "Système complet de gestion scolaire avec suivi des étudiants et notes",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/David-delva/Gestion-scolaire-II",
    position: [0, 3, -5] as [number, number, number],
    color: "#8B5CF6",
    delay: 0.3,
  },
  {
    title: "Gestion Scolaire",
    description: "Application de gestion administrative pour établissements scolaires",
    tech: ["PHP", "MySQL", "JavaScript"],
    github: "https://github.com/David-delva/Gestion-scolaire",
    position: [5, 1, -4] as [number, number, number],
    color: "#EC4899",
    delay: 0.6,
  },
  {
    title: "Gestion Étudiants",
    description: "Système de suivi des notes et absences avec architecture MVC",
    tech: ["PHP", "MySQL", "MVC"],
    github: "https://github.com/David-delva/Gestion-etudiants-notes-abscences",
    position: [-3, -1, -5] as [number, number, number],
    color: "#06B6D4",
    delay: 0.9,
  },
  {
    title: "HM Proges Showcase",
    description: "Vitrine professionnelle pour présentation de projets",
    tech: ["React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/David-delva/hmproges-showcase",
    position: [3, -2, -4] as [number, number, number],
    color: "#F59E0B",
    delay: 1.2,
  },
  {
    title: "VACIEVENT",
    description: "Application web de location de matériel événementiel",
    tech: ["PHP", "JavaScript", "Bootstrap", "MySQL"],
    position: [-5, -3, -6] as [number, number, number],
    color: "#10B981",
    delay: 1.5,
  },
  {
    title: "Gestion Gaz",
    description: "Frontend mobile pour suivi de stock et livraisons de bouteilles de gaz",
    tech: ["React Native", "Expo", "MongoDB"],
    position: [5, -3, -6] as [number, number, number],
    color: "#EF4444",
    delay: 1.8,
  },
];

function ProjectCard3D({ project }: { project: ProjectData }) {
  const groupRef = useRef<THREE.Group>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const cylinderRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + project.delay) * 0.15;
      groupRef.current.position.y = project.position[1] + Math.sin(state.clock.elapsedTime * 0.6 + project.delay) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.25;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
    if (cylinderRef.current) {
      cylinderRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.6}>
      <group ref={groupRef} position={project.position}>
        {/* Main card body */}
        <Box args={[3.2, 4, 0.2]} position={[0, 0, 0]}>
          <meshStandardMaterial 
            color={project.color} 
            transparent 
            opacity={0.88} 
            metalness={0.7} 
            roughness={0.25}
            emissive={project.color}
            emissiveIntensity={0.15}
          />
        </Box>
        
        {/* Screen/Display area */}
        <Box args={[2.8, 2.8, 0.08]} position={[0, 0.4, 0.12]}>
          <meshStandardMaterial 
            color="#0f172a" 
            metalness={0.95} 
            roughness={0.05}
            emissive="#1e293b"
            emissiveIntensity={0.2}
          />
        </Box>
        
        {/* Decorative ring around screen */}
        <Ring args={[1.7, 1.8, 48]} position={[0, 0.4, 0.2]} ref={ringRef}>
          <meshStandardMaterial 
            color="#ffffff" 
            transparent 
            opacity={0.7} 
            side={THREE.DoubleSide}
            emissive="#ffffff"
            emissiveIntensity={0.3}
          />
        </Ring>
        
        {/* Top cylinder decoration */}
        <Cylinder args={[0.2, 0.2, 0.8, 16]} position={[0, 1.8, 0]} rotation={[Math.PI / 2, 0, 0]} ref={cylinderRef}>
          <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
        </Cylinder>
        
        {/* Bottom sphere base with glow effect */}
        <Sphere args={[0.35, 32, 32]} position={[0, -1.8, 0]}>
          <meshStandardMaterial 
            color={project.color} 
            metalness={0.85} 
            roughness={0.15}
            emissive={project.color}
            emissiveIntensity={0.4}
          />
        </Sphere>
        
        {/* Corner accents */}
        {[[-1.4, 1.8], [1.4, 1.8], [-1.4, -1.8], [1.4, -1.8]].map(([x, y], i) => (
          <Sphere key={i} args={[0.12, 16, 16]} position={[x, y, 0.12]}>
            <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
          </Sphere>
        ))}
      </group>
    </Float>
  );
}

function ProjectsScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[8, 10, 8]} intensity={1.5} castShadow />
      <pointLight position={[-8, -5, -8]} intensity={0.8} color="#8B5CF6" />
      <pointLight position={[8, 5, -8]} intensity={0.8} color="#3B82F6" />
      <spotLight position={[0, 12, 5]} intensity={1} angle={0.4} penumbra={1} />
      
      {projectsData.map((project, index) => (
        <ProjectCard3D
          key={index}
          project={project}
        />
      ))}
      
      {/* Floating particles around projects */}
      {Array.from({ length: 30 }).map((_, i) => (
        <FloatingParticle key={i} index={i} />
      ))}
    </>
  );
}

function FloatingParticle({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const randomPos = [
    (Math.random() - 0.5) * 15,
    (Math.random() - 0.5) * 12,
    (Math.random() - 0.5) * 8 - 3,
  ] as [number, number, number];
  const colors = ["#3B82F6", "#8B5CF6", "#EC4899", "#06B6D4", "#F59E0B"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = randomPos[1] + Math.sin(state.clock.elapsedTime * 0.5 + index) * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
    }
  });
  
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={randomPos}>
        <octahedronGeometry args={[0.08]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} transparent opacity={0.8} />
      </mesh>
    </Float>
  );
}

export default function ProjectsSection3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 12], fov: 70 }}>
        <ProjectsScene />
      </Canvas>
    </div>
  );
}
