import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Globe, ArrowRight, Navigation } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, Soundwave } from '../common/Motion';

const locations = [
  {
    id: 1,
    name: 'Perumbavoor',
    address: 'Hariharraiyyer Rd, Opp. Govt Boys HSS, Kerala',
    phone: '+91 9633626656',
    mapUrl: 'https://maps.google.com/?q=Hearwell+Speech+and+Hearing+Centre+Perumbavoor',
  },
  {
    id: 2,
    name: 'Perinjanam',
    address: 'Near Vadakke Bus Stop, Thrissur District',
    phone: '+91 9846464906',
    mapUrl: 'https://maps.google.com/?q=Hearwell+Speech+and+Hearing+Centre+Perinjanam',
  },
];

const quickLinks = [
  { label: 'About', path: '/about' },
  { label: 'Our Specialists', path: '/doctor' },
  { label: 'Services', path: '/services' },
  { label: 'Hearing Aids', path: '/hearing-aids' },
];

const Footer = () => {
  return (
    <footer className="relative mt-24" style={{ fontFamily: 'var(--font-body)' }}>

      {/* ─── CTA Band ─── */}
      <div className="hw-container relative z-10 -mb-24">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[var(--radius-xl)] bg-gradient-to-br from-[var(--color-accent)]/[0.08] to-[var(--color-accent)]/[0.25] border border-[var(--color-accent)]/[0.4] shadow-md px-8 py-14 md:px-14 md:py-16">
            {/* Ambient glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[var(--color-primary)] opacity-10 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[var(--color-accent)] opacity-25 blur-[80px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: CTA */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Soundwave bars={4} color="var(--color-primary)" />
                  <span className="hw-caption text-[var(--color-primary)]">Visit Our Clinics</span>
                </div>
                <h2
                  className="text-[clamp(1.75rem,1.5rem+1.5vw,2.5rem)] font-bold text-[var(--color-ink)] leading-[1.15] tracking-tight mb-4 max-w-lg"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Expert hearing care and speech therapy, two locations in Kerala.
                </h2>
                <p className="text-[var(--color-ink-secondary)] text-sm leading-relaxed max-w-md">
                  Comprehensive diagnostics, personalized hearing aid fittings, and evidence-led therapy programs.
                </p>
              </div>

              {/* Right: Location Cards */}
              <div className="flex flex-col gap-3">
                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    className="group relative bg-white hover:bg-[oklch(0.99_0.002_175)] border border-[var(--color-border)] hover:border-[var(--color-primary-light)] rounded-[var(--radius-lg)] p-5 transition-all duration-400 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-[var(--color-ink)] text-base font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                          {loc.name}
                        </h3>
                        <p className="text-[var(--color-ink-secondary)] text-sm mt-1">{loc.address}</p>
                        <p className="text-[var(--color-ink-secondary)] text-xs font-medium mt-1">{loc.phone}</p>
                      </div>
                      <a
                        href={loc.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 w-9 h-9 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-ink-secondary)] group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300"
                        aria-label={`Get directions to ${loc.name}`}
                      >
                        <Navigation size={14} />
                      </a>
                    </div>

                    {/* Hover actions */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-400">
                      <div className="overflow-hidden">
                        <div className="pt-3 flex items-center gap-2">
                          <a
                            href={loc.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-white border border-[var(--color-border)] text-[var(--color-ink)] py-2 rounded-[var(--radius-md)] text-xs font-semibold hover:bg-[var(--color-surface)] transition-colors"
                          >
                            <Navigation size={12} /> Directions
                          </a>
                          <a
                            href={`tel:${loc.phone.replace(/\s+/g, '')}`}
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white py-2 rounded-[var(--radius-md)] text-xs font-medium border border-transparent hover:bg-[var(--color-primary-dark)] transition-colors"
                          >
                            <Phone size={12} /> Call
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* ─── Main Footer ─── */}
      <div className="bg-[var(--color-surface)] pt-36 pb-8 border-t border-[var(--color-border)] relative overflow-hidden">
        
        {/* Ambient Glows — CSS-animated for GPU compositing */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div 
            className="absolute -top-1/2 -left-1/4 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full animate-[footer-glow-1_8s_ease-in-out_infinite]"
            style={{ background: 'radial-gradient(circle at center, var(--color-primary) 0%, transparent 70%)' }}
          />
          <div 
            className="absolute top-[20%] -right-1/4 w-[90vw] h-[90vw] max-w-[1000px] max-h-[1000px] rounded-full animate-[footer-glow-2_12s_ease-in-out_2s_infinite]"
            style={{ background: 'radial-gradient(circle at center, var(--color-accent) 0%, transparent 60%)' }}
          />
        </div>

        {/* Giant Watermark */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[30%] pointer-events-none select-none overflow-hidden opacity-[0.03]">
          <span className="font-display font-black text-[22vw] leading-none tracking-tighter text-[var(--color-ink)] whitespace-nowrap">
            HEARWELL
          </span>
        </div>

        <div className="hw-container relative z-10">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

            {/* Brand */}
            <StaggerItem className="lg:col-span-4 lg:pr-8">
              <Link to="/" className="flex items-center gap-2.5 mb-5 group w-fit">
                <img src="/logo.webp" alt="Hearwell Logo" className="w-7 h-7 object-contain group-hover:scale-105 transition-transform" />
                <span className="text-lg font-bold text-[var(--color-ink)] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Hearwell
                </span>
              </Link>
              <p className="text-[var(--color-ink-secondary)] text-sm leading-relaxed mb-5 max-w-[280px]">
                Professional hearing care and speech therapy services since 2014. Two clinics in Kerala.
              </p>
              <Link
                to="/booking"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:gap-3 transition-all"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Book an Assessment <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </StaggerItem>

            {/* Quick Links */}
            <StaggerItem className="lg:col-span-2">
              <h4 className="text-[var(--color-ink)] font-semibold text-sm mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Explore
              </h4>
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-[var(--color-ink-secondary)] hover:text-[var(--color-primary)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </StaggerItem>

            {/* Contact */}
            <StaggerItem className="lg:col-span-3">
              <h4 className="text-[var(--color-ink)] font-semibold text-sm mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Contact
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-[var(--color-ink-secondary)]">
                <li>
                  <a href="tel:+919633626656" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2.5">
                    <Phone size={14} className="opacity-50" /> +91 9633626656
                  </a>
                </li>
                <li>
                  <a href="tel:+919947314906" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2.5">
                    <Phone size={14} className="opacity-50" /> +91 9947314906
                  </a>
                </li>
                <li>
                  <a href="mailto:hearwellspeechandhearing@gmail.com" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2.5">
                    <Mail size={14} className="opacity-50" /> Email us
                  </a>
                </li>
                <li className="flex items-start gap-2.5 pt-2">
                  <MapPin size={14} className="mt-0.5 shrink-0 opacity-50" />
                  <span>
                    <strong className="text-[var(--color-ink)] block mb-0.5 font-medium">Perumbavoor</strong>
                    Hariharraiyyer Rd, Opp. Govt Boys HSS
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={14} className="mt-0.5 shrink-0 opacity-50" />
                  <span>
                    <strong className="text-[var(--color-ink)] block mb-0.5 font-medium">Perinjanam</strong>
                    Near Vadakke Bus Stop, Kerala 680686
                  </span>
                </li>
              </ul>
            </StaggerItem>

            {/* Social + Hours */}
            <StaggerItem className="lg:col-span-3">
              <h4 className="text-[var(--color-ink)] font-semibold text-sm mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Connect
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-[var(--color-ink-secondary)]">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=100063747556166" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2.5">
                    <Facebook size={14} className="opacity-50" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/hearwell_speech_and_hearing/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2.5">
                    <Instagram size={14} className="opacity-50" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.practo.com/ernakulam/clinic/hearwell-speech-and-hearing-centre-perumbavoor-1/audiologist-ps-62" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2.5">
                    <Globe size={14} className="opacity-50" /> Practo
                  </a>
                </li>
                <li className="pt-3 border-t border-[var(--color-border-strong)] mt-2">
                  <span className="text-[var(--color-ink)] font-semibold block mb-1" style={{ fontFamily: 'var(--font-display)' }}>Hours</span>
                  Mon - Sat: 9:00 AM - 5:30 PM<br />
                  Sunday: Closed
                </li>
              </ul>
            </StaggerItem>
          </StaggerContainer>

          {/* Bottom Bar */}
          <div className="border-t border-[var(--color-border-strong)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[var(--color-ink-muted)]">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.2_145)] shadow-[0_0_6px_oklch(0.65_0.2_145/0.5)]" />
              <span>UPI, Cash, Cheque, DD Accepted</span>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <span>&copy; {new Date().getFullYear()} Hearwell. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link to="/privacy" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-[var(--color-primary)] transition-colors">Terms of Use</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
