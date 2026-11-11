import React from 'react';
import { useLang } from '../context/useLang';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import LazyMap from '../components/LazyMap';
import {
  buildAttorneysSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildServicesSchema,
} from '../seo/schemas';

const HERO_IMAGE = '/images/kancelarija.webp';

const HomePage = ({ path, alternates }) => {
  const { t } = useLang();
  const schemas = [
    buildOrganizationSchema(t),
    buildLocalBusinessSchema(t),
    buildServicesSchema(t),
    buildAttorneysSchema(t),
    buildFaqSchema(t),
  ];

  return (
    <>
      <SEO
        title={t.seo.title}
        description={t.seo.description}
        path={path}
        alternates={alternates}
        schemas={schemas}
        preloadImage={HERO_IMAGE}
      />
      <Hero />
      <About />
      <Services />
      <Team />
      <Blog />
      <FAQ />
      <ContactForm />
      <LazyMap />
    </>
  );
};

export default HomePage;
