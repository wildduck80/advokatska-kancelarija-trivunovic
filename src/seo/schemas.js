import { toHtmlLang } from '../context/language';
import { LOGO_URL, OFFICE_COORDINATES, OG_IMAGE_URL, POSTAL_ADDRESS, SITE_URL } from '../data/site';

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const GEO = { '@type': 'GeoCoordinates', ...OFFICE_COORDINATES };
const ADDRESS = { '@type': 'PostalAddress', ...POSTAL_ADDRESS };
const OPENING_HOURS = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  opens: '08:00',
  closes: '16:00',
};
const LOCAL_AREAS = [
  { '@type': 'City', name: 'Futog' },
  { '@type': 'City', name: 'Novi Sad' },
  { '@type': 'AdministrativeArea', name: 'Vojvodina' },
];
const ORGANIZATION_REF = { '@id': ORGANIZATION_ID };

const withContext = (schema) => ({ '@context': 'https://schema.org', ...schema });

export const buildOrganizationSchema = (t) =>
  withContext({
    '@type': 'LegalService',
    '@id': ORGANIZATION_ID,
    name: t.company.name,
    url: `${SITE_URL}/`,
    logo: LOGO_URL,
    image: OG_IMAGE_URL,
    description: t.seo.organizationDescription,
    telephone: t.company.phone,
    email: t.company.email,
    address: ADDRESS,
    geo: GEO,
    openingHoursSpecification: OPENING_HOURS,
    priceRange: '$$',
    areaServed: [...LOCAL_AREAS, { '@type': 'Country', name: 'Serbia' }],
  });

export const buildLocalBusinessSchema = (t) =>
  withContext({
    '@type': 'Attorney',
    '@id': `${SITE_URL}/#localbusiness`,
    name: t.company.name,
    image: OG_IMAGE_URL,
    priceRange: '$$',
    address: ADDRESS,
    geo: GEO,
    url: `${SITE_URL}/`,
    telephone: t.company.phone,
    email: t.company.email,
    openingHoursSpecification: [OPENING_HOURS],
  });

export const buildServicesSchema = (t) =>
  t.services.list.map((service, index) =>
    withContext({
      '@type': 'Service',
      '@id': `${SITE_URL}/#service-${index}`,
      serviceType: service.title,
      provider: ORGANIZATION_REF,
      areaServed: LOCAL_AREAS,
      description: service.description,
    })
  );

export const buildAttorneysSchema = (t) =>
  t.team.members.map((member, index) =>
    withContext({
      '@type': 'Person',
      '@id': `${SITE_URL}/#attorney-${index}`,
      name: member.name,
      jobTitle: member.role,
      description: member.bio,
      email: member.email,
      image: member.img,
      worksFor: ORGANIZATION_REF,
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Attorney',
        occupationLocation: { '@type': 'Country', name: 'Serbia' },
      },
    })
  );

export const buildFaqSchema = (t) =>
  withContext({
    '@type': 'FAQPage',
    mainEntity: t.faqs.list.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  });

/**
 * @param {{ article: object, t: object, lang: string, url: string }} params
 */
export const buildArticleSchema = ({ article, t, lang, url }) =>
  withContext({
    '@type': 'Article',
    '@id': `${url}#article`,
    headline: article.title,
    description: article.excerpt,
    image: article.img,
    datePublished: article.isoDate,
    dateModified: article.isoDate,
    articleSection: article.category,
    inLanguage: toHtmlLang(lang),
    author: { ...ORGANIZATION_REF, '@type': 'Organization', name: t.company.name },
    publisher: {
      ...ORGANIZATION_REF,
      '@type': 'Organization',
      name: t.company.name,
      logo: { '@type': 'ImageObject', url: LOGO_URL },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  });

/**
 * Serialises a schema for an inline <script type="application/ld+json">.
 * Escaping "<" keeps content such as "</script>" from closing the tag early.
 * @param {object} schema
 * @returns {string}
 */
export const toJsonLd = (schema) => JSON.stringify(schema).replace(/</g, '\\u003c');
