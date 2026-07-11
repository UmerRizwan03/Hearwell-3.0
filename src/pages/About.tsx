import { ShieldCheck, Heart, Award, Activity, ArrowRight, Calendar, Users, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FadeIn, SectionReveal, StaggerContainer, StaggerItem, SectionDivider, Soundwave } from '../components/common/Motion';
import OptimizedImage from '../components/common/OptimizedImage';
import SEO from '../components/common/SEO';

const timeline = [
  {
    year: '2014',
    title: 'The Beginning',
    description: 'Founded in Perumbavoor with a mission to bring world-class audiology and speech therapy to our local community.'
  },
  {
    year: '2018',
    title: 'Expanding Care',
    description: 'Introduced specialized Pediatric AVT programs and advanced OAE newborn screening protocols.'
  },
  {
    year: '2022',
    title: 'Second Clinic',
    description: 'Opened our Perinjanam clinic to serve the broader Thrissur district with the same clinical excellence.'
  },
  {
    year: 'Today',
    title: 'Leading the Standard',
    description: 'Over 5,000 lives transformed through personalized care and advanced digital hearing technologies.'
  }
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Trust & Transparency',
    description: 'We build lasting relationships through honest diagnostics and reliable care. No hidden agendas.'
  },
  {
    icon: Heart,
    title: 'Compassionate Approach',
    description: 'Every patient is treated with deep empathy and respect for their unique auditory and speech needs.'
  },
  {
    icon: Award,
    title: 'Clinical Excellence',
    description: 'Adhering to the highest medical standards and continuous education to deliver the best outcomes.'
  },
  {
    icon: Activity,
    title: 'Measurable Results',
    description: 'Our therapies and hearing solutions are meticulously designed to provide life-improving outcomes.'
  }
];

const stats = [
  { icon: Award, label: 'Years Experience', value: '16+' },
  { icon: Users, label: 'Patients Helped', value: '5,000+' },
  { icon: MapPin, label: 'Clinic Locations', value: '2' },
];

