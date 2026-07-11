import { Link } from 'react-router-dom';
import { SectionReveal } from '../../../components/common/Motion';


export const DoctorSnippet = () => {
  return (
    <SectionReveal className="hw-section hw-bg-portrait">
      <div className="hw-container-narrow">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5 flex justify-center mt-12 md:mt-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 group">
              {/* Abstract Soundwave Perimeter (CSS Spirograph) */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                {/* Glowing wavy rings */}
                <div className="absolute w-[95%] h-[95%] border-[1.5px] border-[var(--color-primary)]/80 rounded-[43%_57%_49%_51%] animate-[spin_7s_linear_infinite]" />
                <div className="absolute w-[98%] h-[98%] border-[1px] border-[#22D3EE]/70 rounded-[51%_49%_53%_47%] animate-[spin_11s_linear_infinite_reverse]" />
                <div className="absolute w-[101%] h-[101%] border-[1.5px] border-[#34D399]/60 rounded-[47%_53%_42%_58%] animate-[spin_9s_linear_infinite]" />
                <div className="absolute w-[104%] h-[104%] border-[1px] border-[var(--color-primary)]/50 rounded-[55%_45%_58%_42%] animate-[spin_13s_linear_infinite_reverse]" />
                <div className="absolute w-[107%] h-[107%] border-[1.5px] border-[#22D3EE]/40 rounded-[41%_59%_46%_54%] animate-[spin_15s_linear_infinite]" />
                <div className="absolute w-[110%] h-[110%] border-[1px] border-[var(--color-primary)]/30 rounded-[49%_51%_57%_43%] animate-[spin_18s_linear_infinite_reverse]" />
                
                {/* Core glow */}
                <div className="absolute w-full h-full rounded-full bg-gradient-to-tr from-[var(--color-primary)] via-[#22D3EE] to-[#34D399] opacity-15 blur-xl" />

                {/* Solid center background */}
                <div className="absolute w-[92%] h-[92%] rounded-full bg-gradient-to-b from-white to-[var(--color-surface)] border border-[var(--color-border-subtle)] shadow-[inset_0_0_40px_rgba(0,0,0,0.03)]" />
              </div>
              
              {/* 3D Pop Out Image Container */}
              <div 
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ clipPath: 'inset(-35% 0 0 0 round 0 0 50% 50%)' }}
              >
                <img
                  src="/images/doctor.webp"
                  alt="Dr. Babitha Fazal"
                  className="absolute bottom-0 left-0 w-full h-[135%] object-cover object-bottom pointer-events-auto transition-transform duration-700 origin-bottom group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <div className="hw-caption text-[var(--color-primary)] mb-2">Chief Audiologist</div>
            <h2 className="hw-heading-section mb-2">Babitha Fazal</h2>
            <div className="text-[var(--color-ink-muted)] text-sm font-medium tracking-wide mb-6">BASLP, MASLP (Clinical Audiologist & Speech Language Pathologist)</div>
            
            <div className="hw-prose mb-8">
              <p>
                "Hearing loss and speech delays don't just affect the ears or the mouth—they affect relationships, confidence, and quality of life. My approach is rooted in 16 years of clinical practice, but driven by the human impact of what we do."
              </p>
            </div>

            <ul className="flex flex-col gap-3 text-sm text-[var(--color-ink-secondary)] mb-8">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" /> 16+ years clinical experience</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" /> Member of ISHA</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" /> Specialist in Pediatric Audiology & AVT</li>
            </ul>

            <Link to="/doctor" className="hw-btn hw-btn-secondary">
              View Full Profile
            </Link>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};
