import React from 'react';
import './App.css';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import LazyMap from './components/LazyMap';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <SEO />
      <div className="app-container">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Team />
        <Blog />
        <FAQ />
        <ContactForm />
        <LazyMap />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
