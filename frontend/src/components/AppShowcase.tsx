import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Lightformer, Environment, MeshTransmissionMaterial, ContactShadows, Text } from '@react-three/drei';
import * as THREE from 'three';

// A high-attitude liquid blob component
function LiquidAttitude() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group>
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2.5}>
        <mesh ref={meshRef} scale={1.2}>
          <torusKnotGeometry args={[1, 0.4, 256, 64]} />
          <MeshTransmissionMaterial 
            backside
            backsideThickness={1}
            thickness={2.5}
            roughness={0}
            transmission={1}
            ior={1.5}
            chromaticAberration={0.5}
            anisotropy={0.5}
            distortion={1.5}
            distortionScale={0.5}
            temporalDistortion={0.5}
            color="#4f8bff"
            attenuationDistance={1}
            attenuationColor="#ffffff"
          />
        </mesh>

        <Text
          position={[0, 0, 1.5]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLNfMZg.ttf"
          characters="ATTITUDE"
          fillOpacity={0.9}
        >
          ATTITUDE
          <meshBasicMaterial color="#ffffff" toneMapped={false} />
        </Text>
      </Float>

      {/* Lighting & reflections for glassmorphism */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[5, 1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={[50, 2, 1]} />
          <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[5, -1, -1]} scale={[50, 2, 1]} />
        </group>
      </Environment>
      
      <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#4f8bff" />
    </group>
  );
}

export default function AppShowcase() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="py-32 px-6 relative bg-gradient-to-b from-slate-50 dark:from-[#05060a] via-slate-200 dark:via-[#0b1224] to-slate-50 dark:to-[#05060a] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-16 relative z-10">
        
        {/* Left Text */}
        <div className="flex-1 space-y-8 z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-5 py-2.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 dark:border-neon-blue/40 dark:bg-neon-blue/15 dark:text-neon-blue text-sm font-semibold tracking-wider mb-7 shadow-sm dark:shadow-[0_0_30px_rgba(79,139,255,0.35)] backdrop-blur-md">
              REDEFINE YOUR WORKFLOW
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-7 leading-tight">
              An interface designed <br/>
              for <span className="text-gradient">pure focus.</span>
            </h2>
            <p className="text-slate-700 dark:text-gray-200 text-2xl font-light leading-relaxed mb-9 max-w-2xl">
              Every pixel counts. EduServe is engineered to be invisible when you don't need it, and immensely powerful when you do. Native speed wrapped in absolute beauty.
            </p>
            
            <div className="flex space-x-10 mt-12">
              <div className="flex flex-col border-l-4 border-neon-blue pl-6">
                <span className="text-5xl font-extrabold text-slate-900 dark:text-white mb-2">0.1s</span>
                <span className="text-sm text-slate-500 dark:text-gray-400 uppercase tracking-widest font-semibold">Action Delay</span>
              </div>
              <div className="flex flex-col border-l-4 border-neon-emerald pl-6">
                <span className="text-5xl font-extrabold text-slate-900 dark:text-white mb-2">100%</span>
                <span className="text-sm text-slate-500 dark:text-gray-400 uppercase tracking-widest font-semibold">Uptime</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right 3D Liquid/Glass Element */}
        <div className="flex-1 w-full h-[600px] md:h-[800px] relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="w-full h-full relative border border-black/5 dark:border-white/5 rounded-[4rem] bg-white/[0.02] shadow-[inset_0_0_80px_rgba(255,255,255,0.05)] overflow-hidden"
          >
            {/* Extremely intense glowing background orb */}
            <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-blue/40 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-0" />
            
            <Canvas className="w-full h-full z-10" camera={{ position: [0, 0, 6], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <LiquidAttitude />
            </Canvas>
            
            {/* Aggressive foreground floating textual details */}
            <div className="absolute bottom-10 right-10 glassmorphism p-6 rounded-2xl border border-black/10 dark:border-white/10 backdrop-blur-2xl bg-black/40 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] skew-x-[-10deg] rotate-[-2deg]">
               <p className="font-mono text-neon-emerald tracking-widest text-sm font-bold animate-pulse uppercase">Status: Unbreakable</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
