import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const line = (text: string, delay: number, className = '') => (
  <motion.p
    initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, amount: 0.6 }}
    className={`text-center text-xl md:text-2xl font-light tracking-wide text-slate-700 dark:text-gray-300 leading-relaxed ${className}`}
  >
    {text}
  </motion.p>
);

export default function MysterySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-32 px-6 bg-slate-50 dark:bg-[#04060d] overflow-hidden transition-colors duration-700 min-h-[80vh] flex items-center justify-center">
      {/* Dynamic Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none" />
      
      <motion.div 
        style={{ opacity }}
        className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center gap-10 text-center glassmorphism py-20 px-8 rounded-[4rem] border border-white/40 shadow-xl dark:border-white/5 dark:shadow-2xl bg-white/40 dark:bg-white/5"
      >
        {line("We don’t build for fame.", 0.2)}
        {line("We build for usefulness.", 0.6)}

        <motion.div 
          className="w-16 h-[1px] bg-slate-300 dark:bg-slate-700 my-2"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.0 }}
        />

        {line("We don’t reveal our identities —", 1.2)}
        {line("because impact matters more than recognition.", 1.6)}

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 2.0, delay: 2.2, ease: 'circOut' }}
          viewport={{ once: true, amount: 0.7 }}
          className="relative mt-12"
        >
          <h2 className="text-6xl md:text-7xl font-bold tracking-tighter text-slate-900 dark:text-white drop-shadow-sm select-none">
            Manasalaaiyoo.
          </h2>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 blur-2xl"
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [0.9, 1.1, 0.9]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
