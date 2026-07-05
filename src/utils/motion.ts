/**
 * Hearwell v2 — Motion System
 *
 * Soundwave-inspired motion language.
 * Every animation should feel like sound: propagation, oscillation, resonance.
 */

import type { Variants, Transition } from 'framer-motion';

/* ─── Timing Constants ─── */
export const DURATION = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
  reveal: 0.9,
} as const;

/* ─── Easing ─── */
export const EASE = {
  outExpo: [0.16, 1, 0.3, 1] as [number, number, number, number],
  outQuart: [0.25, 1, 0.5, 1] as [number, number, number, number],
  inOutCubic: [0.65, 0, 0.35, 1] as [number, number, number, number],
  spring: { type: 'spring' as const, damping: 28, stiffness: 100 },
  springSnappy: { type: 'spring' as const, damping: 20, stiffness: 150 },
  springGentle: { type: 'spring' as const, damping: 32, stiffness: 80 },
};

/* ─── Fade + Up (default scroll reveal) ─── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.outExpo },
  },
};

/* ─── Fade only ─── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASE.outQuart },
  },
};

/* ─── Fade + Scale (images, hero visuals) ─── */
export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: DURATION.reveal, ease: EASE.outExpo },
  },
};

/* ─── Slide in from left ─── */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE.outExpo },
  },
};

/* ─── Slide in from right ─── */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.slow, ease: EASE.outExpo },
  },
};

/* ─── Stagger container — sound propagation pattern ─── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/* ─── Stagger item ─── */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.outExpo },
  },
};

/* ─── Page transition — cinematic crossfade ─── */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE.outExpo },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.25, ease: EASE.inOutCubic },
  },
};

/* ─── Section reveal ─── */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE.outExpo },
  },
};

/* ─── Hero stagger ─── */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.outExpo },
  },
};

/* ─── Card hover ─── */
export const cardHover = {
  y: -4,
  transition: EASE.springSnappy,
};

export const cardTap = {
  scale: 0.98,
  transition: EASE.springSnappy,
};

/* ─── Animated structural line ─── */
export const animatedDivider: Variants = {
  hidden: { scaleX: 0, opacity: 0, transformOrigin: 'left' },
  visible: {
    scaleX: 1,
    opacity: 1,
    transformOrigin: 'left',
    transition: { duration: 1.2, ease: EASE.outExpo },
  },
};

/* ─── Scale up ─── */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE.outExpo },
  },
};

/* ─── Viewport config ─── */
export const defaultViewport = {
  once: true,
  amount: 0.15 as const,
  margin: '-40px' as const,
};

/* ─── Spring presets (re-exported for direct use) ─── */
export const SPRING_GENTLE: Transition = EASE.springGentle;
export const SPRING_SNAPPY: Transition = EASE.springSnappy;
