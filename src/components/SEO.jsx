import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useLang } from '../context/LanguageContext';

const SEO = () => {
  const { lang, t } = useLang();
  const siteUrl = 'https://trifunovic-law.com'; // Replace with actual domain

  // Structured Data: Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#organization`,
    "name": t.company.name,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "image": `${siteUrl}/og-image.jpg`,
    "description": lang === 'sr'
      ? "Advokatska kancelarija Trivunovic pruža vrhunske pravne usluge u Futog-u.Specijalizovani smo za građansko, krivično, porodično i radno pravo."
      : "Trivunovic Law Firm provides top-quality legal services in Futog. We specialize in civil, criminal, family, and labor law.",
    "telephone": t.company.phone,
    "email": t.company.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rade Kondića 116a",
      "addressLocality": "Futog",
      "postalCode": "21410",
      "addressCountry": "RS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.242287,
      "longitude": 19.718783
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "16:00"
    },
    "priceRange": "$$",
    "areaServed": {
      "@type": "City",
      "name": "Futog"
    },
    "sameAs": [
      // Add social media links when available
    ]
  };

  // Structured Data: Local Business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${siteUrl}/#localbusiness`,
    "name": t.company.name,
    "image": `${siteUrl}/og-image.jpg`,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rade Kondića 116a",
      "addressLocality": "Futog",
      "addressRegion": "Vojvodina",
      "postalCode": "21410",
      "addressCountry": "RS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.242287,
      "longitude": 19.718783
    },
    "url": siteUrl,
    "telephone": t.company.phone,
    "email": t.company.email,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "24"
    }
  };

  // Structured Data: Services
  const servicesSchema = t.services.list.map((service, index) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}/#service-${index}`,
    "serviceType": service.title,
    "provider": {
      "@id": `${siteUrl}/#organization`
    },
    "areaServed": {
      "@type": "City",
      "name": "Futog"
    },
    "description": service.description
  }));

  // Meta tags
  const title = lang === 'sr'
    ? "Advokatska Kancelarija Trivunovic - Advokat Futog | Pravne Usluge"
    : "Trivunovic Law Firm - Lawyer Futog | Legal Services";

  const description = lang === 'sr'
    ? "Advokatska kancelarija Trivunovic u Futog-u pruža profesionalne pravne usluge. Iskusni advokati za građansko, krivično, porodično i radno pravo. Zakažite besplatnu konsultaciju."
    : "Trivunovic Law Firm in Futog provides professional legal services. Experienced lawyers for civil, criminal, family and labor law. Schedule a free consultation.";

  const keywords = lang === 'sr'
    ? "advokat futog, advokatska kancelarija futog, advokat novi sad, pravnik futog, pravne usluge futog, građansko pravo, krivično pravo, porodično pravo, radno pravo, advokat srbija"
    : "lawyer futog, law firm futog, lawyer novi sad, attorney futog, legal services futog, civil law, criminal law, family law, labor law, lawyer serbia";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={lang === 'sr' ? 'sr-Latn-RS' : 'en'} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={t.company.name} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
      <meta property="og:locale" content={lang === 'sr' ? 'sr_RS' : 'en_US'} />
      <meta property="og:site_name" content={t.company.name} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${siteUrl}/og-image.jpg`} />

      {/* Hreflang for multilingual */}
      <link rel="alternate" hrefLang="sr" href={`${siteUrl}?lang=sr`} />
      <link rel="alternate" hrefLang="en" href={`${siteUrl}?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={siteUrl} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content={lang === 'sr' ? 'Serbian' : 'English'} />
      <meta name="revisit-after" content="7 days" />

      {/* Geographic Meta Tags for Local SEO */}
      <meta name="geo.region" content="RS-VO" />
      <meta name="geo.placename" content="Futog" />
      <meta name="geo.position" content="45.242287;19.718783" />
      <meta name="ICBM" content="45.242287, 19.718783" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(servicesSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
