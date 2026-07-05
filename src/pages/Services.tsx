import { Ear, Mic2, Waves, Puzzle, ShieldCheck, Heart, BookOpen, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, SectionReveal } from '../components/common/Motion';
import OptimizedImage from '../components/common/OptimizedImage';
import SEO from '../components/common/SEO';

const clinicalServices = [
  {
    id: 'audiology',
    title: 'Hearing Testing & Audiology',
    icon: Ear,
    image: '/images/hearing-testing-and-audiology.webp',
    description: 'State-of-the-art diagnostic evaluations for all ages. We offer comprehensive audiometry, tympanometry, and specialist OAE (Newborn Hearing Screening) to detect issues early and accurately.',
    features: [
      'Pure Tone Audiometry (PTA)',
      'OAE Newborn Screening',
      'Impedance Audiometry',
      'Hearing Aid Trial & Fitting'
    ],
    link: '/hearing-aids',
    linkText: 'View Hearing Aids'
  },
  {
    id: 'speech',
    title: 'Speech Therapy',
    icon: Mic2,
    image: '/images/speech-therapy.webp',
    description: 'Expert therapy addressing articulation disorders, stuttering, voice disorders, and language delays in both children and adults. Our scientific, compassionate approach builds confidence.',
    features: [
      'Articulation & Phonology',
      'Stuttering & Fluency Support',
      'Adult Aphasia Recovery',
      'Language Delay Intervention'
    ],
    link: '/contact',
    linkText: 'Consult a Specialist'
  },
  {
    id: 'avt',
    title: 'Auditory Verbal Therapy',
    icon: Waves,
    image: '/images/auditory-verbal-therapy.webp',
    description: 'A highly structured, evidence-based early intervention program designed to teach children with hearing impairments to listen and speak using residual hearing or cochlear implants.',
    features: [
      'Early Intervention Focus',
      'Parent-Guided Sessions',
      'Auditory Skill Integration',
      'Cochlear Implant Rehab'
    ],
    link: '/contact',
    linkText: 'Learn More About AVT'
  }
];

const developmentalServices = [
  {
    id: 'occupational-therapy',
    title: 'Occupational Therapy',
    icon: Puzzle,
    image: '/images/occupational-therapy.webp',
    description: 'Specialized therapy helping children develop the fine motor, gross motor, sensory processing, and daily life skills required to navigate school, play, and learning environments.',
    link: '/contact',
    linkText: 'Consult a Specialist'
  },
  {
    id: 'iep',
    title: 'IEP Support',
    icon: ShieldCheck,
    image: '/images/iep-support.webp',
    description: 'Comprehensive educational support plans tailored to each child\'s unique learning pace and needs, ensuring academic inclusion and collaborative school integration.',
    link: '/contact',
    linkText: 'Inquire About IEP'
  },
  {
    id: 'school-readiness',
    title: 'School Readiness',
    icon: BookOpen,
    image: '/images/school-readiness.webp',
    description: 'Structured preparation ensuring young children develop crucial communicative, cognitive, motor, and social pre-skills for a successful transition to primary school.',
    link: '/contact',
    linkText: 'Learn About Programs'
  },
  {
    id: 'special-care',
    title: 'Special Care & Education',
    icon: Heart,
    image: '/images/special-care.webp',
    description: 'Dedicated support for children with diverse developmental and learning profiles. We provide customized educational strategies and nurturing care in a safe environment.',
    link: '/contact',
    linkText: 'Inquire About Special Care'
  }
];

