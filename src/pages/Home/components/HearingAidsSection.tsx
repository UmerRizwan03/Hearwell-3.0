import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeIn, SectionReveal, StaggerContainer, StaggerItem } from '../../../components/common/Motion';
import OptimizedImage from '../../../components/common/OptimizedImage';
import { hearingAidsData } from '../data';

export const HearingAidsSection = () => {
  return (
    <SectionReveal className="hw-section hw-bg-studio border-y border-[var(--color-border)]">
      <div className="hw-container">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="hw-heading-section mb-4">Precision Hearing Technology</h2>
          <p className="hw-body-lg text-[var(--color-ink-secondary)]">
            Explore our premium selection of advanced hearing aids tailored to your lifestyle and hearing profile.
          </p>
        </FadeIn>
        
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {hearingAidsData.map((aid) => (
            <StaggerItem key={aid.id} className="hw-card group relative overflow-hidden flex flex-col p-6 items-center justify-center min-h-[260px] text-center bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-primary)]/30 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-surface-elevated)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-40 h-40 sm:w-48 sm:h-48 mb-6 transform group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] drop-shadow-xl">
                <OptimizedImage src={aid.image} alt={aid.fullName} className="w-full h-full object-contain filter drop-shadow-md" containerClassName="w-full h-full" disableBlur={true} />
              </div>
              <h3 className="relative z-10 font-display font-bold text-[var(--color-ink)] text-xl mb-1">{aid.name}</h3>
              <p className="relative z-10 text-[var(--color-ink-muted)] text-sm font-medium">{aid.fullName}</p>
            </StaggerItem>
          ))}
          
          <StaggerItem className="hw-card group relative overflow-hidden flex flex-col p-6 items-center justify-center min-h-[260px] text-center bg-[var(--color-primary)]/5 border-dashed border-2 border-[var(--color-primary)]/20 hover:bg-[var(--color-primary)]/10 transition-colors cursor-pointer">
            <Link to="/hearing-aids" className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110">
                <ArrowRight size={24} />
              </div>
              <h3 className="font-display font-bold text-[var(--color-primary)] text-lg">Compare All Styles</h3>
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
};
