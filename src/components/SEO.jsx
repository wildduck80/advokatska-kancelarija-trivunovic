import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useLang } from '../context/useLang';
import { buildLanguageUrl, toHtmlLang } from '../context/language';
import {
  GEO_REGION,
  LOGO_URL,
  OFFICE_COORDINATES,
  OG_IMAGE_URL,
  POSTAL_ADDRESS,
  SITE_URL,
} from '../data/site';

const HOME_URL = `${SITE_URL}/`;
const GEO = { '@type': 'GeoCoordinates', ...OFFICE_COORDINATES };
const ADDRESS = { '@type': 'PostalAddress', ...POSTAL_ADDRESS };
const GEO_POSITION = `${OFFICE_COORDINATES.latitude};${OFFICE_COORDINATES.longitude}`;

const SEO = () => {
  const { lang, t } = useLang();
  const siteUrl = SITE_URL;
  const pageUrl = buildLanguageUrl(HOME_URL, lang);

  // Structured Data: Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${siteUrl}/#organization`,
    name: t.company.name,
    url: siteUrl,
    logo: LOGO_URL,
    image: OG_IMAGE_URL,
    description:
      lang === 'sr'
        ? 'Advokatska kancelarija Trivunovic pruža vrhunske pravne usluge u Futog-u.Specijalizovani smo za građansko, krivično, porodično i radno pravo.'
        : 'Trivunovic Law Firm provides top-quality legal services in Futog. We specialize in civil, criminal, family, and labor law.',
    telephone: t.company.phone,
    email: t.company.email,
    address: ADDRESS,
    geo: GEO,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
    priceRange: '$$',
    areaServed: [
      { '@type': 'City', name: 'Futog' },
      { '@type': 'City', name: 'Novi Sad' },
      { '@type': 'AdministrativeArea', name: 'Vojvodina' },
      { '@type': 'Country', name: 'Serbia' },
    ],
    sameAs: [
      // Add social media links when available
    ],
  };

  // Structured Data: Local Business
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    '@id': `${siteUrl}/#localbusiness`,
    name: t.company.name,
    image: OG_IMAGE_URL,
    priceRange: '$$',
    address: ADDRESS,
    geo: GEO,
    url: siteUrl,
    telephone: t.company.phone,
    email: t.company.email,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
  };

  // Structured Data: Services
  const servicesSchema = t.services.list.map((service, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}/#service-${index}`,
    serviceType: service.title,
    provider: {
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: [
      { '@type': 'City', name: 'Futog' },
      { '@type': 'City', name: 'Novi Sad' },
      { '@type': 'AdministrativeArea', name: 'Vojvodina' },
    ],
    description: service.description,
  }));

  // Structured Data: Attorneys (Team Members)
  const attorneysSchema = t.team.members.map((member, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#attorney-${index}`,
    name: member.name,
    jobTitle: member.role,
    description: member.bio,
    email: member.email,
    image: member.img,
    worksFor: {
      '@id': `${siteUrl}/#organization`,
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Attorney',
      occupationLocation: {
        '@type': 'Country',
        name: 'Serbia',
      },
    },
  }));

  // Structured Data: FAQPage (for rich snippets)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faqs.list.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  // Structured Data: Blog Articles
  const articlesSchema = t.blog.articles.map((article, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${siteUrl}/#article-${index}`,
    headline: article.title,
    description: article.excerpt,
    image: article.img,
    datePublished: article.isoDate,
    dateModified: article.isoDate,
    articleSection: article.category,
    inLanguage: lang === 'sr' ? 'sr-Latn-RS' : 'en',
    author: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: t.company.name,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: t.company.name,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#blog`,
    },
  }));

  // Meta tags
  const title =
    lang === 'sr'
      ? 'Advokatska Kancelarija Trivunovic - Advokat Futog | Pravne Usluge'
      : 'Trivunovic Law Firm - Lawyer Futog | Legal Services';

  const description =
    lang === 'sr'
      ? 'Advokatska kancelarija Trivunovic u Futog-u pruža profesionalne pravne usluge. Iskusni advokati za građansko, krivično, porodično i radno pravo. Zakažite besplatnu konsultaciju.'
      : 'Trivunovic Law Firm in Futog provides professional legal services. Experienced lawyers for civil, criminal, family and labor law. Schedule a free consultation.';

  const keywords =
    lang === 'sr'
      ? 'advokat futog, advokatska kancelarija futog, advokat novi sad, pravnik futog, pravne usluge futog, građansko pravo, krivično pravo, porodično pravo, radno pravo, advokat srbija'
      : 'lawyer futog, law firm futog, lawyer novi sad, attorney futog, legal services futog, civil law, criminal law, family law, labor law, lawyer serbia';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={toHtmlLang(lang)} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={t.company.name} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta property="og:locale" content={lang === 'sr' ? 'sr_RS' : 'en_US'} />
      <meta property="og:site_name" content={t.company.name} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={OG_IMAGE_URL} />

      {/* Hreflang for multilingual */}
      <link rel="alternate" hrefLang="sr" href={buildLanguageUrl(HOME_URL, 'sr')} />
      <link rel="alternate" hrefLang="en" href={buildLanguageUrl(HOME_URL, 'en')} />
      <link rel="alternate" hrefLang="x-default" href={HOME_URL} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content={lang === 'sr' ? 'Serbian' : 'English'} />

      {/* Geographic Meta Tags for Local SEO */}
      <meta name="geo.region" content={GEO_REGION} />
      <meta name="geo.placename" content="Futog" />
      <meta name="geo.position" content={GEO_POSITION} />
      <meta name="ICBM" content={GEO_POSITION.replace(';', ', ')} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(attorneysSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(articlesSchema)}</script>
    </Helmet>
  );
};

export default SEO;
