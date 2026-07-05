import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  keywords?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

const SEO = ({ 
  title = 'Hearwell Speech & Hearing Centre', 
  description = 'Expert diagnostics, hearing aid fitting, and speech therapy delivered with clinical precision and human patience in Perumbavoor and Perinjanam, Kerala.', 
  url = 'https://hearwell.co.in',
  keywords = 'speech therapy Kerala, audiologist Perumbavoor, hearing aids Perinjanam, speech and hearing centre, best hearing clinic Kerala',
  schema
}: SEOProps) => {
  
  // JSON-LD Structured Data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "name": "Hearwell Speech & Hearing Centre",
    "image": "https://hearwell.co.in/images/aboutBanner.webp",
    "@id": "https://hearwell.co.in",
    "url": "https://hearwell.co.in",
    "telephone": "+919633626656",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Opp. Govt. Boys Higher Secondary School Ground, Hariharraiyyer Road",
        "addressLocality": "Perumbavoor",
        "addressRegion": "Kerala",
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
    }
  };

  return (
    <Helmet>
      <title>{title === 'Hearwell Speech & Hearing Centre' ? title : `${title} | Hearwell`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://hearwell.co.in/images/aboutBanner.webp" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={url} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
