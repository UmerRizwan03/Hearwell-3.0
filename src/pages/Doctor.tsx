import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, SectionReveal, StaggerContainer, StaggerItem, Soundwave } from '../components/common/Motion';
import OptimizedImage from '../components/common/OptimizedImage';
import SEO from '../components/common/SEO';

const specialists = [
  {
    name: 'Vandana Sanesh',
    role: 'Audiologist & Speech Language Pathologist',
    image: '/images/Vandana.webp',
    crr: 'B15690',
  },
  {
    name: 'Abitha K S',
    role: 'Special Educator',
    image: '/images/Abitha.webp',
    crr: 'A115127',
  }
];

const timeline = [
  {
    period: '2014 - Present',
    role: 'Lead Audiologist',
    clinic: 'Hearwell Speech and Hearing Centre'
  },
  {
    period: '2011 - 2012',
    role: 'Audiologist',
    clinic: 'Swaram Hearing Aid Centre'
  },
  {
    period: '2010 - 2011',
    role: 'Audiologist',
    clinic: 'Al-Shifa Hospital'
  }
];

const Doctor = () => {
  return (
    <div className="bg-transparent">
      <SEO
        title="Dr. Babitha Fazal | Chief Audiologist"
        description="Meet Dr. Babitha Fazal, our Chief Audiologist and Speech Pathologist with over 16 years of clinical experience."
        url="https://hearwell.co.in/doctor"
        keywords="Dr Babitha Fazal, chief audiologist Kerala, pediatric audiologist Perumbavoor, best speech pathologist Kerala"
      />

      {/* ─── Authentic Profile Hero ─── */}
      <section className="relative pt-32 pb-24 lg:pt-40 overflow-hidden hw-bg-portrait">
        <div className="hw-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left: Typography & Credentials */}
            <div className="lg:col-span-6 lg:order-1 order-2">
              <FadeIn>
                <div className="flex items-center gap-4 mb-6">
                  <Soundwave bars={4} color="var(--color-primary)" className="h-4" />
                  <span className="hw-caption text-[var(--color-primary)] font-bold">Chief Audiologist & Speech Pathologist</span>
                </div>

                <h1 className="hw-heading-hero text-[var(--color-ink)] mb-6">
                  Babitha Fazal
                </h1>

                <div className="hw-prose text-[var(--color-ink-secondary)] mb-8 max-w-xl">
                  <p className="text-xl leading-relaxed text-balance">
                    Dedicated to delivering precision diagnostics and compassionate therapy, drawn from over 16 years of clinical excellence.
                  </p>
                </div>

                <div className="flex flex-col gap-3 mb-10 text-[var(--color-ink-muted)] text-sm font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40" />
                    <span>BASLP, AWH Special College (2010)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/40" />
                    <span>Rehabilitation Council of India Certified</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link to="/booking" className="hw-btn hw-btn-primary hw-btn-lg group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]">
                    Book Consultation
                    <Calendar size={18} className="transition-transform group-hover:scale-110" aria-hidden="true" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right: Authentic Portrait (3D Pop-out) */}
            <div className="lg:col-span-5 lg:col-start-8 lg:order-2 order-1 flex justify-center lg:justify-end mt-8 lg:mt-12">
              <FadeIn delay={0.15} className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] group">
                  
                {/* Abstract Soundwave Perimeter (CSS Spirograph) */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  {/* Glowing wavy rings */}
                  <div className="absolute w-[95%] h-[95%] border-[1.5px] border-[var(--color-primary)]/80 rounded-[43%_57%_49%_51%] animate-[spin_7s_linear_infinite]" />
                  <div className="absolute w-[98%] h-[98%] border-[1px] border-[#22D3EE]/70 rounded-[51%_49%_53%_47%] animate-[spin_11s_linear_infinite_reverse]" />
                  <div className="absolute w-[101%] h-[101%] border-[1.5px] border-[#34D399]/60 rounded-[47%_53%_42%_58%] animate-[spin_9s_linear_infinite]" />
                  <div className="absolute w-[104%] h-[104%] border-[1px] border-[var(--color-primary)]/50 rounded-[55%_45%_58%_42%] animate-[spin_13s_linear_infinite_reverse]" />
                  <div className="absolute w-[107%] h-[107%] border-[1.5px] border-[#22D3EE]/40 rounded-[41%_59%_46%_54%] animate-[spin_15s_linear_infinite]" />
                  <div className="absolute w-[110%] h-[110%] border-[1px] border-[var(--color-primary)]/30 rounded-[49%_51%_57%_43%] animate-[spin_18s_linear_infinite_reverse]" />
                  
                  {/* Core glow */}
                  <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-[var(--color-primary)] via-[#22D3EE] to-[#34D399] opacity-15 blur-xl" />

                  {/* Solid center background */}
                  <div className="absolute w-[92%] h-[92%] rounded-full bg-gradient-to-b from-white to-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-[inset_0_0_40px_rgba(0,0,0,0.03)]" />
                </div>
                
                <div 
                  className="absolute inset-0 z-10 pointer-events-none"
                  style={{ clipPath: 'inset(-100% 0 0 0 round 0 0 50% 50%)' }}
                >
                  <img
                    src="/images/doctor.webp"
                    alt="Portrait of Babitha Fazal, Chief Audiologist"
                    className="absolute bottom-0 left-0 w-full h-[135%] object-cover object-bottom pointer-events-auto transition-transform duration-700 origin-bottom -scale-x-100"
                  />
                </div>
                  
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Journey & Philosophy ─── */}
      <SectionReveal className="hw-section hw-bg-paper border-y border-[var(--color-border)]">
        <div className="hw-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Minimalist Timeline */}
            <div className="lg:col-span-5">
              <h2 className="hw-heading-section mb-12">Professional Journey</h2>
              <div className="relative border-l border-[var(--color-border)] pl-8 space-y-12">
                {timeline.map((item, idx) => (
                  <StaggerItem key={idx} className="relative group">
                    <div className="absolute w-3 h-3 rounded-full bg-[var(--color-primary)] -left-[38px] top-1.5 shadow-[0_0_0_4px_var(--color-surface)] transition-transform duration-300 group-hover:scale-125" />
                    <div className="text-[var(--color-ink-muted)] text-sm font-bold tracking-wide mb-1">{item.period}</div>
                    <h3 className="text-xl font-display font-bold text-[var(--color-ink)] mb-1">{item.clinic}</h3>
                    <p className="text-[var(--color-primary)] font-medium">{item.role}</p>
                  </StaggerItem>
                ))}
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="lg:col-span-6 lg:col-start-7 flex items-center">
              <FadeIn className="relative p-10 md:p-14 bg-white rounded-[var(--radius-xl)] shadow-sm border border-[var(--color-border-subtle)]">
                <div className="absolute -top-6 -left-4 text-8xl text-[var(--color-primary)]/10 font-serif leading-none">"</div>
                <p className="text-2xl md:text-3xl text-[var(--color-ink)] italic font-serif leading-snug relative z-10 text-balance">
                  My commitment is to restore the joy of sound and communication to every patient through personalized, expert care.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-px bg-[var(--color-primary)]" />
                  <span className="font-display font-bold text-[var(--color-primary)]">Babitha Fazal</span>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </SectionReveal>

      {/* ─── Core Team ─── */}
      <SectionReveal className="hw-section hw-bg-plaster">
        <div className="hw-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="hw-heading-section mb-4">Our Specialist Team</h2>
            <p className="hw-body-lg text-[var(--color-ink-secondary)]">Dedicated professionals committed to providing exceptional care and evidence-based therapies.</p>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialists.map((member, idx) => (
              <StaggerItem key={idx} className="hw-card p-8 md:p-10 flex flex-col group">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
                  <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-[var(--color-primary)]/20 shadow-sm transition-transform duration-500 group-hover:scale-105">
                    <OptimizedImage src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-1">{member.name}</h3>
                    <p className="text-[var(--color-primary)] font-medium text-sm">{member.role}</p>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-[var(--color-border)] text-sm">
                  <div>
                    <div className="text-[var(--color-ink-muted)] mb-0.5 text-xs uppercase tracking-wider font-semibold">CRR No.</div>
                    <div className="text-[var(--color-ink)] font-medium">{member.crr}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionReveal>

    </div>
  );
};

export default Doctor;

