import { useState } from 'react';
import { Phone, Mail, MessageCircle, ChevronDown, CheckCircle, Loader2 } from 'lucide-react';
import { FadeIn, SectionReveal, StaggerContainer, StaggerItem, Soundwave } from '../components/common/Motion';
import SEO from '../components/common/SEO';
import { useFormSubmit } from '../hooks/useFormSubmit';

const faqs = [
  {
    q: 'What are the modes of payment accepted?',
    a: 'We accept payments via Cash, Cheque, UPI, and Demand Draft.',
  },
  {
    q: 'Which is the nearest landmark to the Perumbavoor clinic?',
    a: 'Our Perumbavoor centre is located directly opposite Govt. Boys Higher Secondary School Ground on Hariharraiyyer Road. It is easy to locate.',
  },
  {
    q: 'What are the hours of operation?',
    a: 'We are open Monday through Saturday, 9:00 AM to 5:30 PM. The clinic is closed on Sundays.',
  },
  {
    q: 'Do I need a prior appointment for a consultation?',
    a: 'Walk-ins are welcome, but we strongly recommend booking an appointment to avoid waiting. You can book online through our website or call us directly.',
  },
  {
    q: 'Do you offer trial periods for hearing aids?',
    a: 'Yes, we offer trial fittings so you can experience the hearing aid before committing to a purchase. Our audiologist will guide you through the entire process.',
  },
];

