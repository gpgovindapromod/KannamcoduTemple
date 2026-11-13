import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { EVENTS_DATA } from '../data/templeData';
import PageHero from '../components/common/PageHero';
import SectionHeader from '../components/common/SectionHeader';
import EventDetailCard from '../components/cards/EventDetailCard';

export default function Events() {
  const [activeTab, setActiveTab] = useState('yearly');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      if (
        hash === 'monthly' ||
        ['shasti', 'ayilyam', 'ganapathi-homam', 'uthram', 'chathayam-monthly'].includes(hash)
      ) {
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
      <div className="events-tabs-container">
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

      <div className="container py-3">
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
              <EventDetailCard
                key={evt.id}
                id={evt.id}
                title={evt.title}
                eng={evt.eng}
                badge={evt.badge}
                images={evt.images}
                paragraphs={evt.paragraphs}
                layout="horizontal"
              />
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
                <div key={m.id} className="col-md-6 col-lg-4">
                  <EventDetailCard
                    id={m.id}
                    title={m.title}
                    eng={m.eng}
                    images={m.images}
                    desc={m.desc}
                    layout="vertical"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
