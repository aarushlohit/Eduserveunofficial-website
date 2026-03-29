import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import Footer from './Footer';

const SectionCard = ({ number, title, children }: { number: string | number, title: string, children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className="p-6 md:p-8 rounded-3xl bg-white/50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.05] hover:bg-white/80 dark:hover:bg-white/[0.04] transition-colors relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/5 blur-3xl -mr-10 -mt-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    <div className="flex items-start gap-4 md:gap-5 relative z-10">
      <span className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold shadow-sm border border-blue-200 dark:border-blue-500/20">
        {number}
      </span>
      <div className="space-y-4 text-slate-600 dark:text-slate-300 w-full">
        <h2 className="text-xl font-medium tracking-tight text-slate-900 dark:text-white mt-1.5">{title}</h2>
        <div className="space-y-3 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </motion.div>
);

export default function Legal() {
  return (
    <div className="bg-slate-50 dark:bg-[#05060a] min-h-screen font-sans selection:bg-neon-blue/30 selection:text-slate-900 overflow-x-hidden relative transition-colors duration-500 py-20 px-4 sm:px-6">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay"></div>
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none"></div>
      
      <ThemeToggle />
      
      <div className="max-w-4xl mx-auto space-y-24 relative z-20">
        
        {/* Navigation back */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="mb-8"
        >
          <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all cursor-pointer backdrop-blur-md group shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
            <span className="font-medium text-sm tracking-wide">Back to Home</span>
          </a>
        </motion.div>

        {/* Terms of Use */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center sm:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium text-slate-900 dark:text-white mb-6">Terms of Use</h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-medium uppercase tracking-wider">
              <span className="px-3 py-1.5 rounded-md bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                Effective: March 29, 2026
              </span>
              <span className="px-3 py-1.5 rounded-md bg-slate-200 text-slate-700 dark:bg-white/5 dark:text-slate-400 border border-slate-300 dark:border-white/10">
                Updated: March 29, 2026
              </span>
            </div>
          </motion.div>

          <div className="space-y-4">
            <SectionCard number="1" title="Independent Nature">
              <p>EduServe is an independent, student-developed interface designed to streamline access to publicly available institutional web resources.</p>
              <p>It operates strictly as a convenience layer and does not alter, replicate, or interfere with underlying systems.</p>
              <p>TEAM X is not affiliated with, endorsed by, or acting on behalf of any institution, including Karunya Institute of Technology and Sciences.</p>
            </SectionCard>

            <SectionCard number="2" title="Neutral Access Platform">
              <p>EduServe functions as a passive access facilitator.</p>
              <p>All user interactions, authentications, and transactions occur directly between the user and the respective official platforms. At no point does EduServe:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                {['Intercept credentials', 'Modify data', 'Store records'].map((item) => (
                  <li key={item} className="flex items-center gap-2 bg-white dark:bg-black/20 p-2.5 rounded-lg border border-slate-100 dark:border-white/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard number="3" title="User Autonomy and Accountability">
              <p>Users access EduServe voluntarily and retain full responsibility for their actions.</p>
              <p>Use of the application constitutes acknowledgment that:</p>
              <ul className="space-y-2 mt-3">
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✦</span> All actions performed are user-initiated</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✦</span> All outcomes remain the user's responsibility</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-1">✦</span> Compliance with institutional policies remains the user's obligation</li>
              </ul>
            </SectionCard>

            <SectionCard number="4" title="No Institutional Interference">
              <p>EduServe does not bypass security mechanisms, automate restricted processes, or provide unauthorized access pathways.</p>
              <p>It merely surfaces publicly reachable endpoints through a structured interface.</p>
            </SectionCard>

            <SectionCard number="5" title="Limitation of Liability">
              <p>To the fullest extent permitted by applicable law, TEAM X shall not be liable for:</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {['Service interruptions', 'Access issues', 'Institutional restrictions', 'Account-related actions', 'Data interpretation'].map((item) => (
                  <span key={item} className="px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </SectionCard>

            <SectionCard number="6" title="Third-Party Governance">
              <p>All external services accessed through EduServe are governed solely by their respective terms and policies.</p>
              <p>Users acknowledge that institutional platforms retain full authority over access control, account status, and system usage.</p>
            </SectionCard>

            <SectionCard number="7" title="No Operational Control">
              <p>TEAM X does not exercise control over institutional systems and cannot influence administrative decisions, modify institutional outcomes, or intervene in user account actions.</p>
            </SectionCard>

            <SectionCard number="8" title="Risk Acknowledgment">
              <p>Use of aggregated access tools may be subject to interpretation under institutional frameworks. Users voluntarily assume all associated risks arising from their use of such tools.</p>
            </SectionCard>

            <SectionCard number="9" title="Service Modification">
              <p>TEAM X reserves the right to modify features, restrict access, or discontinue services at any time without prior notice.</p>
            </SectionCard>

            <SectionCard number="10" title="Acceptance">
              <p>Continued use of EduServe constitutes full acceptance of these terms.</p>
            </SectionCard>
          </div>
        </section>

        {/* Privacy Policy */}
        <section className="pt-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center sm:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-medium text-slate-900 dark:text-white mb-6">Privacy Policy</h1>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-medium uppercase tracking-wider">
              <span className="px-3 py-1.5 rounded-md bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                Effective: March 29, 2026
              </span>
            </div>
          </motion.div>

          <div className="space-y-4">
            <SectionCard number="1" title="Minimal Data Principle">
              <p>EduServe follows a strict minimal data approach.</p>
              <p>We only process data necessary for authentication continuity and basic usage analytics.</p>
              <div className="mt-4 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 text-red-900 dark:text-red-200">
                <p className="font-semibold mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                  We do NOT collect:
                </p>
                <ul className="flex flex-wrap gap-4 text-sm font-medium">
                  <li className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-red-400"></span> Passwords</li>
                  <li className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-red-400"></span> Academic records</li>
                  <li className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-red-400"></span> Sensitive personal data</li>
                </ul>
              </div>
            </SectionCard>

            <SectionCard number="2" title="Credential Isolation">
              <p>All authentication processes occur directly with official systems.</p>
              <p>EduServe does not store credentials, access secure input fields, or log authentication data.</p>
            </SectionCard>

            <SectionCard number="3" title="Localized Processing">
              <p>Where applicable, session-related data may be temporarily maintained on-device to improve user experience. Such data remains under user device control.</p>
            </SectionCard>

            <SectionCard number="4" title="Analytics (Non-Intrusive)">
              <p>We collect limited, non-identifiable usage metrics such as feature usage frequency, session duration, and tab interaction counts.</p>
              <p className="mt-2 text-sm italic opacity-80 border-l-2 border-blue-500 pl-3">No behavioral profiling or sensitive tracking is performed.</p>
            </SectionCard>

            <SectionCard number="5" title="External Systems Disclaimer">
              <p>EduServe interacts with third-party institutional platforms. We do not control or assume responsibility for their data handling practices, security policies, or user management actions.</p>
            </SectionCard>

            <SectionCard number="6" title="Data Sharing">
              <p>We strictly do not sell data, share data with third parties, or use data for advertising.</p>
            </SectionCard>

            <SectionCard number="7" title="Security Posture">
              <p>Reasonable safeguards are implemented; however, no digital system guarantees absolute security.</p>
            </SectionCard>

            <SectionCard number="8" title="User Control">
              <p>Users retain full control by discontinuing app usage or clearing local app data at any time.</p>
            </SectionCard>

            <SectionCard number="9" title="Policy Updates">
              <p>This policy may be updated without prior notice.</p>
            </SectionCard>

            <SectionCard number="10" title="Consent">
              <p>Use of EduServe implies informed consent to this policy.</p>
            </SectionCard>
          </div>
          
          {/* Signoff */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 flex flex-col items-center justify-center text-center space-y-3"
          >
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent mb-4"></div>
            <p className="font-semibold tracking-widest uppercase text-slate-900 dark:text-white text-sm">TEAM X</p>
            <p className="text-sm text-slate-500 dark:text-slate-400 italic">"We build quietly. We build responsibly."</p>
          </motion.div>
        </section>
        
      </div>
      
      <div className="mt-32">
        <Footer />
      </div>
    </div>
  );
}
