import { CalendarDays } from 'lucide-react';
import { FadeIn, SectionReveal, StaggerContainer, StaggerItem, Soundwave } from '../components/common/Motion';
import OptimizedImage from '../components/common/OptimizedImage';
import SEO from '../components/common/SEO';

const Blog = () => {
  return (
    <div className="bg-transparent">
      <SEO
        title="Hearing Health Journal | Hearwell"
        description="Expert articles on hearing health, speech development, and child wellness from Hearwell Speech & Hearing Centre."
        url="https://hearwell.co.in/blog"
        keywords="hearing health blog Kerala, speech therapy articles, audiology research Perumbavoor, child speech development tips"
      />

      {/* ─── Light Editorial Hero ─── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden hw-bg-paper border-b border-[var(--color-border)]">
        <div className="hw-container relative z-10">
          <FadeIn className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <Soundwave bars={4} color="var(--color-primary)" className="h-4" />
              <span className="hw-caption text-[var(--color-primary)] font-bold">Research & Journal</span>
            </div>
            <h1 className="hw-heading-hero text-[var(--color-ink)] mb-6">
              Insights & <br />
              <span className="text-[var(--color-ink-muted)]">Research.</span>
            </h1>
            
            <p className="hw-body-lg text-[var(--color-ink-secondary)] text-balance max-w-2xl">
              Expert insights and the latest updates in speech and hearing care, curated for our community by the clinicians at Hearwell.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Journal Layout ─── */}
      <SectionReveal className="hw-section pt-16 lg:pt-24 hw-bg-plaster">
        <div className="hw-container">
          
          {/* Featured Article */}
          <FadeIn className="mb-24">
            <article className="group block bg-white hw-card rounded-[var(--radius-xl)] relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
               <div className="absolute top-6 left-6 z-20 bg-[var(--color-primary)] text-white text-[10px] font-bold px-3 py-1.5 rounded-[var(--radius-sm)] uppercase tracking-wider shadow-sm">
                 Featured
               </div>
               <div className="relative h-[28rem] md:h-[34rem] w-full bg-[var(--color-surface)] overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/90 via-[var(--color-ink)]/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
                 <OptimizedImage src="/images/aboutBanner.webp" alt="Early intervention in speech therapy" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                 
                 <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                    <div className="flex items-center gap-4 text-white/80 text-xs font-mono uppercase tracking-wider font-bold mb-4">
                      <span>Therapy</span>
                      <span className="w-1 h-1 rounded-full bg-white/50"></span>
                      <span className="flex items-center gap-1.5"><CalendarDays size={14}/> Oct 15, 2026</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 max-w-4xl leading-tight">
                      Understanding the Importance of Early Intervention in Speech Therapy
                    </h2>
                    <span className="inline-flex items-center gap-2 text-white/50 font-semibold cursor-default">
                     Coming Soon
                   </span>
                 </div>
               </div>
            </article>
          </FadeIn>

          {/* Article List */}
          <FadeIn>
            <h3 className="hw-heading-section mb-10 pb-4 border-b border-[var(--color-border)]">Latest Articles</h3>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <StaggerItem>
              <article className="group hw-card h-full flex flex-col p-6 lg:p-8">
                 <div className="w-full aspect-[4/3] bg-[var(--color-surface)] rounded-[var(--radius-md)] overflow-hidden relative mb-6">
                    <OptimizedImage src="/images/hearing-test.webp" alt="Hearing Care" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div className="flex flex-col flex-grow">
                   <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-wider text-[var(--color-ink-muted)] uppercase mb-4">
                      <span className="text-[var(--color-primary)]">Hearing Care</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
                      <span>Oct 12</span>
                   </div>
                   <h4 className="text-xl font-display font-bold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                      How Custom Hearing Aids Improve Quality of Life
                   </h4>
                   <p className="text-[var(--color-ink-secondary)] text-sm mb-6 line-clamp-3">Discover the profound impact that properly fitted, modern digital hearing aids can have on daily interactions and mental wellbeing.</p>
                   <span className="inline-flex items-center gap-1.5 text-[var(--color-ink-muted)] font-semibold text-sm mt-auto cursor-default">
                     Coming Soon
                   </span>
                 </div>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="group hw-card h-full flex flex-col p-6 lg:p-8">
                 <div className="w-full aspect-[4/3] bg-[var(--color-surface)] rounded-[var(--radius-md)] overflow-hidden relative mb-6">
                    <OptimizedImage src="/images/child-development.webp" alt="Child Development" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div className="flex flex-col flex-grow">
                   <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-wider text-[var(--color-ink-muted)] uppercase mb-4">
                      <span className="text-[var(--color-primary)]">Child Dev</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
                      <span>Oct 08</span>
                   </div>
                   <h4 className="text-xl font-display font-bold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                      5 Signs Your Child Might Need an IEP
                   </h4>
                   <p className="text-[var(--color-ink-secondary)] text-sm mb-6 line-clamp-3">Understanding the subtle early indicators that your child could benefit from an Individualized Education Program at school.</p>
                   <span className="inline-flex items-center gap-1.5 text-[var(--color-ink-muted)] font-semibold text-sm mt-auto cursor-default">
                     Coming Soon
                   </span>
                 </div>
              </article>
            </StaggerItem>

            <StaggerItem>
              <article className="group hw-card h-full flex flex-col p-6 lg:p-8">
                 <div className="w-full aspect-[4/3] bg-[var(--color-surface)] rounded-[var(--radius-md)] overflow-hidden relative mb-6">
                    <OptimizedImage src="/images/occupational-therapy.webp" alt="Audiology" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                 </div>
                 <div className="flex flex-col flex-grow">
                   <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-wider text-[var(--color-ink-muted)] uppercase mb-4">
                      <span className="text-[var(--color-primary)]">Audiology</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
                      <span>Sep 29</span>
                   </div>
                   <h4 className="text-xl font-display font-bold text-[var(--color-ink)] mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                      What to Expect During a Newborn Hearing Screening
                   </h4>
                   <p className="text-[var(--color-ink-secondary)] text-sm mb-6 line-clamp-3">A comprehensive parent's guide to the OAE process right after birth, explaining why it is painless and utterly crucial.</p>
                   <span className="inline-flex items-center gap-1.5 text-[var(--color-ink-muted)] font-semibold text-sm mt-auto cursor-default">
                     Coming Soon
                   </span>
                 </div>
              </article>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* ─── SEO Rich Text Section (Local SEO Boost) ─── */}
      <SectionReveal className="hw-section hw-bg-paper border-t border-[var(--color-border)]">
        <div className="hw-container">
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[var(--radius-xl)] shadow-sm border border-[var(--color-border)]">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-[var(--color-ink)] mb-6">Leading Speech & Hearing Care in Kerala</h2>
              <div className="hw-prose text-[var(--color-ink-secondary)] text-sm md:text-base space-y-4 leading-relaxed">
                <p>
                  At Hearwell Speech and Hearing Centre, we are dedicated to providing the highest standard of audiological care and speech therapy across Kerala. With state-of-the-art clinics located in <strong>Perumbavoor</strong> and <strong>Perinjanam</strong>, our team of highly qualified audiologists and speech-language pathologists bring world-class diagnostic and rehabilitative services closer to home.
                </p>
                <p>
                  Whether you are seeking the <strong>best audiologist in Perumbavoor</strong> for advanced hearing aid fittings, or comprehensive <strong>pediatric speech therapy in Perinjanam</strong>, Hearwell combines clinical precision with deep empathy. We specialize in everything from newborn hearing screenings (OAE) and customized digital hearing aids (including invisible and Bluetooth models from Starkey, Phonak, and Widex) to Auditory Verbal Therapy (AVT) and school readiness programs. 
                </p>
                <p>
                  Our mission is simple: to help the people of Kerala overcome speech and hearing challenges, empowering them to connect, communicate, and thrive. Book a consultation today to experience the Hearwell difference.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionReveal>

      {/* ─── Newsletter Signup ─── */}
      <SectionReveal className="py-24 bg-[var(--color-dark-bg)] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary)] opacity-20 blur-[120px] rounded-full pointer-events-none" />
        </div>
        
        <div className="hw-container relative z-10">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <h2 className="hw-heading-section text-white mb-4">Stay informed on hearing care.</h2>
            <p className="hw-body-lg text-[var(--color-dark-ink-muted)] mb-10">
              Subscribe to our monthly newsletter for expert tips, clinic updates, and educational resources directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-grow bg-white/5 border border-white/10 text-white placeholder:text-white/40 px-6 py-4 rounded-[var(--radius-md)] outline-none focus:bg-white/10 focus:border-[var(--color-primary)] transition-colors duration-300"
                required
              />
              <button 
                type="submit"
                className="hw-btn hw-btn-accent px-8"
              >
                Subscribe
              </button>
            </form>
            <p className="text-white/40 text-xs mt-6">We respect your privacy. No spam, ever.</p>
          </FadeIn>
        </div>
      </SectionReveal>

    </div>
  );
};

export default Blog;

