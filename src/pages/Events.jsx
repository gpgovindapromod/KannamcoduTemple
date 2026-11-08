import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EVENTS_DATA } from '../data/templeData';
import PageHero from '../components/PageHero';
import DarshanBar from '../components/DarshanBar';
import SectionHeader from '../components/SectionHeader';

export default function Events() {
  const [activeTab, setActiveTab] = useState('yearly');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      if (hash === 'monthly' || ['shasti', 'ayilyam', 'ganapathi-homam', 'uthram', 'chathayam-monthly'].includes(hash)) {
        setActiveTab('monthly');
      } else {
        setActiveTab('yearly');
      }
      
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
      }
    }
  }, [location.hash, location.pathname]);

  return (
    <>
      <PageHero
        title="Temple Events & Festivals"
        subtitle="കണ്ണങ്കോട് ക്ഷേത്രത്തിലെ ആട്ടവിശേഷങ്ങളും ഉത്സവങ്ങളും"
        bgImage="/images/temple/temple-hero.jpg"
      />

      {/* Prominent, clean tab switch */}
      <div className="events-tabs-container py-3">
        <div className="container">
          <div className="events-tabs-pill-box">
            <button
              type="button"
              className={`event-tab-btn ${activeTab === 'yearly' ? 'active' : ''}`}
              onClick={() => setActiveTab('yearly')}
            >
              <i className="fas fa-calendar-star me-2"></i>
              വാർഷിക ഉത്സവങ്ങൾ (Yearly Events)
            </button>
            <button
              type="button"
              className={`event-tab-btn ${activeTab === 'monthly' ? 'active' : ''}`}
              onClick={() => setActiveTab('monthly')}
            >
              <i className="fas fa-moon me-2"></i>
              മാസ പൂജകൾ (Monthly Events)
            </button>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* ONLY Yearly Events visible when 'yearly' tab is selected */}
        {activeTab === 'yearly' && (
          <div id="yearly-events-wrapper">
            <SectionHeader
              label="Annual Celebrations"
              title="Yearly Events"
              titleMal="വാർഷിക വിശേഷങ്ങൾ"
              subtitle="മഹാ തൈപ്പൂയം ഉൾപ്പെടെയുള്ള ഭക്തിസാന്ദ്രമായ ആട്ടവിശേഷങ്ങളുടെ വിശദ വിവരങ്ങൾ"
            />

            {EVENTS_DATA.yearly.map((evt) => (
              <div key={evt.id} className="event-detail-card mb-4" id={evt.id}>
                <div className="row g-0">
                  <div className="col-lg-5">
                    <img
                      src={evt.images[0]}
                      className="event-card-img h-100"
                      alt={evt.title}
                      style={{
                        minHeight: '270px',
                        objectFit: evt.id.includes('chathayam') || evt.id.includes('samadhi') ? 'contain' : 'cover',
                        background: '#4a120b'
                      }}
                    />
                  </div>
                  <div className="col-lg-7">
                    <div className="card-body p-4">
                      <div className="d-flex justify-content-between align-items-center mb-1 flex-wrap gap-2">
                        <h3 className="mb-0" style={{ fontFamily: 'var(--font-malayalam)', color: 'var(--dark-brown)', fontWeight: 700 }}>{evt.title}</h3>
                        <span className="badge bg-danger rounded-pill px-3 py-2">{evt.badge}</span>
                      </div>
                      <div className="eng mb-3" style={{ color: 'var(--saffron-dark)', fontSize: '0.88rem', letterSpacing: '0.8px', fontWeight: 600 }}>{evt.eng}</div>
                      {evt.paragraphs.map((p, idx) => (
                        <p key={idx} style={{ fontFamily: 'var(--font-malayalam)', lineHeight: '1.9', textAlign: 'justify', color: '#443', fontSize: '0.98rem' }}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ONLY Monthly Events visible when 'monthly' tab is selected */}
        {activeTab === 'monthly' && (
          <div id="monthly-events-wrapper">
            <SectionHeader
              label="Every Month"
              title="Monthly Events"
              titleMal="മാസ പൂജകൾ"
              subtitle="എല്ലാ മലയാള മാസവും ചിട്ടയായി നടക്കുന്ന വിശേഷാൽ പൂജകളും വഴിപാടുകളും"
            />

            <div className="row g-4">
              {EVENTS_DATA.monthly.map((m) => (
                <div key={m.id} className="col-md-6 col-lg-4" id={m.id}>
                  <div className="event-detail-card h-100">
                    <img
                      src={m.images[0]}
                      className="event-card-img"
                      alt={m.title}
                      style={{
                        height: '240px',
                        objectFit: m.id.includes('chathayam') ? 'contain' : 'cover',
                        background: '#4a120b',
                        objectPosition: m.id === 'uthram' ? 'center 30%' : 'center'
                      }}
                    />
                    <div className="card-body p-4">
                      <h3 style={{ fontFamily: 'var(--font-malayalam)', color: 'var(--dark-brown)', fontSize: '1.3rem', fontWeight: 700 }}>{m.title}</h3>
                      <div className="eng mb-2" style={{ color: 'var(--saffron-dark)', fontSize: '0.84rem', letterSpacing: '0.8px', fontWeight: 600 }}>{m.eng}</div>
                      <p style={{ fontFamily: 'var(--font-malayalam)', lineHeight: '1.85', textAlign: 'justify', color: '#443', fontSize: '0.94rem' }}>{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
