import { motion } from 'framer-motion';

export default function AppShowcase() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-6 py-24 dark:from-[#05060a] dark:via-[#070b14] dark:to-[#05060a]">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200">
            Refined Interface
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Clean layout built for pure focus.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            Smooth interactions, clear hierarchy, and responsive structure that feels great across devices.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-2xl font-black text-slate-900 dark:text-white">Fast</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Quick loading and snappy interactions.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-2xl font-black text-slate-900 dark:text-white">Stable</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Predictable rendering on all screens.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950">
              <p className="text-2xl font-black text-slate-900 dark:text-white">Light</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Lower CPU and memory usage.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] dark:border-slate-800 dark:bg-slate-950"
        >
          <div className="rounded-[1.5rem] bg-slate-50 p-4 dark:bg-slate-900">
            <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Dashboard
                </p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-2xl bg-slate-100 px-4 py-3 dark:bg-slate-800" />
                  <div className="rounded-2xl bg-slate-100 px-4 py-3 dark:bg-slate-800" />
                  <div className="rounded-2xl bg-slate-100 px-4 py-3 dark:bg-slate-800" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.4rem] border border-slate-200 bg-blue-600 p-5 text-white dark:border-blue-500/30">
                  <p className="text-sm uppercase tracking-[0.22em] text-blue-100/80">Shortcuts</p>
                  <p className="mt-3 text-xl font-bold">Results, notices, and payments in one flow.</p>
                </div>
                <div className="rounded-[1.4rem] border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-950">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Performance</p>
                  <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                    Lightweight interface tuned for steady performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
