import { motion } from 'framer-motion';

const FALLBACK_APK_URL =
  'https://github.com/aarushlohit/Linux-proof/releases/download/download/app-1.0.2.apk';

export default function Download() {
  const downloadUrl = import.meta.env.VITE_PUBLIC_APK_URL?.trim() || FALLBACK_APK_URL;

  return (
    <section id="download" className="relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,139,255,0.16),transparent_62%)] dark:bg-[radial-gradient(circle_at_center,rgba(79,139,255,0.12),transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-4xl"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/40 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] backdrop-blur-3xl dark:border-white/10 dark:bg-[#0b1224]/50 dark:shadow-[0_24px_80px_rgba(0,0,0,0.5)] sm:p-14 lg:p-16">
          <div className="pointer-events-none absolute -inset-px rounded-[2.5rem] bg-gradient-to-b from-white/60 to-transparent dark:from-white/10" />

          <div className="relative flex flex-col items-center text-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex rounded-full border border-blue-200/50 bg-blue-50/50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 backdrop-blur-md dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-300"
            >
              Direct APK Download
            </motion.div>

            <h2 className="mt-8 text-5xl font-black tracking-tight text-slate-900 drop-shadow-sm dark:text-white sm:text-6xl lg:text-7xl">
              Get the <span className="text-gradient">App.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl">
              Download the latest APK directly from the official source. Smooth, fast, and constantly evolving for a better campus experience.
            </p>

            <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex min-h-16 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-10 py-4 text-center text-lg font-bold text-white shadow-[0_14px_28px_-10px_rgba(37,99,235,0.7)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.9)]"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative flex items-center gap-2">
                  Download APK
                  <svg className="h-5 w-5 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
              </a>
            </div>

            <p className="mt-8 text-sm font-medium tracking-wide text-slate-500 dark:text-slate-400">
              Note: Enable "Install from unknown sources" in settings.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
