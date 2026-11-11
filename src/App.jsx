import React from 'react';
import './styles/index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import { LanguageProvider } from './context/LanguageContext';
import { otherLanguage } from './context/language';
import { translations } from './data/content';
import { PAGE, alternatePaths, routePath } from './routing/routes';

const renderPage = (route, path, alternates) => {
  if (route.page === PAGE.HOME) return <HomePage path={path} alternates={alternates} />;
  if (route.page === PAGE.ARTICLE) {
    return <ArticlePage articleIndex={route.articleIndex} path={path} alternates={alternates} />;
  }
  return <NotFoundPage />;
};

/** @param {{ route: import('./routing/routes').Route }} props */
function App({ route }) {
  const path = routePath(route);
  const alternates = alternatePaths(route);

  return (
    <LanguageProvider lang={route.lang} switchLanguageHref={alternates[otherLanguage(route.lang)]}>
      <div className="app-container">
        <a href="#main-content" className="skip-link">
          {translations[route.lang].nav.skipToContent}
        </a>
        <Navbar />
        <main id="main-content">{renderPage(route, path, alternates)}</main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
