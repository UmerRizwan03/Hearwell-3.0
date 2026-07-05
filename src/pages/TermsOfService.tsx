import { FadeIn, SectionReveal } from '../components/common/Motion';
import SEO from '../components/common/SEO';

const TermsOfService = () => {
  return (
    <div className="bg-transparent">
      <SEO
        title="Terms of Service | Hearwell"
        description="Terms of service and usage guidelines for Hearwell Speech and Hearing Centre."
        url="https://hearwell.co.in/terms"
      />

      <section className="relative pt-32 pb-24 overflow-hidden bg-[var(--color-dark-bg)]">
        <div className="hw-container relative z-10">
          <FadeIn className="max-w-4xl">
            <h1 className="hw-heading-hero text-white mb-6">
              Terms of <br />
              <span className="text-[var(--color-dark-ink-muted)]">Service.</span>
            </h1>
            <p className="text-[var(--color-accent)] font-mono text-sm tracking-widest uppercase">Last Updated: April 2, 2026</p>
          </FadeIn>
        </div>
      </section>

      <SectionReveal className="py-20 lg:py-28">
        <div className="hw-container">
          <FadeIn className="max-w-4xl">
            <div className="prose prose-lg max-w-none text-[var(--color-ink-secondary)] space-y-12">
              
              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4 border-b border-[var(--color-border)] pb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the website of Hearwell Speech and Hearing Centre ("we", "our", "us"), you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4 border-b border-[var(--color-border)] pb-4">2. Clinical Services Disclaimer</h2>
                <p>
                  The information provided on this website is for educational and informational purposes only. It does not constitute medical advice and is not intended to be a substitute for professional clinical diagnosis or treatment. Always seek the advice of your audiologist, speech therapist, or other qualified health provider with any questions you may have regarding a medical condition.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4 border-b border-[var(--color-border)] pb-4">3. Appointments and Cancellations</h2>
                <p>
                  When booking an appointment through our website or via phone, you agree to provide accurate information. We request that you provide at least 24 hours notice if you need to cancel or reschedule your appointment, allowing us to offer that time to another patient.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4 border-b border-[var(--color-border)] pb-4">4. Intellectual Property</h2>
                <p>
                  All content published and made available on our site is the property of Hearwell Speech and Hearing Centre and the site's creators. This includes, but is not limited to images, text, logos, documents, downloadable files and anything that contributes to the composition of our site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4 border-b border-[var(--color-border)] pb-4">5. Limitation of Liability</h2>
                <p>
                  Hearwell Speech and Hearing Centre and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities and expenses including legal fees from your use of the site.
                </p>
              </section>

              <SectionReveal className="bg-[var(--color-surface)] p-10 rounded-[var(--radius-xl)] border border-[var(--color-border)] mt-16">
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4">Contact Information</h2>
                <p className="mb-0 text-[var(--color-ink-secondary)]">
                  If you have any questions or concerns about these Terms, please contact us at:<br /><br />
                  <strong className="text-[var(--color-ink)]">Hearwell Speech and Hearing Centre</strong><br />
                  <span className="font-semibold text-[var(--color-ink)]">Perumbavoor Clinic:</span> Hariharraiyyer Rd, Opp. Govt Boys HSS<br />
                  <span className="font-semibold text-[var(--color-ink)]">Perinjanam Clinic:</span> Near Vadakke Bus Stop, 680686<br />
                  Email: hearwellspeechandhearing@gmail.com<br />
                  Phone: +91 9633626656 / +91 9947314906
                </p>
              </SectionReveal>

            </div>
          </FadeIn>
        </div>
      </SectionReveal>
    </div>
  );
};

export default TermsOfService;

