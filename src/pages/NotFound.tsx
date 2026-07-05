import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import SEO from '../components/common/SEO';
import { FadeIn } from '../components/common/Motion';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found | Hearwell"
        description="The page you are looking for doesn't exist. Return to the Hearwell homepage."
        url="https://hearwell.co.in/404"
      />
      <div className="min-h-[calc(100dvh-72px)] bg-transparent flex items-center justify-center px-6 py-24">
        <FadeIn className="max-w-lg w-full text-center">
          
          <div className="w-20 h-20 bg-[var(--color-surface)] rounded-full flex items-center justify-center mx-auto mb-8 text-[var(--color-primary)]">
            <Search size={40} />
          </div>

          <p className="hw-caption text-[var(--color-primary)] mb-4">404 — Not Found</p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-ink)] leading-tight mb-5">
            We couldn't find that page.
          </h1>
          <p className="hw-body text-[var(--color-ink-secondary)] mb-10">
            The page you're looking for may have been moved or doesn't exist. 
            Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/" className="hw-btn hw-btn-primary">
              Return Home <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="hw-btn hw-btn-secondary">
              Contact Us
            </Link>
          </div>

          <div className="pt-8 border-t border-[var(--color-border)]">
            <p className="text-sm text-[var(--color-ink-muted)] mb-4 font-semibold uppercase tracking-wider">Or explore a section:</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[
                { name: 'Services', path: '/services' },
                { name: 'Hearing Aids', path: '/hearing-aids' },
                { name: 'Book Appointment', path: '/booking' },
                { name: 'Locations', path: '/locations' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-2 bg-white border border-[var(--color-border)] rounded-[var(--radius-md)] text-[var(--color-ink-secondary)] font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </>
  );
};

export default NotFound;

