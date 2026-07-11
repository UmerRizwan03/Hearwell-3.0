import { Link } from 'react-router-dom';
import { ArrowRight, Ear, Mic2, Waves, Puzzle, ShieldCheck, BookOpen, Heart } from 'lucide-react';
import { SectionReveal, FadeIn, StaggerContainer, StaggerItem } from '../../../components/common/Motion';
import OptimizedImage from '../../../components/common/OptimizedImage';

export const BentoServices = () => {
  return (
    <SectionReveal className="hw-section hw-bg-glass border-y border-[var(--color-border)]">
      <div className="hw-container">
        <FadeIn className="max-w-2xl mb-16">
          <h2 className="hw-heading-section mb-4">Comprehensive clinical care.</h2>
          <p className="hw-body-lg">Specialized diagnostics, treatment, and therapy across the full spectrum of speech and hearing health.</p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Bento Block 1 (Large) */}
          <StaggerItem className="md:col-span-2 md:row-span-2 relative group rounded-[var(--radius-xl)] overflow-hidden hw-card min-h-[240px]">
            <OptimizedImage
              src="/images/hearing-testing-and-audiology.webp"
              alt="Audiology"
              containerClassName="!absolute inset-0"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-bg)] via-[oklch(0.15_0.02_175/0.4)] to-transparent" />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white mb-3 md:mb-4">
                <Ear size={20} />
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Hearing Testing & Audiology</h3>
              <p className="text-white/80 max-w-md mb-4 md:mb-6 line-clamp-2 transition-all duration-300">
                State-of-the-art diagnostic evaluations for all ages. Comprehensive audiometry, tympanometry, and specialist OAE newborn screening.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 text-white font-semibold group/link before:absolute before:inset-0">
                View Audiology <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </StaggerItem>

          {/* Bento Block 2: Speech Therapy */}
          <StaggerItem className="relative group rounded-[var(--radius-xl)] overflow-hidden hw-card aspect-square md:aspect-auto md:min-h-[240px]">
            <OptimizedImage
              src="/images/speech-therapy.webp"
              alt="Speech Therapy"
              containerClassName="!absolute inset-0"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[oklch(0.42_0.08_175/0.6)] to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white mb-3">
                <Mic2 size={20} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1">Speech Therapy</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">Expert therapy addressing articulation, stuttering, and language delays.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-white text-sm font-semibold before:absolute before:inset-0">
                Details <ArrowRight size={14} />
              </Link>
            </div>
          </StaggerItem>

          {/* Bento Block 3: AVT */}
          <StaggerItem className="relative group rounded-[var(--radius-xl)] overflow-hidden hw-card aspect-square md:aspect-auto md:min-h-[240px]">
            <OptimizedImage
              src="/images/auditory-verbal-therapy.webp"
              alt="AVT"
              containerClassName="!absolute inset-0"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-bg)] via-[oklch(0.15_0.02_175/0.4)] to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white mb-3">
                <Waves size={20} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1">Auditory Verbal Therapy</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">Evidence-based intervention for children with hearing impairments.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-white text-sm font-semibold before:absolute before:inset-0">
                Details <ArrowRight size={14} />
              </Link>
            </div>
          </StaggerItem>

          {/* Bento Block 4: Occupational Therapy */}
          <StaggerItem className="relative group rounded-[var(--radius-xl)] overflow-hidden hw-card aspect-square md:aspect-auto md:min-h-[240px]">
            <OptimizedImage
              src="/images/occupational-therapy.webp"
              alt="Occupational Therapy"
              containerClassName="!absolute inset-0"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-bg)] via-[oklch(0.15_0.02_175/0.4)] to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white mb-3">
                <Puzzle size={20} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1">Occupational Therapy</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">Developing motor, sensory, and daily life skills for children.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-white text-sm font-semibold before:absolute before:inset-0">
                Details <ArrowRight size={14} />
              </Link>
            </div>
          </StaggerItem>

          {/* Bento Block 5: IEP */}
          <StaggerItem className="relative group rounded-[var(--radius-xl)] overflow-hidden hw-card aspect-square md:aspect-auto md:min-h-[240px]">
            <OptimizedImage
              src="/images/iep-support.webp"
              alt="IEP Support"
              containerClassName="!absolute inset-0"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[oklch(0.42_0.08_175/0.6)] to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white mb-3">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1">IEP Support</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">Individualized educational plans ensuring academic inclusion.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-white text-sm font-semibold before:absolute before:inset-0">
                Details <ArrowRight size={14} />
              </Link>
            </div>
          </StaggerItem>

          {/* Bento Block 6: School Readiness */}
          <StaggerItem className="relative group rounded-[var(--radius-xl)] overflow-hidden hw-card aspect-square md:aspect-auto md:min-h-[240px]">
            <OptimizedImage
              src="/images/school-readiness.webp"
              alt="School Readiness"
              containerClassName="!absolute inset-0"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-bg)] via-[oklch(0.15_0.02_175/0.4)] to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white mb-3">
                <BookOpen size={20} />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-1">School Readiness</h3>
              <p className="text-white/80 text-sm mb-4 line-clamp-2">Preparing young children for a successful transition to primary school.</p>
              <Link to="/services" className="inline-flex items-center gap-2 text-white text-sm font-semibold before:absolute before:inset-0">
                Details <ArrowRight size={14} />
              </Link>
            </div>
          </StaggerItem>

          {/* Bento Block 7: Special Care & Education */}
          <StaggerItem className="md:col-span-2 relative group rounded-[var(--radius-xl)] overflow-hidden hw-card h-[120px]">
            <OptimizedImage
              src="/images/special-care.webp"
              alt="Special Care & Education"
              containerClassName="!absolute inset-0"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
            <div className="absolute inset-0 p-4 md:p-6 flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-3 md:gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white shrink-0">
                  <Heart size={24} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-display font-bold text-white mb-0">Special Care & Education</h3>
                  <p className="text-white/80 text-sm line-clamp-1 max-w-md hidden md:block mt-0.5">Dedicated support for children with diverse developmental and learning profiles.</p>
                </div>
              </div>
              <Link to="/services" className="shrink-0 w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-2 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[var(--color-primary)] transition-colors before:absolute before:inset-0 gap-2 font-semibold text-sm">
                <span className="hidden md:inline">Details</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </StaggerItem>

          {/* CTA Block */}
          <StaggerItem className="relative group rounded-[var(--radius-xl)] overflow-hidden flex flex-col items-center justify-center text-center bg-[var(--color-primary)]/5 border-dashed border-2 border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/10 transition-colors cursor-pointer h-[120px]">
            <Link to="/services" className="absolute inset-0 flex flex-row items-center justify-center p-4 md:p-6 gap-3 md:gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shrink-0">
                <ArrowRight size={20} />
              </div>
              <h3 className="font-display font-bold text-[var(--color-primary)] text-lg md:text-xl">View All Services</h3>
            </Link>
          </StaggerItem>

        </StaggerContainer>
      </div>
    </SectionReveal>
  );
};
