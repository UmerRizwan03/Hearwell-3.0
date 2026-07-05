import SEO from '../../components/common/SEO';
import { HeroSection } from './components/HeroSection';
import { AboutSnippet } from './components/AboutSnippet';
import { BentoServices } from './components/BentoServices';
import { HearingAidsSection } from './components/HearingAidsSection';
import { BrandCollabSection } from './components/BrandCollabSection';
import { DoctorSnippet } from './components/DoctorSnippet';
import { Testimonials } from './components/Testimonials';

const Home = () => {
  return (
    <div className="bg-transparent">
      <SEO
        title="Hearwell Speech & Hearing Centre | Premium Care"
        description="Expert hearing tests, hearing aid fitting, and speech therapy in Perumbavoor & Perinjanam, Kerala. Book an appointment today."
        url="https://hearwell.co.in"
        keywords="speech therapy Kerala, best audiologist Perumbavoor, hearing tests Perinjanam, hearing aids Kerala, speech and hearing centre"
      />

      {/* ─── Hero Section ─── */}
      <HeroSection />

      {/* ─── Trust Indicator Strip ─── */}
      <section className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-4">
        <div className="hw-container">
          <div className="flex items-center justify-center text-center">
            <p className="text-[var(--color-ink-muted)] text-sm font-medium">
              Trusted by 5,000+ patients across Kerala since 2009. Rated 4.9/5 on Google.
            </p>
          </div>
        </div>
      </section>

      {/* ─── About Snippet ─── */}
      <AboutSnippet />

      {/* ─── Bento Services ─── */}
      <BentoServices />

      {/* ─── Hearing Aids Showcase ─── */}
      <HearingAidsSection />
      
      {/* ─── Brand Collaboration ─── */}
      <BrandCollabSection />

      {/* ─── Chief Audiologist Split ─── */}
      <DoctorSnippet />

      {/* ─── Testimonials ─── */}
      <Testimonials />

    </div>
  );
};

export default Home;
