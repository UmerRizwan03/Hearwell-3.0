import { FadeIn, SectionReveal, StaggerContainer, StaggerItem } from '../../../components/common/Motion';
import { techFeatures } from '../data';

export const TechFeatures = () => {
  return (
    <SectionReveal className="bg-transparent py-24 border-t border-[var(--color-border)]">
      <div className="hw-container">
        <FadeIn className="max-w-2xl mb-16">
          <h2 className="hw-heading-section mb-4">Inside every device.</h2>
          <p className="hw-body-lg text-[var(--color-ink-secondary)]">
            The technologies that make modern hearing aids feel like a natural extension of your hearing.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <StaggerItem key={i}>
                <div className="hw-card p-8 h-full group hover:border-[var(--color-primary-light)] transition-colors duration-300">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-[var(--color-primary)] mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white"
                    style={{ background: 'var(--color-surface)' }}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display font-bold text-lg text-[var(--color-ink)] mb-3">{feat.title}</h3>
                  <p className="hw-body-sm leading-relaxed">{feat.body}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </SectionReveal>
  );
};
