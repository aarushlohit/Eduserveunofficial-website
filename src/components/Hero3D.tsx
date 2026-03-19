import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Stars, Environment, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Hook to detect dark mode
function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkDark();
    
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  return isDark;
}

const FloatingShapes = ({ isDark }: { isDark: boolean }) => {
  const materialColor = isDark ? "#4f8bff" : "#2563eb"; // Slightly deeper blue in light mode
  const accentColor = isDark ? "#1b6eff" : "#1d4ed8";

  return (
    <>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-3, 1, -2]}>
          <icosahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial 
            color={materialColor} 
            wireframe 
            emissive={materialColor} 
            emissiveIntensity={isDark ? 0.5 : 0.8} 
          />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[3, -2, -3]}>
          <torusGeometry args={[0.4, 0.1, 16, 32]} />
          <meshStandardMaterial 
            color={accentColor} 
            wireframe 
            emissive={accentColor} 
            emissiveIntensity={isDark ? 0.5 : 0.8} 
          />
        </mesh>
      </Float>
      <Float speed={1.2} rotationIntensity={3} floatIntensity={1.5}>
        <mesh position={[2, 2, -4]}>
          <octahedronGeometry args={[0.6, 0]} />
          <MeshDistortMaterial 
            color={materialColor} 
            distort={0.5} 
            speed={2} 
            roughness={0.2} 
            metalness={0.8} 
          />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2.5, -2, -1]}>
          <torusKnotGeometry args={[0.3, 0.08, 64, 8]} />
          <MeshDistortMaterial 
            color={accentColor} 
            distort={0.2} 
            speed={3} 
            roughness={0.1} 
            metalness={0.9} 
          />
        </mesh>
      </Float>
    </>
  );
};

// A simple floating placeholder for a phone
const PhoneMockup = ({ isDark }: { isDark: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      // Combine base rotation with mouse parallax influence
      const targetX = Math.cos(t * 0.3) * 0.08 + (state.pointer.y * -0.2);
      const targetY = Math.sin(t * 0.5) * 0.15 + (state.pointer.x * 0.3);

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.08);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.08);
    }
  });

  const bodyColor = isDark ? "#0c1020" : "#ffffff";


  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Phone Body */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[1.5, 3.2, 0.2]} />
          <meshPhysicalMaterial 
            color={bodyColor} 
            metalness={0.95} 
            roughness={0.08}
            clearcoat={1}
            clearcoatRoughness={0.08}
          />
        </mesh>
        
        {/* Screen Base */}
        <mesh position={[0, 0, 0.101]}>
          <planeGeometry args={[1.35, 3.0]} />
          <meshBasicMaterial color="#000" />
        </mesh>

        {/* Inner Screen Glow / Design fake */}
        <mesh position={[0, 0, 0.102]}>
          <planeGeometry args={[1.2, 2.8]} />
          <meshStandardMaterial 
            color="#4f8bff" 
            emissive="#1b6eff" 
            emissiveIntensity={0.35} 
            transparent 
            opacity={0.85}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
};

export default function Hero3D() {
  const isDark = useDarkMode();

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-slate-50 dark:bg-[#05060a] transition-colors duration-500">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-85">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={isDark ? 0.6 : 1.2} color={isDark ? "#4f8bff" : "#ffffff"} />
          <directionalLight position={[2, 2, 5]} intensity={1.15} color={isDark ? "#4f8bff" : "#2563eb"} />
          <directionalLight position={[-2, -2, -5]} intensity={0.6} color={isDark ? "#1b6eff" : "#60a5fa"} />
          <Environment preset={isDark ? "city" : "studio"} />
          
          {/* Dynamic star/sparkle colors based on theme */}
          {isDark ? (
            <Stars radius={100} depth={60} count={4500} factor={4} saturation={0} fade speed={1} />
          ) : (
             // In light mode, use dark dust particles instead of white stars
             <Stars radius={100} depth={60} count={2000} factor={4} saturation={0} fade speed={1} />
          )}
          
          <Sparkles 
            count={150} 
            scale={12} 
            size={isDark ? 3 : 5} 
            speed={0.4} 
            opacity={0.6} 
            color={isDark ? "#4f8bff" : "#1d4ed8"} // Dark blue sparkles in light mode
          />
          
          <FloatingShapes isDark={isDark} />
          <PhoneMockup isDark={isDark} />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 2.5}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <p className="text-sm uppercase tracking-[0.38em] text-slate-500 dark:text-white/75 mb-3 font-semibold">KARUNYA UNIVERSITY</p>
          <p className="text-xs md:text-sm tracking-[0.42em] text-slate-400 dark:text-white/55 mb-6 font-medium">Built by First-Year Students</p>
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold tracking-tight md:tracking-[-0.03em] mb-6 text-slate-900 dark:text-white drop-shadow-2xl dark:drop-shadow-[0_20px_55px_rgba(79,139,255,0.5)]">
            Edu<span className="text-gradient">Serve</span>
          </h1>
          <p className="text-2xl md:text-3xl text-slate-700 dark:text-gray-50 font-light tracking-wide max-w-2xl mx-auto mb-3">
            All-in-One Campus Experience
          </p>
          <p className="text-base md:text-lg text-slate-600 dark:text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
             Hackathons. Results. Payments. AI — Unified.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <a href="#download" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 dark:from-white/10 dark:to-white/10 hover:scale-105 shadow-xl hover:shadow-2xl border border-transparent dark:border-white/15 backdrop-blur-md overflow-hidden dark:shadow-[0_0_30px_rgba(79,139,255,0.45)] dark:hover:shadow-[0_0_45px_rgba(27,110,255,0.6)]">
            <span className="relative z-10 flex items-center gap-2">
              Download APK
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
          animate={{ opacity: 0.8, y: 0, filter: 'blur(0px)' }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
          className="mt-12 text-sm tracking-[0.3em] text-slate-400 dark:text-white/40 select-none font-medium cursor-default"
        >
          <span className="soft-glow hover:text-blue-600 dark:hover:text-white transition-colors duration-500">Manasalaaiyoo.</span>
        </motion.div>
      </div>
      
      {/* Bottom Gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 dark:from-[#05060a] via-transparent to-transparent z-0 pointer-events-none" />
    </section>
  );
}
