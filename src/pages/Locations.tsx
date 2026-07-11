import { MapPin, Phone, Navigation, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, SectionReveal, StaggerContainer, StaggerItem, Soundwave } from '../components/common/Motion';
import OptimizedImage from '../components/common/OptimizedImage';
import SEO from '../components/common/SEO';

const locationsData = [
  {
    id: 'perumbavoor',
    name: 'Perumbavoor',
    subtitle: 'Flagship Care Center',
    address: 'Opp. Govt. Boys Higher Secondary School Ground, Hariharraiyyer Road, Perumbavoor, Kerala',
    hours: 'Mon – Sat: 9:00 AM – 5:30 PM\nSunday: Closed',
    phone: ['+91 9633626656', '+91 9947314906'],
    mapLink: 'https://www.google.com/maps/search/Hearwell+Speech+and+Hearing+Centre+Perumbavoor',
    image: '/images/perumbavoor.webp',
    description: 'Our flagship destination providing the highest standard of diagnostic audiology in a meticulously designed, acoustically treated environment.',
    coordinates: '10.1167° N, 76.4833° E'
  },
  {
    id: 'perinjanam',
    name: 'Perinjanam',
    subtitle: 'Advanced Diagnostic Center',
    address: 'Near Vadakke Bus Stop, Perinjanam, Kerala 680686',
    hours: 'Mon – Sat: 9:00 AM – 5:30 PM\nSunday: Closed',
    phone: ['+91 9633626656', '+91 9947314906'],
    mapLink: 'https://www.google.com/maps/search/Hearwell+Speech+and+Hearing+Centre+Perinjanam',
    image: '/images/perinjanam.webp',
    description: 'A sanctuary for hearing wellness, offering state-of-the-art fitting technology and personalized rehabilitation programs in a serene setting.',
    coordinates: '10.3235° N, 76.1517° E'
  }
];

