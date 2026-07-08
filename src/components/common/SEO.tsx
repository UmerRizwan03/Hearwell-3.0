import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  keywords?: string;
  image?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

const DEFAULT_IMAGE = 'https://hearwell.co.in/images/og-image.png';
const SITE_NAME = 'Hearwell Speech & Hearing Centre';

const SEO = ({ 
  title = 'Hearwell Speech & Hearing Centre | Hearing Aids & Speech Therapy in Kerala', 
  description = 'Hearwell Speech & Hearing Centre offers hearing tests, digital hearing aids, speech therapy, occupational therapy, AVT and pediatric hearing care across Kerala. Two clinics in Perumbavoor & Perinjanam.',
  url = 'https://hearwell.co.in',
  keywords = 'hearing aids Kerala, speech therapy Kerala, audiologist Kerala, digital hearing aids, hearing test, occupational therapy, AVT, auditory verbal therapy, Hearwell, Perumbavoor, Perinjanam, pediatric audiology, hearing centre Kerala, IEP support, school readiness',
  image = DEFAULT_IMAGE,
  schema
}: SEOProps) => {
  
  // Ensure title includes site name where useful
  const resolvedTitle = title.includes('Hearwell') ? title : `${title} | ${SITE_NAME}`;

  // JSON-LD: Organization + LocalBusiness + Audiologist
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "Audiologist", "LocalBusiness"],
    "name": "Hearwell Speech and Hearing Centre",
    "alternateName": "Hearwell Speech & Hearing Centre",
    "image": DEFAULT_IMAGE,
    "logo": "https://hearwell.co.in/logo.webp",
    "@id": "https://hearwell.co.in",
    "url": "https://hearwell.co.in",
    "telephone": "+919633626656",
    "email": "hearwellcentre@gmail.com",
    "priceRange": "$$",
    "foundingDate": "2009",
    "currenciesAccepted": "INR",
    "description": "Hearwell Speech and Hearing Centre provides digital hearing aids, hearing tests, speech therapy, occupational therapy, AVT and pediatric hearing care across Kerala. Established in 2009.",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Opp. Govt. Boys Higher Secondary School Ground, Hariharraiyyer Road",
        "addressLocality": "Perumbavoor",
        "addressRegion": "Kerala",
        "postalCode": "683542",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Near Vadakke Bus Stop",
        "addressLocality": "Perinjanam",
        "addressRegion": "Kerala",
        "postalCode": "680686",
        "addressCountry": "IN"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 10.1167,
      "longitude": 76.4833
    },
    "areaServed": [
      { "@type": "State", "name": "Kerala" },
      { "@type": "City", "name": "Perumbavoor" },
      { "@type": "City", "name": "Perinjanam" },
      { "@type": "City", "name": "Ernakulam" }
    ],
    "openingHours": "Mo-Sa 09:00-17:30",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "17:30"
    },
    "hasMap": "https://maps.app.goo.gl/UgERPxNm1CUf4GSJA",
    "sameAs": [
      "https://www.facebook.com/hearwellcentre",
      "https://www.instagram.com/hearwellcentre",
      "https://maps.app.goo.gl/UgERPxNm1CUf4GSJA"
    ]
  };

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content="Hearwell Speech and Hearing Centre — Audiology clinic in Kerala" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hearwell" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content="Hearwell Speech and Hearing Centre — Audiology clinic in Kerala" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Primary JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Page-specific JSON-LD (passed via prop) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