const FAQItem = ({ faq, isOpen, toggle, id }: { faq: typeof faqs[0]; isOpen: boolean; toggle: () => void; id: string }) => (
  <button
    onClick={toggle}
    aria-expanded={isOpen}
    aria-controls={`faq-answer-${id}`}
    id={`faq-question-${id}`}
    className="w-full text-left bg-white rounded-[var(--radius-lg)] border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 overflow-hidden group"
  >
    <div className="flex items-center justify-between p-6 gap-4">
      <h4 className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">{faq.q}</h4>
      <ChevronDown
        size={20}
        className={`shrink-0 text-[var(--color-ink-muted)] group-hover:text-[var(--color-primary)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </div>
    <div
      id={`faq-answer-${id}`}
      role="region"
      aria-labelledby={`faq-question-${id}`}
      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
    >
      <div className="overflow-hidden">
        <p className="px-6 pb-6 text-[var(--color-ink-secondary)] leading-relaxed text-sm">{faq.a}</p>
      </div>
    </div>
  </button>
);

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { isSubmitting, isSuccess, handleSubmit } = useFormSubmit();

  return (
    <div className="bg-transparent min-h-[100dvh]">
      <SEO
        title="Contact Us | Hearwell"
        description="Get in touch with Hearwell Speech & Hearing Centre. Call, WhatsApp, or send us a message to schedule a consultation."
        url="https://hearwell.co.in/contact"
        keywords="contact Hearwell, book audiologist Kerala, speech therapy appointment Perumbavoor"
      />

      {/* ─── Centered Direct Hero ─── */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden hw-bg-glass">
        <div className="hw-container relative z-10">
          <FadeIn className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="flex justify-center items-center gap-4 mb-8">
              <Soundwave bars={4} color="var(--color-primary)" className="h-5" />
              <span className="hw-caption text-[var(--color-primary)] font-bold tracking-widest uppercase">Support & Booking</span>
              <Soundwave bars={4} color="var(--color-primary)" className="h-5 scale-x-[-1]" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-[var(--color-ink)] mb-8 tracking-tight">
              Start the <span className="text-[var(--color-primary)] font-serif italic">conversation.</span>
            </h1>
            
            <p className="hw-body-lg text-[var(--color-ink-secondary)] text-balance max-w-2xl mx-auto">
              We're here to answer your questions and help you start your journey to better health. Reach out however you prefer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Contact Info & Form ─── */}
      <SectionReveal className="hw-section hw-bg-plaster">
        <div className="hw-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Methods */}
            <div className="lg:col-span-5 space-y-8">
              <StaggerContainer className="flex flex-col gap-4">
                
                <StaggerItem className="hw-card p-6 flex items-start gap-5 hover:border-[var(--color-primary)] transition-colors">
                  <div className="w-12 h-12 bg-[var(--color-surface)] text-[var(--color-primary)] rounded-full flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-ink)] mb-2">Call Us</h4>
                    <a href="tel:+919633626656" className="block text-[var(--color-ink-secondary)] hover:text-[var(--color-primary)] font-medium mb-1">+91 9633626656</a>
                    <a href="tel:+919947314906" className="block text-[var(--color-ink-secondary)] hover:text-[var(--color-primary)] font-medium">+91 9947314906</a>
                  </div>
                </StaggerItem>

                <StaggerItem className="hw-card p-6 flex items-start gap-5 hover:border-[#25D366] transition-colors">
                  <div className="w-12 h-12 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-ink)] mb-2">WhatsApp</h4>
                    <p className="text-[var(--color-ink-muted)] text-sm mb-2">Message our clinic directly</p>
                    <a href="https://wa.me/919633626656" target="_blank" rel="noreferrer" className="text-[#25D366] font-semibold hover:underline">Start Chat</a>
                  </div>
                </StaggerItem>

                <StaggerItem className="hw-card p-6 flex items-start gap-5 hover:border-[var(--color-primary)] transition-colors">
                  <div className="w-12 h-12 bg-[var(--color-surface)] text-[var(--color-primary)] rounded-full flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-ink)] mb-2">Email</h4>
                    <a href="mailto:hearwellspeechandhearing@gmail.com" className="block text-[var(--color-ink-secondary)] hover:text-[var(--color-primary)] mb-1 break-all">hearwellspeechandhearing@gmail.com</a>
                    <p className="text-xs text-[var(--color-ink-muted)]">Response within 24 hours</p>
                  </div>
                </StaggerItem>

              </StaggerContainer>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <FadeIn className="bg-white p-8 md:p-12 rounded-[var(--radius-xl)] shadow-sm border border-[var(--color-border)] h-full">
                <h2 className="text-3xl font-display font-bold text-[var(--color-ink)] mb-8">Send us a message</h2>
                
                {isSuccess ? (
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-8 text-center flex flex-col items-center justify-center h-[400px]" aria-live="polite">
                    <div className="w-16 h-16 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center mb-6">
                      <CheckCircle size={32} />
                    </div>
                    <h4 className="text-2xl font-bold text-[var(--color-ink)] mb-2">Message Sent!</h4>
                    <p className="text-[var(--color-ink-secondary)]">Thank you for reaching out. A member of our clinical team will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-semibold text-[var(--color-ink)]">Full Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          placeholder="John Doe" 
                          className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] text-sm rounded-[var(--radius-md)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] block p-4 transition-all duration-300 outline-none placeholder:text-[var(--color-ink-muted)]"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-semibold text-[var(--color-ink)]">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          placeholder="+91 99999 99999" 
                          className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] text-sm rounded-[var(--radius-md)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] block p-4 transition-all duration-300 outline-none placeholder:text-[var(--color-ink-muted)]"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-semibold text-[var(--color-ink)]">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        placeholder="How can we help?" 
                        className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] text-sm rounded-[var(--radius-md)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] block p-4 transition-all duration-300 outline-none placeholder:text-[var(--color-ink-muted)]"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-semibold text-[var(--color-ink)]">Message</label>
                      <textarea 
                        id="message" 
                        rows={5}
                        placeholder="Please describe your inquiry..." 
                        className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] text-sm rounded-[var(--radius-md)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] block p-4 transition-all duration-300 outline-none resize-none placeholder:text-[var(--color-ink-muted)]"
                        required
                        disabled={isSubmitting}
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="hw-btn hw-btn-primary w-full text-lg py-4 mt-4 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </FadeIn>
            </div>

          </div>
        </div>
      </SectionReveal>

      {/* ─── FAQs ─── */}
      <SectionReveal className="hw-section hw-bg-paper border-t border-[var(--color-border)]">
        <div className="hw-container max-w-3xl">
          <FadeIn className="text-center mb-12">
            <h2 className="hw-heading-section mb-4">Frequently Asked Questions</h2>
            <p className="hw-body-lg text-[var(--color-ink-secondary)]">Quick answers to the questions we hear most often.</p>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                id={String(i)}
                faq={faq}
                isOpen={openFaq === i}
                toggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </SectionReveal>

    </div>
  );
};

export default Contact;

