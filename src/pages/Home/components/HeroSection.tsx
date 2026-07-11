import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { SectionReveal, Soundwave } from '../../../components/common/Motion';
import { ProductShowcase } from './ProductShowcase';
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
        <motion.img
          style={{ y: bgY, scale: bgScale }}
          src={heroBgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover origin-center"
        />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center w-full max-w-6xl mx-auto -mt-12 lg:-mt-28 relative z-20">
          
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
    </SectionReveal>
  );
};
