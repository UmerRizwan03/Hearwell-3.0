import { useState } from 'react';
import { CalendarCheck, Lock, CheckCircle, Loader2, CalendarDays } from 'lucide-react';
import { FadeIn, SectionReveal } from '../components/common/Motion';
import SEO from '../components/common/SEO';
import { useFormSubmit } from '../hooks/useFormSubmit';

const Booking = () => {
  const [selectedService, setSelectedService] = useState('Hearing Test');
  const [selectedLocation, setSelectedLocation] = useState('Perumbavoor');
  const { isSubmitting, isSuccess, handleSubmit } = useFormSubmit();

  const services = ['Hearing Test', 'Speech Therapy', 'Hearing Aids', 'Pediatric Service'];
  const locations = ['Perumbavoor', 'Perinjanam'];
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="bg-transparent min-h-[100dvh]">
      <SEO
        title="Book an Appointment | Hearwell"
        description="Schedule a hearing test, speech therapy session, or hearing aid consultation at Hearwell Speech & Hearing Centre."
        url="https://hearwell.co.in/booking"
      />

      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-48 overflow-hidden bg-[var(--color-primary)]">
        {/* Background Gradient & Texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] to-[#0E7490]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_40%,transparent_100%)]" />

        <div className="hw-container relative z-10">
          <FadeIn className="max-w-4xl">
            <h1 className="hw-heading-hero text-white mb-6 drop-shadow-sm">
              Book an <br />
              <span className="text-white/70">Appointment.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[#CFFAFE] text-balance max-w-2xl font-medium leading-relaxed drop-shadow-sm">
              Take the first step toward better hearing and speech. Quick, convenient, and entirely patient-focused.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Booking Form ─── */}
      <SectionReveal className="pb-24 lg:pb-36 -mt-16 lg:-mt-24 relative z-20">
        <div className="hw-container">
          <FadeIn className="max-w-3xl mx-auto bg-white rounded-[var(--radius-xl)] p-8 md:p-14 border border-[var(--color-border)] relative overflow-hidden">
            
            {isSuccess ? (
              <div className="py-20 text-center flex flex-col items-center justify-center" aria-live="polite">
                <div className="w-20 h-20 bg-[var(--color-surface)] rounded-full flex items-center justify-center mb-6 text-[var(--color-primary)]">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-3xl font-display font-bold text-[var(--color-ink)] mb-4">Request Received!</h3>
                <p className="hw-body max-w-md mx-auto mb-8">
                  Thank you for choosing Hearwell. Our team will contact you shortly to confirm the exact time of your appointment.
                </p>
                <div className="bg-transparent border border-[var(--color-border)] rounded-[var(--radius-lg)] p-6 inline-block text-left text-sm">
                  <p className="text-[var(--color-ink-secondary)] mb-2"><strong className="text-[var(--color-ink)] font-semibold mr-2">Service:</strong> {selectedService}</p>
                  <p className="text-[var(--color-ink-secondary)]"><strong className="text-[var(--color-ink)] font-semibold mr-2">Location:</strong> {selectedLocation}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="service" value={selectedService} />
                <input type="hidden" name="location" value={selectedLocation} />
                
                {/* 1: Patient Info */}
                <div className="mb-14">
                  <h3 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-7">
                    Patient Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="patientName" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Full Name</label>
                      <input id="patientName" name="name" type="text" className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] rounded-[var(--radius-md)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] p-4 transition-all duration-300 outline-none" required />
                    </div>
                    <div>
                      <label htmlFor="patientAge" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Age</label>
                      <input id="patientAge" name="age" type="number" className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] rounded-[var(--radius-md)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] p-4 transition-all duration-300 outline-none" required />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="patientPhone" className="block text-sm font-semibold text-[var(--color-ink)] mb-2">Phone Number</label>
                      <input id="patientPhone" name="phone" type="tel" className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] rounded-[var(--radius-md)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] p-4 transition-all duration-300 outline-none" required />
                    </div>
                  </div>
                </div>

                {/* 2: Service */}
                <div className="mb-14">
                  <h3 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-7">
                    Select Service
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {services.map(service => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`px-6 py-3 rounded-[var(--radius-md)] text-sm font-semibold transition-all duration-300 border ${
                          selectedService === service 
                          ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md' 
                          : 'bg-white text-[var(--color-ink-secondary)] border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3: Location */}
                <div className="mb-14">
                  <h3 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-7">
                    Preferred Location
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {locations.map(loc => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => setSelectedLocation(loc)}
                        className={`p-5 rounded-[var(--radius-md)] text-center font-bold transition-all duration-300 border ${
                          selectedLocation === loc
                          ? 'bg-[var(--color-surface)] border-[var(--color-primary)] text-[var(--color-primary)]'
                          : 'bg-white border-[var(--color-border)] text-[var(--color-ink-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]'
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4: Date */}
                <div className="mb-14">
                  <h3 className="text-2xl font-display font-bold text-[var(--color-ink)] mb-7">
                    Preferred Date
                  </h3>
                  <div className="relative w-full md:w-1/2">
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-primary)] pointer-events-none z-10">
                      <CalendarDays size={20} />
                    </div>
                    <input 
                      type="date"
                      name="date"
                      aria-label="Preferred Date" 
                      required 
                      min={todayStr}
                      disabled={isSubmitting} 
                      className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] rounded-[var(--radius-md)] focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] p-4 pr-12 transition-all duration-300 outline-none disabled:opacity-70" 
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col items-center pt-8 border-t border-[var(--color-border)]">
                  <div className="flex items-center gap-2 text-[var(--color-ink-muted)] text-sm font-medium mb-6">
                    <Lock size={16} className="text-[var(--color-primary)]" /> Secure & Confidential
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="hw-btn hw-btn-primary w-full text-lg py-5 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={24} className="animate-spin" /> Confirming...
                      </>
                    ) : (
                      <>
                        <CalendarCheck size={24} /> Confirm Appointment Request
                      </>
                    )}
                  </button>
                  <p className="text-xs text-[var(--color-ink-muted)] mt-4 text-center max-w-sm">
                    Our team will call you shortly to confirm the exact time of your appointment.
                  </p>
                </div>

              </form>
            )}

          </FadeIn>
        </div>
      </SectionReveal>
    </div>
  );
};

export default Booking;

