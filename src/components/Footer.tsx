import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full py-20 px-6 bg-slate-50 dark:bg-[#05060a] border-t border-slate-200 dark:border-white/5 relative z-10 overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-slate-500 dark:text-gray-500 font-light text-sm relative z-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-0 flex flex-col gap-1"
        >
          <p className="font-medium text-slate-900 dark:text-white text-lg tracking-tight">EduServe.</p>
          <p className="text-xs tracking-wide uppercase opacity-70">The Unofficial Standard.</p>
          <p className="mt-4 text-xs opacity-50">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center md:items-end gap-2"
        >
          <div className="group cursor-default">
            <span className="italic font-serif text-slate-600 dark:text-gray-400 tracking-wider text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-500">
              "We observe patterns, not people."
            </span>
            <div className="h-px w-0 bg-blue-500 group-hover:w-full transition-all duration-700 ease-out opacity-50"/>
          </div>
          <p className="text-[10px] tracking-widest uppercase opacity-40 mt-2">
            Designed in the shadows
          </p>
        </motion.div>
      </div>
    </footer>
  );
}