const Locations = () => {
  return (
    <div className="bg-transparent">
      <SEO
        title="Our Clinic Locations | Hearwell"
        description="Visit Hearwell Speech & Hearing Centre in Perumbavoor or Perinjanam, Kerala. Experience premium hearing care in a comfortable, state-of-the-art environment."
        url="https://hearwell.co.in/locations"
        keywords="Hearwell Perumbavoor, Hearwell Perinjanam, hearing clinic locations Kerala, audiologist near me Kerala"
      />

      {/* ─── Physical Presence Hero ─── */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden hw-bg-glass border-b border-[var(--color-border)]">
        <div className="hw-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="flex items-center gap-4 mb-6">
                  <Soundwave bars={4} color="var(--color-primary)" className="h-4" />
                  <span className="hw-caption text-[var(--color-primary)] font-bold">Our Clinics</span>
                </div>
                <h1 className="hw-heading-hero text-[var(--color-ink)] mb-6">
                  Care closer <br />
                  <span className="text-[var(--color-ink-muted)]">to you.</span>
                </h1>

                <p className="hw-body-lg text-[var(--color-ink-secondary)] text-balance max-w-xl">
                  Two meticulously designed acoustic environments in Kerala, engineered for precision diagnostics and exceptional patient comfort.
                </p>
              </FadeIn>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <FadeIn delay={0.2}>
                <div className="relative w-full rotate-1 hover:rotate-0 hover:-translate-y-2 transition-all duration-700 origin-bottom-right">
                  <img
                    src="/images/locations-map.png"
                    alt="Clinic Locations Map"
                    className="w-full h-auto object-contain transition-all duration-700"
                    style={{ filter: 'drop-shadow(-20px 50px 40px rgba(0, 0, 0, 0.35)) drop-shadow(-10px 20px 20px rgba(0, 0, 0, 0.25)) drop-shadow(0 5px 10px rgba(0, 0, 0, 0.15))' }}
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Location Showcases ─── */}
      <div className="hw-bg-paper border-b border-[var(--color-border)]">
        {locationsData.map((loc, index) => {
          const isEven = index % 2 === 0;
          return (
            <SectionReveal key={loc.id} id={loc.id} className={`py-24 ${index !== 0 ? 'border-t border-[var(--color-border)]' : ''}`}>
              <div className="hw-container">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>

                  {/* Image */}
                  <div className="w-full lg:w-5/12 relative group">
                    <div className="rounded-[var(--radius-xl)] overflow-hidden shadow-sm hw-card flex">
                      <OptimizedImage
                        src={loc.image}
                        alt={loc.name}
                        className="w-full !h-auto object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-7/12">
                    <div className="inline-flex items-center gap-4 mb-6">
                      <span className="hw-caption text-[var(--color-primary)]">{loc.subtitle}</span>
                      <div className="h-px w-12 bg-[var(--color-border-strong)]" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-ink)] mb-6">
                      {loc.name}
                    </h2>

                    <p className="hw-body text-[var(--color-ink-secondary)] mb-10 max-w-lg">
                      {loc.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div>
                        <h4 className="text-sm font-bold text-[var(--color-ink)] uppercase tracking-wider mb-2">Address</h4>
                        <p className="text-[var(--color-ink-secondary)] text-sm leading-relaxed">{loc.address}</p>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-[var(--color-ink)] uppercase tracking-wider mb-2">Hours</h4>
                        <p className="text-[var(--color-ink-secondary)] text-sm whitespace-pre-line leading-relaxed">{loc.hours}</p>
                      </div>

                      <div className="md:col-span-2">
                        <h4 className="text-sm font-bold text-[var(--color-ink)] uppercase tracking-wider mb-2">Contact</h4>
                        <div className="flex flex-wrap gap-4">
                          {loc.phone.map(p => (
                            <a key={p} href={`tel:${p.replace(/\s+/g, '')}`} className="text-[var(--color-primary)] font-medium hover:underline">
                              {p}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href={loc.mapLink}
                        target="_blank"
                        rel="noreferrer"
                        className="hw-btn hw-btn-primary"
                      >
                        <Navigation size={18} />
                        Get Directions
                      </a>
                      <a
                        href={`tel:${loc.phone[0].replace(/\s+/g, '')}`}
                        className="hw-btn hw-btn-secondary"
                      >
                        <Phone size={18} />
                        Call Clinic
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </SectionReveal>
          );
        })}
      </div>

      {/* ─── Routing / Maps Section ─── */}
      <SectionReveal className="hw-section hw-bg-plaster">
        <div className="hw-container">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <h2 className="hw-heading-section mb-2">Precision routing.</h2>
              <p className="hw-body-lg text-[var(--color-ink-muted)] max-w-lg">
                Select a facility below to instantly open turn-by-turn navigation on your device.
              </p>
            </div>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locationsData.map((loc) => (
              <StaggerItem
                key={`route-${loc.id}`}
                className="hw-card relative overflow-hidden flex flex-col justify-between group !p-0"
              >
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                  <OptimizedImage
                    src={loc.image}
                    alt=""
                    className="w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Blur Overlay */}
                  <div className="absolute inset-0 bg-white/70 backdrop-blur-md group-hover:bg-white/60 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 lg:p-10 flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-[var(--color-primary)] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <a
                      href={loc.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 rounded-full bg-white/50 border border-[var(--color-border)] flex items-center justify-center text-[var(--color-ink-muted)] hover:text-[var(--color-primary)] hover:bg-white hover:border-[var(--color-primary)] transition-all shadow-sm"
                    >
                      <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform" />
                    </a>
                  </div>

                  <div>
                    <h4 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-2">{loc.name}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono tracking-widest text-[var(--color-ink-muted)] uppercase font-bold">GPS</span>
                      <span className="text-sm text-[var(--color-ink-secondary)] font-medium">{loc.coordinates}</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </SectionReveal>

      {/* ─── CTA ─── */}
      <SectionReveal className="py-24 lg:py-32 hw-bg-glass text-center border-t border-[var(--color-border)]">
        <div className="hw-container">
          <FadeIn>
            <h2 className="hw-heading-section mb-8">
              Begin your journey.
            </h2>
            <Link
              to="/booking"
              className="hw-btn hw-btn-primary hw-btn-lg"
            >
              Book Your Consultation
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </SectionReveal>

    </div>
  );
};

export default Locations;

