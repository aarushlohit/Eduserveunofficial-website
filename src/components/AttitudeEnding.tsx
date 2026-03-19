import { motion } from 'framer-motion';

const slowLine = (text: string, delay: number, className = '') => (
  <motion.p
    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    transition={{ duration: 1.2, delay, ease: 'easeOut' }}
    viewport={{ once: true, amount: 0.6 }}
    className={`text-center text-3xl md:text-5xl font-light tracking-tight text-slate-800 dark:text-gray-100 ${className}`}
  >
    {text}
  </motion.p>
);

export default function AttitudeEnding() {
  return (
    <section className="relative py-40 px-6 bg-slate-50 dark:bg-[#05060a] overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">
      {/* Dynamic Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,139,255,0.15),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(79,139,255,0.08),transparent_55%)] pointer-events-none" />
      
      {/* Decorative vertical line */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: 100, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent absolute top-0 left-1/2 -translate-x-1/2"
      />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center gap-8 text-center">
        {slowLine("Who is he?", 0, "italic text-slate-400 dark:text-gray-500")}
        {slowLine("Or… is it she?", 0.5, "italic text-slate-400 dark:text-gray-500")}
        
        <div className="my-8" /> 

        {slowLine("Find it.", 1.2, 'font-bold text-blue-600 dark:text-blue-400')}
        
        <motion.p
           initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
           whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
           transition={{ duration: 0.8, delay: 1.8, type: "spring", bounce: 0.5 }}
           viewport={{ once: true }}
           className="text-center text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mt-4 drop-shadow-xl"
        >
          …if you can.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2.5 }}
          className="mt-16 relative group cursor-help"
        >
          <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <p className="relative text-sm tracking-[0.5em] uppercase text-slate-400 dark:text-gray-500 font-medium">
            bae.
          </p>
        </motion.div>
      </div>
      
      {/* Decorative vertical line bottom */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: 100, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent absolute bottom-0 left-1/2 -translate-x-1/2"
      />
    </section>
  );
}
