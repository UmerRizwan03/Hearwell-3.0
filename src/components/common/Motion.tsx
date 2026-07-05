/**
 * Hearwell v2 — Reusable Motion Components
 *
 * Drop-in animated wrappers that integrate with the global motion system.
 * All components respect prefers-reduced-motion via Framer Motion.
 */

import React from 'react';
import { motion } from 'framer-motion';
import type { Variants, HTMLMotionProps } from 'framer-motion';
import {
  fadeUp,
  fadeIn,
  fadeScale,
  staggerContainer,
  staggerItem,
  sectionReveal,
  defaultViewport,
  EASE,
} from '../../utils/motion';

/* ─── Shared Props ─── */
interface MotionWrapperProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

/* ─── FadeIn (fade + rise) ─── */
export const FadeIn: React.FC<MotionWrapperProps> = ({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  ...rest
}) => (
  <motion.div
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    className={className}
    {...(delay
      ? { transition: { delay, duration: 0.7, ease: EASE.outExpo } }
      : {})}
    {...rest}
  >
    {children}
  </motion.div>
);

/* ─── FadeOnly (no movement) ─── */
export const FadeOnly: React.FC<MotionWrapperProps> = ({
  children,
  className,
  delay = 0,
  ...rest
}) => (
  <motion.div
    variants={fadeIn}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    className={className}
    {...(delay ? { transition: { delay, duration: 0.5 } } : {})}
    {...rest}
  >
    {children}
  </motion.div>
);

/* ─── FadeScaleIn (images, hero visuals) ─── */
export const FadeScaleIn: React.FC<MotionWrapperProps> = ({
  children,
  className,
  delay = 0,
  ...rest
}) => (
  <motion.div
    variants={fadeScale}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    className={className}
    {...(delay
      ? { transition: { delay, duration: 0.9, ease: EASE.outExpo } }
      : {})}
    {...rest}
  >
    {children}
  </motion.div>
);

/* ─── SectionReveal ─── */
export const SectionReveal: React.FC<MotionWrapperProps> = ({
  children,
  className = '',
  ...rest
}) => (
  <motion.section
    variants={sectionReveal}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    className={`relative ${className}`}
    {...rest}
  >
    {children}
  </motion.section>
);

/* ─── Stagger Container + Item ─── */
interface StaggerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerProps> = ({
  children,
  className,
  ...rest
}) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={defaultViewport}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<StaggerProps> = ({
  children,
  className,
  ...rest
}) => (
  <motion.div
    variants={staggerItem}
    className={className}
    {...rest}
  >
    {children}
  </motion.div>
);

/* ─── Parallax Wrapper ─── */
interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export const Parallax: React.FC<ParallaxProps> = ({
  children,
  className = '',
  offset = 30,
}) => (
  <motion.div
    initial={{ y: offset }}
    whileInView={{ y: -offset }}
    viewport={{ once: false, amount: 0 }}
    transition={{ duration: 0.8, ease: 'linear' }}
    style={{ willChange: 'transform' }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Section Divider — animated soundwave line ─── */
export const SectionDivider: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`hw-container pointer-events-none ${className}`}>
    <div className="hw-divider" />
  </div>
);

/* ─── Soundwave Visual ─── */
interface SoundwaveProps {
  bars?: number;
  className?: string;
  color?: string;
  active?: boolean;
}

export const Soundwave: React.FC<SoundwaveProps> = ({
  bars = 5,
  className = '',
  color = 'var(--color-primary)',
  active = true
}) => {
  if (!active) {
    return (
      <div className={`flex items-end gap-[3px] h-4 ${className}`} aria-hidden>
        {Array.from({ length: bars }).map((_, i) => (
          <div key={i} className="w-[3px] h-[3px] rounded-full opacity-40" style={{ background: color }} />
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-end gap-[3px] h-4 ${className}`} aria-hidden>
      {Array.from({ length: bars }).map((_, i) => (
        <div 
          key={i} 
          className="w-[3px] rounded-full h-full animate-[soundwave_1.2s_ease-in-out_infinite]"
          style={{ 
            background: color, 
            animationDelay: `${i * 0.15}s` 
          }} 
        />
      ))}
    </div>
  );
};
