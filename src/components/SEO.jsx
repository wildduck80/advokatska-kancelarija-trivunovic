import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useLang } from '../context/useLang';
import { DEFAULT_LANGUAGE, toHtmlLang } from '../context/language';
import { absoluteUrl } from '../routing/routes';
import { GEO_REGION, OFFICE_COORDINATES, OG_IMAGE_URL } from '../data/site';
import { toJsonLd } from '../seo/schemas';

const GEO_POSITION = `${OFFICE_COORDINATES.latitude};${OFFICE_COORDINATES.longitude}`;
const OG_LOCALE = { sr: 'sr_RS', en: 'en_US' };

/**
 * Head tags for one page. Pages without `path` (the 404 page) are marked noindex
 * and get no canonical or hreflang links.
 * @param {{
 *   title: string,
 *   description: string,
 *   path?: string | null,
 *   alternates?: Record<string, string>,
 *   ogType?: string,
 *   image?: string,
 *   schemas?: object[],
 *   preloadImage?: string,
 * }} props
 */
const SEO = ({
  title,
  description,
  path = null,
  alternates = {},
  ogType = 'website',
  image = OG_IMAGE_URL,
  schemas = [],
  preloadImage,
}) => {
  const { lang, t } = useLang();
  const isIndexable = Boolean(path);
  const url = isIndexable ? absoluteUrl(path) : null;

  return (
    <Helmet>
      <html lang={toHtmlLang(lang)} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={isIndexable ? 'index, follow' : 'noindex, follow'} />
      <meta name="author" content={t.company.name} />

      {isIndexable && <link rel="canonical" href={url} />}
      {isIndexable &&
        Object.entries(alternates).map(([altLang, altPath]) => (
          <link key={altLang} rel="alternate" hrefLang={altLang} href={absoluteUrl(altPath)} />
        ))}
      {isIndexable && alternates[DEFAULT_LANGUAGE] && (
        <link
          rel="alternate"
          hrefLang="x-default"
          href={absoluteUrl(alternates[DEFAULT_LANGUAGE])}
        />
      )}
      {preloadImage && <link rel="preload" as="image" href={preloadImage} fetchPriority="high" />}

      <meta property="og:type" content={ogType} />
      {isIndexable && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={OG_LOCALE[lang]} />
      <meta property="og:site_name" content={t.company.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="geo.region" content={GEO_REGION} />
      <meta name="geo.placename" content="Futog" />
      <meta name="geo.position" content={GEO_POSITION} />
      <meta name="ICBM" content={GEO_POSITION.replace(';', ', ')} />

      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {toJsonLd(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
