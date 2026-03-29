import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4 pt-20 dark:bg-black"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-[20%] left-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.15),transparent_60%)] mix-blend-multiply blur-3xl filter dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute -bottom-[20%] right-[10%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent_60%)] mix-blend-multiply blur-3xl filter dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex flex-col items-center justify-center"
        >
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8 inline-flex items-center rounded-full border border-blue-600/20 bg-white/60 px-5 py-2.5 text-sm font-semibold tracking-wide text-blue-700 shadow-[0_4px_20px_rgba(37,99,235,0.1)] backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-gray-300 dark:shadow-none"
          >
            <span className="relative flex h-2.5 w-2.5 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 dark:bg-gray-400"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 dark:bg-white"></span>
            </span>
            Meet the UnOfficial Eduserve App
          </motion.div>

          {/* Heading */}
          <h1 className="text-6xl font-black tracking-tight text-slate-900 drop-shadow-sm sm:text-7xl lg:text-8xl dark:text-white">
            Your Karunya Campus,{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent pb-2 dark:from-white dark:via-gray-300 dark:to-gray-500">
              Elevated.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-gray-400 sm:text-xl md:text-2xl font-medium drop-shadow-sm">
            A beautiful, lightning-fast experience designed exclusively to make your university life simpler and more connected. Built by first-year students.
          </p>

          {/* Call to Actions */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-6 sm:px-0">
            <a
              href="#download"
              className="group relative inline-flex min-h-[4rem] w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-blue-600 px-10 py-4 font-bold text-white shadow-[0_8px_30px_rgba(37,99,235,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(37,99,235,0.5)] dark:bg-white dark:text-black dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-gray-200 dark:to-white" />
              <span className="relative z-10 flex items-center gap-2">
                Download Now
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>
            
            <a
              href="#features"
              className="inline-flex min-h-[4rem] w-full sm:w-auto items-center justify-center rounded-full border-2 border-blue-600/10 bg-white/40 px-10 py-4 font-bold text-blue-900 backdrop-blur-md transition-all hover:bg-white/80 hover:text-blue-700 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 text-lg hover:scale-[1.02]"
            >
              Explore Features
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Glassmorphic Cards Decor */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden lg:block">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [12, 15, 12],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[5%] top-[25%] h-32 w-48 rounded-2xl border border-blue-600/10 bg-white/40 backdrop-blur-xl shadow-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="p-4 h-full flex flex-col gap-3 opacity-60">
            <div className="h-2.5 w-1/2 rounded-full bg-blue-600/40 dark:bg-white/30"></div>
            <div className="h-2 w-3/4 rounded-full bg-blue-400/30 dark:bg-white/20"></div>
            <div className="h-2 w-2/3 rounded-full bg-blue-400/30 dark:bg-white/20"></div>
          </div>
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [-15, -12, -15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute right-[5%] top-[45%] h-40 w-40 rounded-2xl border border-blue-600/10 bg-white/40 backdrop-blur-xl shadow-2xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
        >
           <div className="p-5 h-full flex items-center justify-center opacity-50">
            <div className="h-16 w-16 rounded-full border-[4px] border-blue-200 border-t-blue-600 dark:border-white/10 dark:border-t-white/60"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
