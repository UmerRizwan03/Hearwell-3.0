import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionReveal, Parallax, FadeIn } from '../../../components/common/Motion';
import OptimizedImage from '../../../components/common/OptimizedImage';

export const AboutSnippet = () => {
  return (
    <SectionReveal className="hw-section hw-bg-plaster">
      <div className="hw-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Image (Parallax) */}
          <div className="lg:col-span-5 relative">
            <Parallax offset={20}>
              <div className="aspect-[4/5] rounded-[var(--radius-xl)] overflow-hidden shadow-[0_32px_64px_-16px_oklch(0.2_0.04_175/0.2)]">
                <OptimizedImage
                  src="/images/service.webp"
                  alt="Hearwell Clinic Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-[var(--radius-lg)] shadow-xl border border-[oklch(0.95_0.01_175)] max-w-[200px]">
                <div className="text-[var(--color-primary)] font-display text-4xl font-bold mb-1">2014</div>
                <div className="text-sm text-[var(--color-ink-secondary)] font-medium leading-tight">Established with a mission to revolutionize hearing care.</div>
              </div>
            </Parallax>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6 lg:col-start-7 pt-12 lg:pt-0">
            <FadeIn>
              <h2 className="hw-heading-section mb-6">
                Expertise meets empathy.
              </h2>
              <div className="hw-prose mb-8">
                <p>
                  For over a decade, we've believed that clinical excellence doesn't require a cold environment. Hearwell was founded to provide a sanctuary where advanced diagnostics and compassionate care exist under one roof.
                </p>
                <p>
                  Whether it's a newborn hearing screening, managing adult hearing loss, or helping a child find their voice through speech therapy—we treat the person, not just the symptom.
                </p>
              </div>
              <Link to="/about" className="hw-btn hw-btn-secondary group">
                Our Story <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};
