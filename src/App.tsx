import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppCTA from './components/features/WhatsAppCTA';
import ErrorBoundary from './components/layout/ErrorBoundary';
import SEO from './components/common/SEO';
import Loader from './components/common/Loader';
import { pageTransition } from './utils/motion';

import { lazy, Suspense, useRef, useEffect, useState } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Doctor = lazy(() => import('./pages/Doctor'));
const Services = lazy(() => import('./pages/Services'));
const HearingAids = lazy(() => import('./pages/HearingAids'));
const Locations = lazy(() => import('./pages/Locations'));
const Contact = lazy(() => import('./pages/Contact'));
const Booking = lazy(() => import('./pages/Booking'));
const Blog = lazy(() => import('./pages/Blog'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const NotFound = lazy(() => import('./pages/NotFound'));

/* Intro Screen */
function IntroScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // 2 second branded intro

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[var(--z-loading)] bg-[var(--color-bg)] flex flex-col items-center justify-center gap-6"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-16 h-16"
      >
        <img src="/logo.webp" alt="Hearwell" className="w-full h-full object-contain" />
      </motion.div>
      <div className="flex gap-1.5 items-center">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ height: 4 }}
            animate={{ 
              height: [4, 16 + Math.random() * 16, 4],
            }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              repeatType: "mirror",
              ease: "easeInOut",
              delay: i * 0.1 
            }}
            className="w-1 rounded-full bg-[var(--color-primary)]"
          />
        ))}
      </div>
    </motion.div>
  );
}

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

/* Scroll progress indicator */
function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${pct})`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div ref={barRef} className="scroll-progress" />;
}

/* Smooth Scroll Provider */
function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

/* Animated page wrapper */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Suspense fallback={<Loader />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hearing-aids" element={<HearingAids />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    return !hasSeenIntro;
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setShowIntro(false);
  };

  return (
    <SmoothScroll>
      <Router>
        <AnimatePresence>
          {showIntro && <IntroScreen onComplete={handleIntroComplete} />}
        </AnimatePresence>

        {!showIntro && (
          <>
            <SEO />
            <ScrollToTop />
            <ScrollProgress />
            
            {/* ─── Global Ethereal Background ─── */}
            <div
              className="fixed inset-0 z-0 pointer-events-none"
              style={{
                background: `
                  radial-gradient(ellipse 80% 60% at 30% 20%, oklch(0.42 0.08 175 / 0.08), transparent 70%),
                  radial-gradient(ellipse 60% 80% at 70% 80%, oklch(0.42 0.08 175 / 0.06), transparent 70%)
                `,
              }}
            />

            <div className="flex flex-col min-h-[100dvh] relative z-10">
              <Navbar />
              <main className="flex-grow">
                <ErrorBoundary>
                  <AnimatedRoutes />
                </ErrorBoundary>
              </main>
              <Footer />
              <WhatsAppCTA />
            </div>
          </>
        )}
      </Router>
    </SmoothScroll>
  );
}

export default App;
