import { FadeIn, SectionReveal } from '../components/common/Motion';
import SEO from '../components/common/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="bg-transparent">
      <SEO
        title="Privacy Policy | Hearwell"
        description="Privacy policy and data protection guidelines for Hearwell Speech and Hearing Centre."
        url="https://hearwell.co.in/privacy-policy"
      />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-transparent border-b border-[var(--color-border)]">
        <div className="hw-container relative z-10">
          <FadeIn className="max-w-4xl">
            <h1 className="hw-heading-hero text-[var(--color-ink)] mb-6">
              Privacy <br />
              <span className="text-[var(--color-ink-muted)]">Policy.</span>
            </h1>
            <p className="text-[var(--color-primary)] font-mono text-sm tracking-widest uppercase font-bold">Last Updated: April 2, 2026</p>
          </FadeIn>
        </div>
      </section>

      <SectionReveal className="py-20 lg:py-28">
        <div className="hw-container">
          <FadeIn className="max-w-4xl">
            <div className="prose prose-lg max-w-none text-[var(--color-ink-secondary)] space-y-12">
              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4 border-b border-[var(--color-border)] pb-4">1. Introduction</h2>
                <p>
                  At Hearwell Speech and Hearing Centre, we are committed to protecting your privacy and ensuring the confidentiality of your health information. This Privacy Policy outlines how we collect, use, and safeguard the personal data you provide to us through our website and clinic services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4 border-b border-[var(--color-border)] pb-4">2. Information Collection</h2>
                <p>
                  We collect personal information that you voluntarily provide to us when you book an appointment, contact us through our website, or visit our clinic. This information may include:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-[var(--color-ink)]">
                  <li>Full Name and Contact Information (phone, email, address)</li>
                  <li>Medical history and previous audiological results</li>
                  <li>Communication preferences and feedback</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4 border-b border-[var(--color-border)] pb-4">3. Use of Information</h2>
                <p>
                  The information we collect is used solely for the purpose of providing you with high-quality audiological and speech therapy services. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-[var(--color-ink)]">
                  <li>Managing and scheduling appointments</li>
                  <li>Developing personalized treatment plans</li>
                  <li>Communicating with you regarding your care</li>
                  <li>Ensuring accurate billing and record-keeping</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4 border-b border-[var(--color-border)] pb-4">4. Data Protection & Confidentiality</h2>
                <p>
                  Hearwell adheres to strict clinical standards for data protection. Your health records are treated with the utmost confidentiality and are only accessible by authorized clinical staff directly involved in your care. We do not sell or share your personal information with third parties for marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4 border-b border-[var(--color-border)] pb-4">5. Website Cookies</h2>
                <p>
                  Our website may use cookies to enhance your browsing experience and analyze site traffic. These cookies do not collect personally identifiable information and are used for technical optimization only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4 border-b border-[var(--color-border)] pb-4">6. Your Rights</h2>
                <p>
                  You have the right to access your medical records, request corrections to your personal information, and withdraw consent for certain data uses at any time. For any inquiries regarding your data, please contact our clinic directly.
                </p>
              </section>

              <SectionReveal className="bg-[var(--color-surface)] p-10 rounded-[var(--radius-xl)] border border-[var(--color-border)] mt-16">
                <h2 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-4">Contact Information</h2>
                <p className="mb-0 text-[var(--color-ink-secondary)]">
                  If you have any questions or concerns about this Privacy Policy, please contact us at:<br /><br />
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

export default PrivacyPolicy;

