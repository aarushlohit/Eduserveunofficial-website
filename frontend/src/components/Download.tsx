import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

export default function Download() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"]
  });

  const scrollScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Mouse tracking for 3D tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 300, damping: 30 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section id="download" ref={ref} className="py-40 px-6 bg-slate-50 dark:bg-[#05060a] relative overflow-hidden flex items-center justify-center">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50 dark:from-neon-blue/14 dark:via-[#05060a] dark:to-[#05060a] pointer-events-none" />
      
      <div className="perspective-[1500px]" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <motion.div 
          ref={containerRef}
          style={{ 
            scale: scrollScale, 
            opacity: scrollOpacity,
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          className="relative z-10 glassmorphism p-16 md:p-24 rounded-[3rem] text-center max-w-4xl w-full border border-black/5 dark:border-white/5 shadow-[0_0_120px_rgba(79,139,255,0.28)]"
        >
          {/* Pop out content */}
          <div style={{ transform: "translateZ(80px)" }} className="relative z-20">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-9 drop-shadow-2xl">
              Ready to <span className="text-gradient">Upgrade?</span>
            </h2>
            
            <p className="text-2xl text-slate-700 dark:text-gray-200 font-light max-w-2xl mx-auto mb-12 leading-relaxed text-shadow-sm">
              Download the latest APK directly from our official repository. Secure, fast, and constantly evolving.
            </p>

            <div className="flex flex-col items-center justify-center gap-6">
              <div style={{ transform: "translateZ(30px)" }}>
                <a 
                  href="https://github.com/your-repo/app.apk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative px-12 py-5 font-bold text-lg text-white rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 dark:from-neon-blue dark:to-neon-emerald transition-all duration-300 hover:scale-[1.15] shadow-xl hover:shadow-2xl overflow-hidden flex items-center justify-center gap-3 drop-shadow-lg"
                >
                  <div className="absolute inset-0 bg-black/20 dark:bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <svg className="w-6 h-6 z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="relative z-10 tracking-widest uppercase">Download APK</span>
                </a>
              </div>
              
              <p className="text-sm text-slate-500 dark:text-gray-400 flex items-center gap-2 font-mono mt-4 opacity-80">
                <svg className="w-4 h-4 text-neon-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Note: Enable "Install from unknown sources"
              </p>
            </div>
          </div>
          
          {/* Internal shadow layers for extra depth feeling */}
          <div style={{ transform: "translateZ(-40px)" }} className="absolute inset-4 rounded-[2rem] bg-neon-blue/5 blur-xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}