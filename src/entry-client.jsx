import React, { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HelmetProvider } from '@dr.pogodin/react-helmet';

// Self-hosted fonts (GDPR compliant, no external requests)
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';

import './index.css';
import App from './App.jsx';
import { resolveRoute } from './routing/routes';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <HelmetProvider>
      <App route={resolveRoute(window.location.pathname)} />
    </HelmetProvider>
  </StrictMode>
);

// Production pages are prerendered (scripts/prerender.js); the dev server serves an empty root.
if (container.firstElementChild) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
