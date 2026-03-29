import Hero from "./components/Hero3D";
import Features from "./components/Features";
import Download from "./components/Download";
import Footer from "./components/Footer";
import MysterySection from "./components/MysterySection";
import AttitudeEnding from "./components/AttitudeEnding";
import ThemeToggle from "./components/ThemeToggle";
import Legal from "./components/Legal";
import { useState, useEffect } from "react";

function App() {
  const [currentView, setCurrentView] = useState(window.location.hash || '#');

  useEffect(() => {
    const onHashChange = () => {
      setCurrentView(window.location.hash || '#');
      window.scrollTo(0, 0); // scroll to top when changing views
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  if (currentView === '#legal') {
    return <Legal />;
  }

  return (
    <div className="bg-slate-50 dark:bg-[#05060a] min-h-screen font-sans text-gray-900 dark:text-gray-100 selection:bg-neon-blue/30 selection:text-slate-900 dark:text-white relative transition-colors duration-500">
      <div className="fixed inset-0 bg-noise pointer-events-none z-50 mix-blend-overlay"></div>
      
      <ThemeToggle />
      <Hero />
      <MysterySection />
      <Features />
      <Download />
      <AttitudeEnding />
      <Footer />
    </div>
  );
}

export default App;
