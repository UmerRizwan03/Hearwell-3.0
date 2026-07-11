import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeIn, SectionReveal } from '../../../components/common/Motion';

export const FittingProcess = () => {
  return (
    <SectionReveal className="py-24 hw-bg-paper overflow-hidden border-t border-[var(--color-border)]">
      <div className="hw-container">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="hw-heading-section text-[var(--color-ink)] mb-4">The Hearwell fitting process.</h2>
          <p className="hw-body-lg text-[var(--color-ink-secondary)]">
            A meticulous, three-step approach that ensures your hearing aids perform precisely for your auditory profile.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, oklch(0.42 0.08 175 / 0.2) 30%, oklch(0.42 0.08 175 / 0.2) 70%, transparent)' }}
          />

          {[
            {
              n: '01',
              title: 'Comprehensive Assessment',
              body: 'A thorough pure-tone audiometry session maps your exact hearing loss profile across all frequencies and environments.',
            },
            {
              n: '02',
              title: 'Style Selection & Fitting',
              body: 'We match you to the right style and technology tier, then take an ear impression and program the device to your audiogram.',
            },
            {
              n: '03',
              title: 'Real-Ear Measurement',
              body: "Probe microphone measurements verify that the hearing aid delivers the precise amplification at your eardrum — not just the manufacturer's target.",
            },
          ].map((step, i) => (
            <FadeIn key={step.n} delay={i * 0.15}>
              <div
                className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-transparent border border-[var(--color-border)] shadow-sm"
              >
                {/* Step number */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center font-display font-bold text-2xl mb-6 relative z-10"
                  style={{
                    background: i === 2 ? 'var(--color-primary)' : 'var(--color-surface)',
                    color: i === 2 ? 'white' : 'var(--color-primary)',
                    boxShadow: i === 2 ? '0 8px 30px oklch(0.42 0.08 175 / 0.2)' : 'none',
                    border: i === 2 ? 'none' : '1px solid var(--color-border)'
                  }}
                >
                  {step.n}
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--color-ink)] mb-3">{step.title}</h3>
                <p className="text-[var(--color-ink-secondary)] text-sm leading-relaxed">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link to="/booking" className="hw-btn hw-btn-primary hw-btn-lg inline-flex items-center gap-2">
            Schedule a Fitting <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </SectionReveal>
  );
};
