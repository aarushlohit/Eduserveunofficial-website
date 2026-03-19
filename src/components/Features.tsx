import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FileText, Bot, CreditCard, BellRing } from 'lucide-react';

const features = [
  {
    title: 'Results Viewer',
    description: 'Instant access to your semantic grades and transcripts right from your pocket.',
    icon: <FileText className="text-blue-600 dark:text-neon-blue w-8 h-8" />
  },
  {
    title: 'AI Assistant',
    description: 'Ask anything about your campus, timetable, or syllabus and get precise answers powered by EduServe AI.',
    icon: <Bot className="text-blue-600 dark:text-neon-emerald w-8 h-8" />
  },
  {
    title: 'Fee Payments',
    description: 'Secure, zero-friction fee transactions using ultra-secure edge payment gateways.',
    icon: <CreditCard className="text-blue-600 dark:text-neon-blue w-8 h-8" />
  },
  {
    title: 'Notifications',
    description: 'Never miss an event, class cancellation, or important deadline with real-time push alerts.',
    icon: <BellRing className="text-blue-600 dark:text-neon-emerald w-8 h-8" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring' as const, stiffness: 50 } 
  }
};

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 3D tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 400, damping: 40 });
  const ySpring = useSpring(y, { stiffness: 400, damping: 40 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // flashlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    // 3d tilt
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;

    const xPct = mouseXPos / width - 0.5;
    const yPct = mouseYPos / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group glassmorphism p-8 rounded-3xl transition-colors duration-500 hover:bg-black/5 dark:hover:bg-white/5 cursor-default overflow-visible z-10"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(79, 139, 255, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} className="relative z-20">
        <div className="bg-black/5 dark:bg-white/5 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-inner border border-black/5 dark:border-white/5 group-hover:border-neon-blue/40 group-hover:shadow-[0_0_20px_rgba(79,139,255,0.2)] transition-all">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 tracking-wide group-hover:text-neon-blue transition-colors relative z-10">{feature.title}</h3>
        <p className="text-slate-500 dark:text-gray-400 group-hover:text-slate-600 dark:text-gray-300 leading-relaxed font-light transition-colors relative z-10">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-24 px-6 relative bg-slate-50 dark:bg-[#05060a] overflow-hidden" id="features">
      {/* Background decorations */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-neon-blue/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-neon-emerald/12 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5">
            Next-Gen <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-slate-700 dark:text-gray-200 text-xl max-w-2xl mx-auto leading-relaxed">
            Engineered to remove friction from your academic lifestyle. Experience the standard in campus management.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
          style={{ perspective: 1500 }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}