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
    <section ref={containerRef} className="relative py-32 px-6 bg-white dark:bg-black overflow-hidden transition-colors duration-700 min-h-[80vh] flex items-center justify-center">
      {/* Dynamic Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl dark:bg-white/5" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl dark:bg-white/5" />
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />
      
      <motion.div 
        style={{ opacity }}
        className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center gap-10 text-center py-20 px-8 rounded-[4rem] border border-blue-600/10 shadow-[0_8px_40px_rgba(37,99,235,0.15)] bg-white/50 backdrop-blur-2xl dark:border-white/10 dark:shadow-[0_8px_40px_rgba(0,0,0,0.8)] dark:bg-white/5"
      >
        {line("We don’t build for fame.", 0.2)}
        {line("We build for usefulness.", 0.6)}

        <motion.div 
          className="w-16 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent dark:via-white/30 my-2"
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
          className="relative mt-8"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-blue-950 via-slate-800 to-blue-900 dark:from-white dark:via-gray-200 dark:to-gray-500 drop-shadow-sm select-none py-2">
            Manasalaaiyoo.
          </h2>
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-10 blur-3xl dark:from-white dark:to-gray-400 dark:opacity-[0.15]"
            animate={{ 
              opacity: [0.1, 0.25, 0.1],
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
