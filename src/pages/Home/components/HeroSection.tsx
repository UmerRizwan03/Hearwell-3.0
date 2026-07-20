import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { SectionReveal, Soundwave } from '../../../components/common/Motion';
import { ProductShowcase } from './ProductShowcase';
import OptimizedImage from '../../../components/common/OptimizedImage';
import heroBgImage from '../../../assets/hero bg.webp';

export const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const bgY = useTransform(scrollYProgress, [0, 0.2], ['0%', '15%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <SectionReveal 
      className="relative min-h-[100dvh] lg:h-[100dvh] lg:max-h-[900px] flex flex-col justify-start lg:justify-center overflow-hidden bg-transparent pt-24 pb-16 lg:pt-16 lg:pb-0"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 w-full h-full origin-center">
          <OptimizedImage
            priority
            src={heroBgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            containerClassName="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Mouse hover gradient effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 0, 0, 0.015),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-[length:32px_32px] invert pointer-events-none" />

      <div className="hw-container relative z-10 w-full">
        {/* Top: Typography (Caption & Heading) */}
        <motion.div 
          style={{ opacity, y, willChange: 'transform, opacity' }} 
          className="flex flex-col w-full max-w-5xl mx-auto relative z-30 pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full"
          >
            <div className="flex items-center gap-4 mb-6 lg:mb-10 lg:absolute lg:-top-6 lg:left-0 z-10">
              <Soundwave bars={4} color="var(--color-primary)" className="h-4" />
              <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[var(--color-primary)] drop-shadow-md">
                Premium Hearing & Speech Care
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-[var(--color-ink)] text-center text-balance lg:mt-6 drop-shadow-2xl">
              Precision diagnostics and compassionate therapy.
            </h1>
          </motion.div>
        </motion.div>

        {/* Bottom: 3D Image & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-6xl mx-auto mt-8 lg:-mt-28 relative z-20">
          
          {/* Left Column: 3D Product Showcase */}
          <motion.div 
            style={{ opacity, y: useTransform(scrollYProgress, [0, 0.2], [0, 50]), willChange: 'transform, opacity' }} 
            className="relative w-full flex justify-center lg:justify-end pointer-events-none z-20"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="pointer-events-auto w-full max-w-[350px] lg:max-w-[400px]"
            >
              <ProductShowcase />
            </motion.div>
          </motion.div>

          {/* Right Column: Paragraph & CTAs */}
          <motion.div 
            style={{ opacity, y, willChange: 'transform, opacity' }} 
            className="flex flex-col items-center text-center lg:items-start lg:text-left pt-2 lg:pt-28"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="flex flex-col items-center lg:items-start w-full"
            >
              <p className="text-base md:text-lg text-[var(--color-ink-secondary)] max-w-md leading-relaxed mb-8 drop-shadow-xl">
                Expert hearing tests, advanced hearing aid fitting, and speech therapy for all ages. Reconnect with the sounds of life.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pointer-events-auto mt-4 w-full px-6 sm:px-0 sm:w-auto">
                <Link to="/booking" className="hw-btn hw-btn-primary hw-btn-lg whitespace-nowrap w-full sm:w-auto justify-center shadow-2xl shadow-black/30 hover:shadow-black/50 hover:-translate-y-1 transition-all">
                  Book an Assessment
                </Link>
                <Link to="/services" className="hw-btn hw-btn-secondary hw-btn-lg whitespace-nowrap w-full sm:w-auto justify-center shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1 transition-all bg-white/90 backdrop-blur-sm">
                  Explore Services
                </Link>
              </div>


            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Review Pill at bottom left */}
      <div className="absolute bottom-6 lg:bottom-12 inset-x-0 z-30 pointer-events-none">
        <div className="hw-container">
          <div className="pointer-events-auto bg-white/90 backdrop-blur-md border border-[var(--color-border)] rounded-full px-4 sm:px-5 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-wrap justify-center sm:flex-nowrap items-center gap-3 sm:gap-4 w-fit max-w-[90vw] mx-auto sm:mx-0">
            {/* Stars and Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#F59E0B] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[13px] sm:text-sm font-bold text-[var(--color-ink)] whitespace-nowrap">4.9/5 <span className="font-medium text-[var(--color-ink-muted)]">Rated</span></span>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-[var(--color-border-strong)]"></div>

            {/* Avatars */}
            <div className="flex -space-x-2 sm:-space-x-3">
              <img className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1" alt="Patient" />
              <img className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=2" alt="Patient" />
              <img className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=3" alt="Patient" />
              <img className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=4" alt="Patient" />
              <img className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=5" alt="Patient" />
            </div>

            {/* Text */}
            <span className="text-[13px] sm:text-base font-bold text-[#3B82F6] whitespace-nowrap">5,000+ <span className="font-medium">Patients</span></span>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};
