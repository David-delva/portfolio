'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {!isMobile && (
          <>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                  color="#6366f1"
                  attach="material"
                  distort={0.4}
                  speed={2}
                  roughness={0.2}
                  metalness={0.8}
                />
              </Sphere>
            </Float>

            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5} position={[-4, 2, -2]}>
              <Sphere args={[0.5, 50, 50]} scale={1.5}>
                <MeshDistortMaterial
                  color="#8b5cf6"
                  attach="material"
                  distort={0.3}
                  speed={1.5}
                  roughness={0.3}
                  metalness={0.7}
                />
              </Sphere>
            </Float>

            <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.8} position={[4, -2, -1]}>
              <Sphere args={[0.4, 50, 50]} scale={1.2}>
                <MeshDistortMaterial
                  color="#06b6d4"
                  attach="material"
                  distort={0.35}
                  speed={1.8}
                  roughness={0.25}
                  metalness={0.75}
                />
              </Sphere>
            </Float>
          </>
        )}

        {!isMobile && <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />}
      </Canvas>
    </div>
  );
}
