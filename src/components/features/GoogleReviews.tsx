import { Star, Quote, ExternalLink } from 'lucide-react';
import { SectionReveal, FadeIn } from '../common/Motion';

interface Review {
  name: string;
  text: string;
  category: 'speech' | 'hearing' | 'general';
}

const reviews: Review[] = [
  { name: 'CM Shahid A', text: 'I am happy with the progress in my daughter\'s speaking skills. There is noticeable improvement in her confidence, pronunciation, and clarity. She is now more comfortable expressing herself.', category: 'speech' },
  { name: 'Vimitha Kiran', text: 'My 6-year-old son had mild stuttering. Within 2 months of regular therapy, we saw great improvement. He completely overcame the problem.', category: 'speech' },
  { name: 'Neethu Paul', text: 'My daughter had speech articulation difficulties and wasn\'t familiar with Malayalam. In just five months, I\'ve seen remarkable improvement.', category: 'speech' },
  { name: 'Sanooja Salim', text: 'My son has shown tremendous improvement in speech and expressive language.', category: 'speech' },
  { name: 'Sreethu Krishnadas', text: 'My son had speech issues but has made great improvement here. We are grateful for the dedication of the therapist.', category: 'speech' },
  { name: 'Ganga Arun', text: 'Speech therapy helped my child very well. Good service and overall great experience. I am very happy.', category: 'speech' },
  { name: 'Sathya Narayanan', text: 'Visited for my son\'s hearing aid fitting. He is very happy now. Friendly and helpful staff. Peaceful atmosphere.', category: 'hearing' },
  { name: 'Jalaja Venugopal', text: 'I bought hearing aids from Hearwell and feel very happy and confident. Excellent service and dedicated audiologist.', category: 'hearing' },
  { name: 'Ab E', text: 'Good place for treatment of voice disorders like puberphonia. Excellent service and treatment.', category: 'general' },
  { name: 'Sheba Jackson', text: 'Prompt service and very patient staff. My father received good guidance. Overall, really good service.', category: 'general' },
];

const categoryLabels: Record<Review['category'], string> = {
  speech: 'Speech Therapy',
  hearing: 'Hearing Aids',
  general: 'Overall Experience',
};

const categoryColors: Record<Review['category'], string> = {
  speech: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  hearing: 'bg-sky-50 text-sky-700 border-sky-200',
  general: 'bg-amber-50 text-amber-700 border-amber-200',
};

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="w-[min(420px,calc(100vw-3rem))] shrink-0 bg-white relative overflow-hidden rounded-lg p-6 sm:p-9 shadow-[0_18px_50px_-42px_rgba(18,56,52,0.55)] flex flex-col">
    <Quote size={30} className="text-primary/15 mb-6 -ml-1" />
    <p className="text-gray-700 leading-relaxed flex-grow mb-8 text-[17px]">
      "{review.text}"
    </p>
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
          <div className="flex gap-0.5 mt-0.5">
            {[...Array(5)].map((_, j) => (
              <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
            ))}
          </div>
        </div>
      </div>
      <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md border ${categoryColors[review.category]}`}>
        {categoryLabels[review.category]}
      </span>
    </div>
  </div>
);

const GoogleReviews = () => {
  // Duplicate reviews for seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <SectionReveal className="py-24 lg:py-36 bg-gray-50/60 border-y border-gray-100">
      <div className="container mx-auto px-4 md:px-6">

        {/* Header */}
        <FadeIn className="mb-20 max-w-4xl">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white border border-gray-200 text-sm font-semibold text-gray-600 mb-7 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google Reviews
          </div>
          <h2 className="section-heading mb-5">
            Families remember how care made them feel.
          </h2>
          <p className="quiet-copy max-w-2xl">
            Real stories from real patients. See why families across Kerala trust Hearwell for their hearing and speech care needs.
          </p>

          {/* Aggregate Rating */}
          <div className="mt-10 inline-flex flex-wrap items-center gap-3 bg-white px-5 sm:px-6 py-3 rounded-lg shadow-sm border border-gray-100">
            <span className="text-3xl font-bold text-gray-800">5.0</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="w-full sm:w-auto text-sm text-gray-400 sm:border-l border-gray-200 sm:pl-3 sm:ml-1">Based on Google Reviews</span>
          </div>
        </FadeIn>
      </div>

      {/* Infinite Scroll Marquee — full width, breaks out of container */}
      <div className="relative w-full overflow-hidden group mb-14">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-50/90 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-50/90 to-transparent" />

        {/* Scrolling track */}
        <div
          className="flex gap-8 py-4 animate-[scroll-marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
        >
          {duplicatedReviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* Google CTA */}
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn className="flex justify-center">
          <a
            href="https://www.google.com/maps/place/Hearwell+Speech+and+Hearing+Centre/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg transition-all duration-300"
          >
            <ExternalLink size={16} />
            Review us on Google
          </a>
        </FadeIn>
      </div>
    </SectionReveal>
  );
};

export default GoogleReviews;
