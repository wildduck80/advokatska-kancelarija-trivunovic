import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { useLang } from '../context/useLang';

const Map = lazy(() => import('./Map'));

const MapPlaceholder = () => {
  const { t } = useLang();

  return (
    <section className="map-section">
      <div className="container">
        <div className="section-header">
          <h2>{t.map.heading}</h2>
          <p className="section-subtitle">{t.map.subheading}</p>
        </div>
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-placeholder-content">
              <span className="map-placeholder-icon">🗺️</span>
              <p>{t.map.loading || 'Loading map...'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LazyMap = () => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Load when within 200px of viewport
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      {shouldLoad ? (
        <Suspense fallback={<MapPlaceholder />}>
          <Map />
        </Suspense>
      ) : (
        <MapPlaceholder />
      )}
    </div>
  );
};

export default LazyMap;
