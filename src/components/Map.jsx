import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLang } from '../context/useLang';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import L from 'leaflet';

// Fix for default marker icon in React-Leaflet (self-hosted icons)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

const Map = () => {
  const { t } = useLang();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: containerRef, isVisible: containerVisible } = useScrollAnimation();

  // Coordinates for Rade Kondića 116a, 21410 Futog, Serbia
  // Futog center coordinates on Rade Kondića street
  const position = [45.242287, 19.718783]; // [latitude, longitude]

  return (
    <section className="map-section">
      <div className="container">
        <div
          ref={headerRef}
          className={`section-header animate-fade-in ${headerVisible ? 'visible' : ''}`}
        >
          <h2>{t.map.heading}</h2>
          <p className="section-subtitle">{t.map.subheading}</p>
        </div>

        <div
          ref={containerRef}
          className={`map-container animate-fade-in ${containerVisible ? 'visible' : ''}`}
        >
          <div className="map-info">
            <div className="map-info-card">
              <div className="map-info-icon">📍</div>
              <div className="map-info-content">
                <h3>{t.contact.info.addressLabel}</h3>
                <p>{t.company.address}</p>
                <p className="map-info-city">{t.company.city}</p>
              </div>
            </div>

            <div className="map-info-card">
              <div className="map-info-icon">📞</div>
              <div className="map-info-content">
                <h3>{t.contact.info.phoneLabel}</h3>
                <p>
                  <a href={`tel:${t.company.phone.replace(/\s/g, '')}`}>{t.company.phone}</a>
                </p>
              </div>
            </div>

            <div className="map-info-card">
              <div className="map-info-icon">🕐</div>
              <div className="map-info-content">
                <h3>{t.contact.info.hoursLabel}</h3>
                <p>{t.company.workingHours}</p>
              </div>
            </div>

            <div className="map-directions">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="map-directions-btn"
                title="Navigate with Google Maps"
              >
                🗺️ Google Maps
              </a>
              <a
                href={`https://waze.com/ul?ll=${position[0]},${position[1]}&navigate=yes`}
                target="_blank"
                rel="noopener noreferrer"
                className="map-directions-btn secondary"
                title="Navigate with Waze"
              >
                🚗 Waze
              </a>
            </div>
          </div>

          <div className="map-embed">
            <MapContainer
              center={position}
              zoom={17}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%', borderRadius: '8px' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <strong>{t.company.name}</strong>
                  <br />
                  {t.company.address}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