const About = () => {
  return (
    <div className="bg-transparent">
      <SEO
        title="About Us | Hearwell Speech & Hearing Centre"
        description="Learn about Hearwell's mission to provide premier speech and hearing care in Kerala. Our dedicated team is here to support your journey."
        url="https://hearwell.co.in/about"
        keywords="about Hearwell, speech clinic Kerala, best audiologist in Perumbavoor, hearing care experts Kerala"
      />

      {/* ─── Hero Section with CTA ─── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden hw-bg-plaster">
        <div className="hw-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 max-w-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Soundwave bars={4} color="var(--color-primary)" className="h-4" />
                <span className="hw-caption text-[var(--color-primary)] font-bold">Our Story</span>
              </div>
              <h1 className="hw-heading-hero text-[var(--color-ink)] mb-6">
                Restoring connection with <br className="hidden md:block" />
                <span className="text-[var(--color-primary)] font-bold">expert care.</span>
              </h1>
              <p className="hw-body-lg text-[var(--color-ink-secondary)] text-balance mb-8">
                Serving the community with dedicated hearing and speech care grounded in clinical excellence and human empathy since 2014. We believe high-quality medical care should feel warm and welcoming.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link to="/booking" className="hw-btn hw-btn-primary hw-btn-lg group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]">
                  Book an Appointment
                  <Calendar size={18} className="transition-transform group-hover:scale-110" aria-hidden="true" />
                </Link>
                <Link to="/contact" className="hw-btn hw-btn-secondary hw-btn-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="lg:col-span-5 lg:col-start-8"
            >
              <div className="aspect-[4/5] w-full rounded-[var(--radius-xl)] overflow-hidden hw-card p-2 bg-white">
                <div className="w-full h-full rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-surface)]">
                  <OptimizedImage 
                    src="/images/speech-therapy.webp" 
                    alt="Patient receiving expert speech therapy session at Hearwell clinic" 
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Social Proof / Stats ─── */}
      <SectionReveal className="bg-[var(--color-primary)] py-12 md:py-16">
        <div className="hw-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0">
                  <Icon size={32} className="text-white mb-4" aria-hidden="true" />
                  <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/90 font-medium text-lg">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </SectionReveal>

      {/* ─── Values ─── */}
      <SectionReveal className="hw-section hw-bg-paper border-y border-[var(--color-border)]">
        <div className="hw-container">
          <FadeIn className="max-w-3xl mb-16">
            <h2 className="hw-heading-section text-[var(--color-ink)] mb-4">The values behind the appointment.</h2>
            <p className="hw-body-lg text-[var(--color-ink-secondary)]">
              Our clinical practice is built on a foundation of integrity and measurable outcomes.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <StaggerItem 
                  key={idx} 
                  className="hw-card p-8 group cursor-pointer focus-within:outline focus-within:outline-2 focus-within:outline-[var(--color-primary)]"
                >
                  <div className="w-12 h-12 rounded-full bg-transparent border border-[var(--color-border)] flex items-center justify-center text-[var(--color-primary)] mb-6 transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white" aria-hidden="true">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-[var(--color-ink)] mb-3">{val.title}</h3>
                  <p className="hw-body text-[var(--color-ink-secondary)]">{val.description}</p>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* ─── Timeline / Founding Story ─── */}
      <SectionReveal className="hw-section hw-bg-plaster">
        <div className="hw-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <h2 className="hw-heading-section text-[var(--color-ink)] mb-6">A decade of <br />transforming lives.</h2>
              <div className="hw-prose text-[var(--color-ink-secondary)]">
                <p>
                  Hearwell Speech and Hearing Centre was founded with a singular mission: to provide professional, compassionate, and highly effective hearing care and speech therapy services for children and adults.
                </p>
                <p>
                  We believe in early childhood intervention and personalized treatment plans that deliver long-lasting results. Our approach is medically sound, utilizing the latest in digital hearing aid technology and therapeutic techniques.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="relative border-l-2 border-[var(--color-border-strong)] pl-8 lg:pl-12 py-4 flex flex-col gap-12" role="list" aria-label="Company history timeline">
                {timeline.map((item, idx) => (
                  <motion.div 
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="relative"
                    role="listitem"
                  >
                    {/* Timeline node */}
                    <div className="absolute w-4 h-4 rounded-full bg-[var(--color-primary)] -left-[41px] lg:-left-[57px] top-1.5 shadow-[0_0_0_6px_var(--color-bg)]" aria-hidden="true" />
                    
                    <div className="text-[var(--color-primary)] font-display font-bold text-xl mb-2">{item.year}</div>
                    <h3 className="hw-heading-subsection text-[var(--color-ink)] mb-3">{item.title}</h3>
                    <p className="hw-body text-[var(--color-ink-secondary)]">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </SectionReveal>

      {/* ─── Closing CTA ─── */}
      <SectionReveal className="hw-bg-glass border-t border-[var(--color-border)] py-20 lg:py-28">
        <div className="hw-container text-center max-w-4xl mx-auto">
          <h2 className="hw-heading-section text-[var(--color-ink)] mb-6">Ready to take the next step?</h2>
          <p className="hw-body-lg text-[var(--color-ink-secondary)] mb-10 max-w-2xl mx-auto">
            Our specialists are here to guide you through a comprehensive evaluation and help you or your loved ones communicate with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/booking" className="hw-btn hw-btn-primary hw-btn-lg group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] w-full sm:w-auto">
              Book your Appointment
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a href="tel:+919633626656" className="hw-btn hw-btn-secondary hw-btn-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] w-full sm:w-auto">
              Call Clinic Now
            </a>
          </div>
        </div>
      </SectionReveal>

      <SectionDivider />

    </div>
  );
};

export default About;


