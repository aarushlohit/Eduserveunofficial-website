import { Suspense, lazy } from "react";
import Features from "./components/Features";
import AppShowcase from "./components/AppShowcase";
import Download from "./components/Download";
import Footer from "./components/Footer";
import MysterySection from "./components/MysterySection";
import AttitudeEnding from "./components/AttitudeEnding";
import ThemeToggle from "./components/ThemeToggle";

const Hero3D = lazy(() => import("./components/Hero3D"));

function App() {
  return (
    <div className="bg-slate-50 dark:bg-[#05060a] min-h-screen font-sans text-gray-900 dark:text-gray-100 selection:bg-neon-blue/30 selection:text-slate-900 dark:text-white relative transition-colors duration-500">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay"></div>
      
      <ThemeToggle />

      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-[#05060a]"><div className="w-10 h-10 border-t-2 border-neon-blue rounded-full animate-spin"></div></div>}>
        <Hero3D />
      </Suspense>
      <MysterySection />
      <Features />
      <AppShowcase />
      <Download />
      <AttitudeEnding />
      <Footer />
    </div>
  );
}

export default App;
