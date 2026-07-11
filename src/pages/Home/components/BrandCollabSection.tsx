const brandLogos = [
  {
    name: 'Starkey',
    svg: (
      <svg viewBox="0 0 160 40" className="h-10 md:h-12 w-auto transition-transform hover:scale-110 duration-300">
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif" fontWeight="800" fontSize="30" letterSpacing="-0.03em" fill="#0056A0">Starkey</text>
      </svg>
    )
  },
  {
    name: 'Phonak',
    svg: (
      <svg viewBox="0 0 160 40" className="h-10 md:h-12 w-auto transition-transform hover:scale-110 duration-300">
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif" fontWeight="700" fontSize="32" letterSpacing="-0.02em" fill="#008678">PHONAK</text>
      </svg>
    )
  },
  {
    name: 'Widex',
    svg: (
      <svg viewBox="0 0 140 40" className="h-10 md:h-12 w-auto transition-transform hover:scale-110 duration-300">
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif" fontWeight="900" fontSize="28" letterSpacing="0.05em" fill="#003B5C">WIDEX</text>
      </svg>
    )
  },
  {
    name: 'Interton',
    svg: (
      <svg viewBox="0 0 150 40" className="h-10 md:h-12 w-auto transition-transform hover:scale-110 duration-300">
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif" fontWeight="600" fontSize="30" letterSpacing="0.02em" fill="#0069B4">interton</text>
      </svg>
    )
  },
  {
    name: 'Bernafon',
    svg: (
      <svg viewBox="0 0 160 40" className="h-10 md:h-12 w-auto transition-transform hover:scale-110 duration-300">
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif" fontWeight="700" fontSize="28" letterSpacing="-0.01em" fill="#E3000F">bernafon</text>
      </svg>
    )
  },
  {
    name: 'GN ReSound',
    svg: (
      <svg viewBox="0 0 180 40" className="h-10 md:h-12 w-auto transition-transform hover:scale-110 duration-300">
        <text x="50%" y="60%" textAnchor="middle" dominantBaseline="middle" fontFamily="sans-serif" fontWeight="800" fontSize="30" letterSpacing="-0.02em" fill="#AA1835">ReSound</text>
      </svg>
    )
  }
];

export const BrandCollabSection = () => {
  return (
    <section className="py-16 hw-bg-paper overflow-hidden border-b border-[var(--color-border)]">
      <div className="hw-container mb-12">
        <h2 className="hw-caption text-center">In collaboration with world-leading brands</h2>
      </div>
      
      <div className="relative w-full flex overflow-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[oklch(0.979_0.009_82)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[oklch(0.979_0.009_82)] to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-[scroll-marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
          {[...brandLogos, ...brandLogos, ...brandLogos].map((brand, i) => (
            <div key={i} className="flex items-center justify-center w-[250px] shrink-0 opacity-80 hover:opacity-100 transition-all duration-300 font-display">
              {brand.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
