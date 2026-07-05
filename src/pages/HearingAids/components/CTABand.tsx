import { Link } from 'react-router-dom';
import { FadeIn, SectionReveal } from '../../../components/common/Motion';

export const CTABand = () => {
  return (
    <SectionReveal className="bg-transparent py-24 border-t border-[var(--color-border)]">
      <div className="hw-container">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="hw-heading-section mb-6">Not sure which style suits you?</h2>
          <p className="hw-body-lg text-[var(--color-ink-secondary)] mb-10 max-w-xl mx-auto">
            Our audiologist will guide you through an assessment and recommend the right device for your hearing profile, lifestyle, and budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/booking" className="hw-btn hw-btn-primary hw-btn-lg">
              Book an Assessment
            </Link>
            <Link to="/contact" className="hw-btn hw-btn-secondary hw-btn-lg">
              Ask a Question
            </Link>
          </div>
        </FadeIn>
      </div>
    </SectionReveal>
  );
};