const Services = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Speech and Hearing Services",
    "description": "Comprehensive clinical diagnostics, pediatric therapies, and childhood development programs under one roof.",
    "about": [
      {
        "@type": "MedicalSpecialty",
        "name": "Audiology",
        "description": "State-of-the-art diagnostic evaluations, Pure Tone Audiometry, and Hearing Aid Fitting."
      },
      {
        "@type": "MedicalSpecialty",
        "name": "Speech Pathology",
        "description": "Expert therapy addressing articulation disorders, stuttering, voice disorders, and language delays."
      },
      {
        "@type": "MedicalTherapy",
        "name": "Auditory Verbal Therapy",
        "description": "Evidence-based early intervention program designed to teach children with hearing impairments to listen and speak."
      }
    ]
  };

  return (
    <div className="bg-transparent">
      <SEO
        title="Our Services | Speech & Hearing Care"
        description="Comprehensive clinical diagnostics, pediatric therapies, and childhood development programs under one roof."
        url="https://hearwell.co.in/services"
        keywords="speech therapy services Kerala, audiology services Perumbavoor, hearing test Perinjanam, pediatric speech therapy Kerala, IEP support Kerala"
        schema={servicesSchema}
      />

      {/* ─── Directory Split Hero ─── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-[var(--color-border)] bg-white overflow-hidden">

        {/* Premium Dynamic Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Base gradient tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)]/80 to-white" />

          {/* High-impact Aurora Mesh */}
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] bg-[var(--color-primary)] opacity-[0.08] rounded-full blur-[100px] mix-blend-multiply" />
          <div className="absolute top-[10%] right-[0%] w-[60%] h-[100%] bg-[#22D3EE] opacity-[0.06] rounded-[40%_60%_70%_30%] blur-[120px] mix-blend-multiply animate-[spin_40s_linear_infinite]" />

          {/* Architectural Block Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_100%)]" />

          {/* Large Abstract Soundwave / Ripple Graphic */}
          <div className="absolute top-1/2 right-0 w-[1000px] h-[1000px] -translate-y-1/2 translate-x-[30%] opacity-[0.05]">
            {Array.from({ length: 14 }).map((_, i) => (
              <div
                key={i}
                className="absolute border border-black rounded-full"
                style={{ inset: `${i * 3.5}%` }}
              />
            ))}
          </div>
        </div>

        <div className="hw-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <FadeIn>
                <h1 className="hw-heading-hero !text-4xl sm:!text-6xl lg:!text-7xl text-[var(--color-ink)] mb-6 tracking-tight">
                  Comprehensive Care.
                </h1>
                <p className="hw-body-lg text-[var(--color-ink-secondary)] text-balance max-w-xl">
                  From advanced clinical diagnostics to pediatric therapies and childhood development programs, we provide evidence-based care under one roof.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <div className="flex flex-col gap-3">
                  <a href="#clinical" className="group flex items-center justify-between p-5 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] transition-colors shadow-sm">
                    <span className="font-display font-bold text-lg text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Clinical & Audiology</span>
                    <ArrowRight size={20} className="text-[var(--color-ink-muted)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all" aria-hidden="true" />
                  </a>
                  <a href="#developmental" className="group flex items-center justify-between p-5 rounded-2xl border border-[var(--color-border)] bg-white hover:border-[var(--color-primary)] transition-colors shadow-sm">
                    <span className="font-display font-bold text-lg text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">Child Development</span>
                    <ArrowRight size={20} className="text-[var(--color-ink-muted)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all" aria-hidden="true" />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Clinical & Audiology Directory ─── */}
      <section id="clinical" className="hw-section bg-[var(--color-surface)] scroll-mt-24">
        <div className="hw-container">
          <SectionReveal className="mb-12">
            <h2 className="hw-heading-section text-[var(--color-ink)]">Clinical & Audiology</h2>
            <div className="w-12 h-1 bg-[var(--color-primary)] mt-4" aria-hidden="true" />
          </SectionReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clinicalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.id} delay={index * 0.1} className="flex flex-col h-full min-h-[550px] bg-white rounded-[var(--radius-xl)] overflow-hidden shadow-md group ring-1 ring-[var(--color-border-subtle)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]">

                  {/* Top Image Area */}
                  <div className="relative h-64 sm:h-72 w-full shrink-0 bg-white flex flex-col justify-end overflow-hidden">
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      containerClassName="absolute inset-0"
                      className="w-full h-full object-contain object-center transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Blur effect where text elements begin */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-[2px] pointer-events-none z-10" />
                  </div>

                  {/* Text Area */}
                  <div className="flex flex-col flex-1 relative z-20">
                    <div className="p-6 md:p-8 flex flex-col flex-1 bg-white">

                      <div className="flex items-center gap-4 mb-4 text-[var(--color-ink)]">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center shrink-0">
                          <Icon size={24} className="text-[var(--color-primary)]" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-display font-bold leading-tight pt-1">{service.title}</h3>
                      </div>

                      <p className="hw-body text-[var(--color-ink-secondary)] mb-6 flex-1 text-sm md:text-base font-medium">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-8 mt-auto" role="list">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-ink)] font-semibold">
                            <Check size={16} className="text-[var(--color-primary)] mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-bold text-sm transition-all group-hover:gap-3 uppercase tracking-wide"
                      >
                        {service.linkText} <ArrowRight size={16} aria-hidden="true" />
                      </Link>

                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Child Development Grid ─── */}
      <section id="developmental" className="hw-section bg-transparent scroll-mt-24 border-t border-[var(--color-border)]">
        <div className="hw-container">
          <SectionReveal className="mb-12">
            <h2 className="hw-heading-section text-[var(--color-ink)]">Child Development Programs</h2>
            <div className="w-12 h-1 bg-[var(--color-primary)] mt-4" aria-hidden="true" />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developmentalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.id} delay={index * 0.1} className="flex flex-col h-full min-h-[450px] md:min-h-[500px] bg-white rounded-[var(--radius-xl)] overflow-hidden shadow-md group ring-1 ring-[var(--color-border-subtle)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]">

                  {/* Top Image Area */}
                  <div className="relative h-60 sm:h-64 w-full shrink-0 bg-white flex flex-col justify-end overflow-hidden">
                    <OptimizedImage
                      src={service.image}
                      alt={service.title}
                      containerClassName="absolute inset-0"
                      className="w-full h-full object-contain object-center transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Blur effect where text elements begin */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent backdrop-blur-[2px] pointer-events-none z-10" />
                  </div>

                  {/* Text Area */}
                  <div className="flex flex-col flex-1 relative z-20">
                    <div className="p-6 md:p-8 flex flex-col flex-1 bg-white">

                      <div className="flex items-center gap-4 mb-4 text-[var(--color-ink)]">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-black/5 flex items-center justify-center shrink-0">
                          <Icon size={24} className="text-[var(--color-primary)]" aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-display font-bold leading-tight pt-1">{service.title}</h3>
                      </div>

                      <p className="hw-body text-[var(--color-ink-secondary)] mb-6 flex-1 text-sm md:text-base font-medium">
                        {service.description}
                      </p>

                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-bold text-sm transition-all group-hover:gap-3 uppercase tracking-wide"
                      >
                        {service.linkText} <ArrowRight size={16} aria-hidden="true" />
                      </Link>

                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Grounded CTA ─── */}
      <SectionReveal className="py-12 lg:py-20 bg-transparent">
        <div className="hw-container">
          <div className="relative rounded-[2rem] overflow-hidden bg-[var(--color-primary)] shadow-2xl">
            {/* Atmospheric Background */}
            <img
              src="/images/hearing-testing-and-audiology.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay pointer-events-none"
              loading="lazy"
              aria-hidden="true"
            />

            {/* Elegant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/90 to-transparent pointer-events-none" />

            <div className="relative p-8 md:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">

              {/* Left Side: Typography */}
              <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold mb-6 border border-white/20 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                  </span>
                  Accepting New Patients
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4 leading-[1.2] text-balance">
                  Take the first step toward better communication.
                </h2>
                <p className="text-base md:text-lg text-white/90 max-w-xl text-balance font-medium">
                  Our specialists are ready to guide you with professional assessments and customized therapy plans.
                </p>
              </div>

              {/* Right Side: Actions */}
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
                <Link to="/booking" className="hw-btn hw-btn-white w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all font-bold">
                  Book Assessment
                </Link>
                <Link to="/contact" className="hw-btn text-white border-2 border-white/30 hover:bg-white/10 transition-colors w-full sm:w-auto font-bold">
                  Contact Clinic
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>

    </div>
  );
};

export default Services;

