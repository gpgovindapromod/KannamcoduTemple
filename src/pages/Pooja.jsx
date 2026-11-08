import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { VAZHIPADU_DATA, VAZHIPADU_CATEGORIES, POOJA_TIMETABLE } from '../data/templeData';
import PageHero from '../components/PageHero';
import DarshanBar from '../components/DarshanBar';
import SectionHeader from '../components/SectionHeader';
import VazhipaduCalculator from '../components/VazhipaduCalculator';
import SpotlightCard from '../components/reactbits/SpotlightCard';

export default function Pooja() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 150);
      }
    }
  }, [location.hash, location.pathname]);

  // Filter offerings by category and search query
  const getDisplayedOfferings = () => {
    let list = [];
    if (selectedCategory === 'all') {
      list = VAZHIPADU_DATA;
    } else if (VAZHIPADU_CATEGORIES[selectedCategory]) {
      list = VAZHIPADU_CATEGORIES[selectedCategory].items;
    }

    if (search.trim()) {
      return list.filter(item => item.toLowerCase().includes(search.toLowerCase().trim()));
    }
    return list;
  };

  const displayedList = getDisplayedOfferings();

  return (
    <>
      <PageHero
        title="Pooja Schedule & Vazhipadu List"
        subtitle="നിത്യ പൂജാ ക്രമവും വഴിപാട് വിവരങ്ങളും"
        bgImage="/images/temple/temple-evening.jpg"
      />

      <DarshanBar />

      <section className="py-5" style={{ background: 'var(--cream)' }}>
        <div className="container">

          {/* Section 1: Daily Pooja Chart (Structured Table) */}
          <div id="pooja-chart" className="mb-5">
            <SectionHeader
              label="Timetable"
              title="Daily Pooja Chart"
              titleMal="നിത്യ പൂജാ ക്രമം"
            />

            <div className="row g-4 mb-5">
              <div className="col-lg-6">
                <h5 className="mb-3 text-uppercase" style={{ fontFamily: 'var(--font-heading)', color: 'var(--saffron)', letterSpacing: '1px', fontSize: '0.9rem' }}>
                  <i className="fas fa-sun me-2 text-warning"></i>Morning Poojas / രാവിലെ പൂജകൾ
                </h5>
                <div className="pooja-table shadow-sm">
                  <table>
                    <thead>
                      <tr><th>സമയം</th><th>പൂജ</th><th>വിവരണം</th></tr>
                    </thead>
                    <tbody>
                      {POOJA_TIMETABLE.morning.map((p, idx) => (
                        <tr key={idx}>
                          <td className="time fw-bold text-danger">{p.time}</td>
                          <td><strong className="text-dark">{p.name}</strong></td>
                          <td>{p.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="col-lg-6">
                <h5 className="mb-3 text-uppercase" style={{ fontFamily: 'var(--font-heading)', color: 'var(--saffron)', letterSpacing: '1px', fontSize: '0.9rem' }}>
                  <i className="fas fa-moon me-2 text-warning"></i>Evening Poojas / വൈകുന്നേര പൂജകൾ
                </h5>
                <div className="pooja-table shadow-sm">
                  <table>
                    <thead>
                      <tr><th>സമയം</th><th>പൂജ</th><th>വിവരണം</th></tr>
                    </thead>
                    <tbody>
                      {POOJA_TIMETABLE.evening.map((p, idx) => (
                        <tr key={idx}>
                          <td className="time fw-bold text-danger">{p.time}</td>
                          <td><strong className="text-dark">{p.name}</strong></td>
                          <td>{p.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Offering Planner & Categorized 51 Vazhipadu List */}
          <div id="vazhipadu">
            <VazhipaduCalculator />

            <div className="mt-5 mb-4">
              <SectionHeader
                label="Devotional Offerings"
                title="Vazhipadu Directory"
                titleMal="വഴിപാട് വിവരങ്ങൾ (51 പൂജകൾ)"
                subtitle="ഭക്തർക്ക് ക്ഷേത്രത്തിൽ സമർപ്പിക്കാവുന്ന പ്രധാന വഴിപാടുകൾ വിഭാഗം തിരിച്ച്"
              />
            </div>

            {/* Categorized Filter Pills */}
            <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
              <button
                type="button"
                className={`btn btn-sm rounded-pill px-3 fw-bold ${selectedCategory === 'all' ? 'btn-warning text-dark' : 'btn-outline-dark'}`}
                onClick={() => setSelectedCategory('all')}
              >
                എല്ലാം (All 51)
              </button>
              {Object.entries(VAZHIPADU_CATEGORIES).map(([key, cat]) => (
                <button
                  key={key}
                  type="button"
                  className={`btn btn-sm rounded-pill px-3 fw-bold ${selectedCategory === key ? 'btn-warning text-dark' : 'btn-outline-dark'}`}
                  onClick={() => setSelectedCategory(key)}
                  style={{ fontFamily: 'var(--font-malayalam)', fontSize: '0.82rem' }}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            <div className="mb-4">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-box"
                placeholder="🔍 വഴിപാട് തിരയുക (Search by name)..."
              />
            </div>

            <div className="row g-3">
              {displayedList.map((item, index) => (
                <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                  <SpotlightCard className="pooja-item-card h-100" spotlightColor="rgba(212, 160, 23, 0.15)">
                    <div className="pooja-num">{index + 1}</div>
                    <div className="pooja-name">{item}</div>
                  </SpotlightCard>
                </div>
              ))}
            </div>

            <div className="mt-5 p-4 text-center rounded-4 shadow-sm" style={{ background: 'white', border: '2px dashed var(--gold)' }}>
              <h5 style={{ fontFamily: 'var(--font-heading)', color: 'var(--dark-brown)' }}>
                <i className="fas fa-receipt me-2 text-warning"></i>വഴിപാടുകൾ ബുക്ക് ചെയ്യുന്നതിന്
              </h5>
              <p style={{ fontFamily: 'var(--font-malayalam)', color: 'var(--medium-brown)', lineHeight: '1.9', marginBottom: '1.2rem' }}>
                പ്രത്യേക പൂജകൾ, ചോറൂൺ, വിവാഹം, തുലാഭാരം, ഉണ്ണിയപ്പം വഴിപാട് തുടങ്ങിയവ മുൻകൂട്ടി ബുക്ക് ചെയ്യുന്നതിനായി ക്ഷേത്ര ഓഫീസുമായി ബന്ധപ്പെടുക.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <a href="tel:+919074439789" className="btn-temple btn btn-lg text-decoration-none">
                  <i className="fas fa-phone-alt me-2"></i>+91 90744 39789
                </a>
                <a href="tel:+919567691538" className="btn-temple btn btn-lg text-decoration-none">
                  <i className="fas fa-phone-alt me-2"></i>+91 95676 91538
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
