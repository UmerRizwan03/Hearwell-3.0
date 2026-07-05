import { useState, useCallback } from 'react';
import { ArrowRight, ArrowUpRight, Ear } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionReveal } from '../../../components/common/Motion';
import { categories } from '../data';

/* ─── Animation Variants ─── */
const primaryCardVariants = {
  initial: { opacity: 0, scale: 0.96, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.98, y: -10 },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.88, rotate: -2 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  exit: { opacity: 0, scale: 0.92, rotate: 2 },
};

const specChipVariants = {
  initial: { opacity: 0, y: 12, scale: 0.9 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.25 + i * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

const featureVariants = {
  initial: { opacity: 0, x: -8 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] as any },
  }),
};

export const HearingAidsShowcase = () => {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find(c => c.id === activeId)!;
  const secondaryCards = categories.filter(c => c.id !== activeId);

  const handleCardSelect = useCallback((id: string) => {
    if (id !== activeId) {
      setActiveId(id);
    }
  }, [activeId]);

  return (
    <SectionReveal className="relative py-20 lg:py-28 overflow-hidden">
      {/* ── Ambient background layers ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft radial glow — follows active card colour */}
        <motion.div
          key={activeId + '-glow'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 30% 40%, ${active.glowColor} / 0.07, transparent 70%),
              radial-gradient(ellipse 50% 60% at 80% 60%, oklch(0.42 0.08 175 / 0.04), transparent 70%)
            `,
          }}
        />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02] bg-[length:40px_40px]" />
        {/* Floating decorative dots */}
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] left-[8%] w-3 h-3 rounded-full"
          style={{ background: active.glowColor, opacity: 0.25 }}
        />
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-[25%] right-[12%] w-2 h-2 rounded-full bg-[var(--color-primary)] opacity-20"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-[20%] left-[15%] w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] opacity-15"
        />
        <motion.div
          animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-[30%] right-[8%] w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-15"
        />
      </div>

      <div className="hw-container relative z-10">

        {/* ── Bento Grid: Primary + 6 Secondary Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 auto-rows-auto">

          {/* ─── PRIMARY CARD (spans 8 cols, 2 rows) ─── */}
          <div className="lg:col-span-8 lg:row-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                variants={primaryCardVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="ha-glass-card ha-glass-card-primary relative overflow-hidden h-full cursor-default"
                role="tabpanel"
                id={`panel-${activeId}`}
              >
                {/* Inner ambient glow */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-[inherit]"
                  style={{
                    background: `
                      radial-gradient(ellipse 60% 45% at 35% 70%, ${active.glowColor} / 0.1, transparent),
                      radial-gradient(ellipse 40% 35% at 75% 30%, oklch(0.42 0.08 175 / 0.05), transparent)
                    `,
                  }}
                />

                {/* Content layout */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 p-6 sm:p-8 lg:p-10 items-center h-full min-h-[480px] lg:min-h-[560px]">
                  {/* Left: Product image stage */}
                  <div className="relative flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeId + '-primary-img'}
                        src={active.image}
                        alt={active.name}
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full max-w-[600px] scale-[1.3] lg:scale-[1.75] lg:-translate-x-6 aspect-square object-contain transform-gpu"
                        style={{ filter: 'drop-shadow(0 20px 40px oklch(0 0 0 / 0.15))' }}
                      />
                    </AnimatePresence>

                    {/* Floating ring decoration */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-[-30%] rounded-full pointer-events-none"
                      style={{
                        border: '1px dashed oklch(0.42 0.08 175 / 0.12)',
                      }}
                    />
                  </div>

                  {/* Right: Details */}
                  <div className="flex flex-col justify-center">
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15, duration: 0.4 }}
                      className="mb-4"
                    >
                      <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase text-[var(--color-primary)] bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/15">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                        {active.abbr}
                      </span>
                    </motion.div>

                    {/* Name + tagline */}
                    <motion.h2
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.18, duration: 0.45 }}
                      className="text-[clamp(1.6rem,1.2rem+2vw,2.5rem)] font-display font-bold text-[var(--color-ink)] leading-[1.08] tracking-tight mb-2"
                    >
                      {active.name}
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.22, duration: 0.4 }}
                      className="text-[var(--color-primary)] font-semibold text-base mb-4"
                    >
                      {active.tagline}
                    </motion.p>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                      className="text-[var(--color-ink-secondary)] text-sm leading-relaxed mb-5 max-w-md"
                    >
                      {active.description}
                    </motion.p>

                    {/* Suitability pill */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.28, duration: 0.4 }}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[var(--color-ink)] bg-[var(--color-surface)] border border-[var(--color-border)] mb-5 w-fit"
                    >
                      <Ear size={13} className="text-[var(--color-primary)] shrink-0" />
                      {active.suitability}
                    </motion.div>

                    {/* Spec chips */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {active.specs.map((spec, i) => {
                        const Icon = spec.icon;
                        return (
                          <motion.div
                            key={spec.label}
                            custom={i}
                            variants={specChipVariants}
                            initial="initial"
                            animate="animate"
                            className="ha-spec-chip"
                          >
                            <Icon size={12} className="text-[var(--color-primary)]" />
                            {spec.label}
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Features */}
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-7">
                      {active.features.map((feat, i) => (
                        <motion.li
                          key={feat}
                          custom={i}
                          variants={featureVariants}
                          initial="initial"
                          animate="animate"
                          className="flex items-center gap-2 text-[13px] text-[var(--color-ink-secondary)] font-medium"
                        >
                          <span className="w-1 h-1 rounded-full bg-[var(--color-primary)] shrink-0" />
                          {feat}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTAs */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      className="flex flex-wrap gap-3"
                    >
                      <Link to="/booking" className="hw-btn hw-btn-primary">
                        Book Assessment <ArrowRight size={15} />
                      </Link>
                      <Link to="/contact" className="hw-btn hw-btn-secondary">
                        Learn More
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ─── SECONDARY CARDS (6 cards in 2 cols × 3 rows on right) ─── */}
          {secondaryCards.map((cat, i) => (
            <motion.button
              key={cat.id}
              onClick={() => handleCardSelect(cat.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              aria-label={`Select ${cat.name}`}
              className="lg:col-span-2 ha-glass-card ha-glass-card-secondary group cursor-pointer text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
            >
              {/* Hover glow overlay */}
              <div
                className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 50% 80%, ${cat.glowColor} / 0.08, transparent)`,
                }}
              />

              <div className="relative z-10 p-4 lg:p-5 flex flex-col h-full">
                {/* Image */}
                <div className="relative flex-1 flex items-center justify-center min-h-[100px] mb-3">
                  <img
                    src={cat.image}
                    alt={cat.abbr}
                    className="w-full max-w-[140px] lg:max-w-[120px] scale-110 lg:scale-125 aspect-square object-contain transition-all duration-500 group-hover:scale-[1.25] lg:group-hover:scale-[1.4] group-hover:-translate-y-2"
                    style={{ filter: 'drop-shadow(0 8px 16px oklch(0 0 0 / 0.08))' }}
                  />
                </div>

                {/* Info */}
                <div className="flex items-end justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold tracking-wider uppercase text-[var(--color-primary)] mb-0.5">
                      {cat.abbr}
                    </p>
                    <p className="text-xs font-semibold text-[var(--color-ink)] truncate leading-tight">
                      {cat.name}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[var(--color-surface)] border border-[var(--color-border)] shrink-0 transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:border-[var(--color-primary)]">
                    <ArrowUpRight
                      size={13}
                      className="text-[var(--color-ink-muted)] transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
};
