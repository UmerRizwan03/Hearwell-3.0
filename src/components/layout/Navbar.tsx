import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Soundwave } from '../common/Motion';
import OptimizedImage from '../common/OptimizedImage';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Our Team', path: '/doctor' },
  { name: 'Services', path: '/services' },
  { name: 'Hearing Aids', path: '/hearing-aids' },
  { name: 'Locations', path: '/locations' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[var(--z-navbar)] transition-all duration-500`}
        style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
      >
        <div
          className={`mx-auto transition-all duration-500 ${
            isScrolled
              ? 'max-w-full bg-[var(--color-bg)] border-b border-[var(--color-border)] shadow-sm'
              : 'max-w-full bg-transparent'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-out-expo)' }}
        >
          <div className={`px-5 md:px-8 flex justify-between items-center transition-all duration-300 ${
            isScrolled ? 'py-2.5' : 'py-4'
          }`}>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 relative z-[60] group" onClick={closeMenu}>
              <div className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
                <OptimizedImage src="/logo.webp" alt="Hearwell Logo" className="w-full h-full object-contain" containerClassName="w-full h-full" disableBlur={true} />
              </div>
              <div className="flex flex-col justify-center">
                <span 
                  className={`text-[1.05rem] font-bold leading-none tracking-tight transition-colors duration-300 text-[var(--color-ink)]`} 
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Hearwell
                </span>
                <span 
                  className={`text-[9px] font-semibold uppercase tracking-[0.14em] mt-0.5 transition-colors duration-300 text-[var(--color-ink-muted)]`} 
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Speech & Hearing
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className={`hw-nav-link ${
                        location.pathname === link.path ? 'hw-nav-link-active' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-3 pl-5 border-l border-[oklch(0.88_0.005_175)]">
                <Link
                  to="/booking"
                  className="hw-btn hw-btn-primary hw-btn-pill text-[13px] py-2.5 px-5"
                >
                  <Soundwave bars={3} color="oklch(1 0 0 / 0.6)" className="scale-75" />
                  Book an Assessment
                </Link>
              </div>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-[var(--color-ink)] relative z-[60]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-[30] lg:hidden flex flex-col"
          >
            <div className="flex-1 flex flex-col pt-24 px-8 pb-10 overflow-y-auto">
              <nav>
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={link.path}
                        onClick={closeMenu}
                        className={`block py-3 text-2xl font-bold tracking-tight transition-colors ${
                          location.pathname === link.path
                            ? 'text-[var(--color-primary)]'
                            : 'text-[var(--color-ink)]'
                        }`}
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  to="/booking"
                  onClick={closeMenu}
                  className="hw-btn hw-btn-primary hw-btn-lg w-full"
                >
                  Book an Assessment
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-auto pt-8 border-t border-[var(--color-border)] flex flex-col gap-4"
              >
                <a href="tel:+919633626656" className="flex items-center gap-3 text-sm text-[var(--color-ink-secondary)]">
                  <Phone size={16} className="text-[var(--color-primary)]" />
                  +91 9633626656
                </a>
                <div className="flex items-center gap-3 text-sm text-[var(--color-ink-secondary)]">
                  <MapPin size={16} className="text-[var(--color-primary)]" />
                  Perumbavoor & Perinjanam
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
