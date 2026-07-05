import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionReveal } from '../../../components/common/Motion';

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      name: 'CM Shahid A',
      initial: 'S',
      quote: "I am happy with the progress in my daughter's speaking skills. There is noticeable improvement in her confidence, pronunciation, and clarity. She is now more comfortable expressing herself.",
      service: 'Speech Therapy'
    },
    {
      name: 'Vimitha Kiran',
      initial: 'V',
      quote: 'My 6-year-old son had mild stuttering. Within 2 months of regular therapy, we saw great improvement. He completely overcame the problem.',
      service: 'Speech Therapy'
    },
    {
      name: 'Sathya Narayanan',
      initial: 'S',
      quote: "Visited for my son's hearing aid fitting. He is very happy now. Friendly and helpful staff. Peaceful atmosphere.",
      service: 'Audiology'
    },
    {
      name: 'Jalaja Venugopal',
      initial: 'J',
      quote: 'I bought hearing aids from Hearwell and feel very happy and confident. Excellent service and dedicated audiologist.',
      service: 'Hearing Aids'
    },
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Auto advance testimonials
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length, isHovered]);

  return (
    <SectionReveal className="hw-section bg-[var(--color-surface)] overflow-hidden relative border-y border-[var(--color-border)]">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[var(--color-primary-subtle)] to-transparent opacity-50 pointer-events-none" />
      
      <div className="hw-container relative z-10">
        <div 
          className="max-w-4xl mx-auto text-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          <div className="flex justify-center mb-8">
            <div className="flex gap-1 text-[#FABB05]">
              {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="currentColor" />)}
            </div>
          </div>

          <div className="relative h-[240px] md:h-[200px]">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: currentTestimonial === idx ? 1 : 0,
                  scale: currentTestimonial === idx ? 1 : 0.95,
                  pointerEvents: currentTestimonial === idx ? 'auto' : 'none'
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="text-[clamp(1.25rem,1rem+1.5vw,2rem)] font-display font-medium leading-tight mb-8 text-[var(--color-ink)] text-balance">
                  "{t.quote}"
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center font-display font-bold text-xl border border-[var(--color-border)] text-[var(--color-primary)]">
                    {t.initial}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-[var(--color-ink)] tracking-wide">{t.name}</div>
                    <div className="text-[var(--color-ink-secondary)] text-sm">{t.service}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] hover:bg-transparent transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonial === idx ? 'w-8 bg-[var(--color-primary)]' : 'bg-[var(--color-border-strong)] hover:bg-[var(--color-ink-muted)]'}`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-ink-secondary)] hover:text-[var(--color-ink)] hover:bg-transparent transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </SectionReveal>
  );
};
