import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarshanBar from '../components/DarshanBar';
import SectionHeader from '../components/SectionHeader';
import GalleryGrid from '../components/GalleryGrid';
import GoldenParticles from '../components/GoldenParticles';
import InteractiveDevotion from '../components/InteractiveDevotion';
import ShinyText from '../components/reactbits/ShinyText';
import BlurText from '../components/reactbits/BlurText';
import SpotlightCard from '../components/reactbits/SpotlightCard';
import TiltedCard from '../components/reactbits/TiltedCard';
import AnimatedContent from '../components/reactbits/AnimatedContent';

export default function Home() {
  const carouselImages = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
  ];

  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="hero-section" id="hero">
        <GoldenParticles />
        <div className="hero-content">
          <div className="hero-vel-icon">🔱</div>
          
          <div className="hero-subtitle-top">
            <ShinyText text="ॐ ശരവണ ഭവ ॐ" speed={3.5} />
          </div>

          <h1 className="hero-title">
            <span className="d-block">
              <BlurText text="Vettikkavala Kannamcodu" delay={45} animateBy="words" direction="top" />
            </span>
            <span className="hero-title-mal d-block mt-2">
              <BlurText text="ശ്രീ സുബ്രഹ്മണ്യ സ്വാമി ക്ഷേത്രം" delay={50} animateBy="words" direction="bottom" />
            </span>
          </h1>

          <p className="hero-desc">
            കൊല്ലം കൊട്ടാരക്കര താലൂക്കിലെ ചരിത്രപ്രസിദ്ധമായ പുണ്യ സങ്കേതം · ശ്രീനാരായണ ഗുരുദേവ ശിഷ്യൻ കൊച്ചുനാരായണസ്വാമികളാൽ വേൽ പ്രതിഷ്ഠിതമായ പുണ്യഭൂമി
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap my-4">
            <a href="tel:+919074439789" className="hero-phone-btn">
              <i className="fas fa-phone-alt"></i>+91 90744 39789
            </a>
            <a href="tel:+919567691538" className="hero-phone-btn">
              <i className="fas fa-phone-alt"></i>+91 95676 91538
            </a>
          </div>

          <div className="hero-actions">
            <a href="#about" className="btn-hero-primary">
              <i className="fas fa-place-of-worship me-2"></i>ക്ഷേത്ര ചരിത്രം
            </a>
            <Link to="/pooja" className="btn-hero-secondary">
              <i className="fas fa-list-check me-2"></i>വഴിപാട് വിവരങ്ങൾ
            </Link>
            <Link to="/events" className="btn-hero-secondary">
              <i className="fas fa-calendar-alt me-2"></i>ഉത്സവങ്ങൾ
            </Link>
          </div>
        </div>

        <div className="hero-scroll-indicator">
          <a href="#about" aria-label="Scroll down"><i className="fas fa-chevron-down"></i></a>
        </div>
      </section>

      {/* ── REUSABLE DARSHAN TIME BANNER ── */}
      <DarshanBar />

      {/* ── INTERACTIVE DEVOTIONAL HUB ── */}
      <div className="container">
        <AnimatedContent distance={35} duration={0.7}>
          <InteractiveDevotion />
        </AnimatedContent>
      </div>

      {/* ── ABOUT SECTION ── */}
      <section className="py-5" id="about">
        <div className="container">
          <SectionHeader
            label="Heritage & Sanctity"
            title="About Our Temple"
            titleMal="ക്ഷേത്ര ഐതിഹ്യവും ചരിത്രവും"
            subtitle="Kannamcodu Sree Subrahmanya Swami Temple is a holistic spiritual place located in the heart of the Kannamcodu region of Kottarakara Thaluk at Kollam, Kerala, India."
          />

          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <AnimatedContent direction="horizontal" distance={30} duration={0.65}>
                <SpotlightCard
                  className="p-4 p-md-5 rounded-4 shadow-sm bg-white border"
                  style={{ borderColor: 'var(--border-gold)' }}
                  spotlightColor="rgba(212, 160, 23, 0.12)"
                >
                  <p style={{ fontFamily: 'var(--font-malayalam)', textAlign: 'justify', lineHeight: '2', color: 'var(--text-dark)', fontSize: '1rem', marginBottom: '1.2rem' }}>
                    ശ്രീനാരായണ ഗുരുദേവന്റെ പാദ മുദ്രയാൽ ധന്യമായ, ജനവാസം തീരെ കുറഞ്ഞ, സാധാരണക്കാരും കർഷകരും മാത്രം വസിച്ചിരുന്ന കണ്ണങ്കോട് എന്ന കൊച്ചു ഗ്രാമത്തിൽ <strong>125 വർഷങ്ങൾക്കു മുമ്പ്</strong> ഗുരുദേവന്റെ ശിഷ്യനായ കൊച്ചുനാരായണസ്വാമി എത്തിച്ചേരുകയും ഇപ്പോൾ ക്ഷേത്രം സ്ഥിതി ചെയ്യുന്ന സ്ഥലം ക്ഷേത്രനിർമാണത്തിന് അനുയോജ്യമാണെന്നും അവിടെ ക്ഷേത്രം നിർമ്മിക്കണമെന്ന ഗുരുദേവ കൽപ്പന അറിയിക്കുകയും ചെയ്തു.
                  </p>
                  <p style={{ fontFamily: 'var(--font-malayalam)', textAlign: 'justify', lineHeight: '2', color: 'var(--text-dark)', fontSize: '1rem', marginBottom: '1.2rem' }}>
                    സ്ഥലത്തിന്റെ ഉടമസ്ഥത ഉണ്ടായിരുന്ന <strong>കിഴക്കേക്കര കുടുംബം</strong> തൃപ്പാദ കൽപ്പന ശിരസാ വഹിക്കുകയും അവിടെ ക്ഷേത്രം നിർമ്മിക്കുകയും ചെയ്തു. കൊച്ചുനാരായണസ്വാമി ക്ഷേത്രത്തിൽ സുബ്രഹ്മണ്യസ്വാമിയുടെ പ്രതീകമായ വേൽ പ്രതിഷ്ഠിക്കുകയും അതിന് പിന്നിലായി ഗുരുദേവന്റെ ചില്ലിട്ട ചിത്രവും കന്നിമൂലയിൽ മഹാഗണപതി ഭഗവാന്റെ വിഗ്രഹവും പ്രതിഷ്ഠിച്ചു.
                  </p>
                  <p style={{ fontFamily: 'var(--font-malayalam)', textAlign: 'justify', lineHeight: '2', color: 'var(--text-dark)', fontSize: '1rem', marginBottom: 0 }}>
                    ഗുരുമന്ദിരം എന്ന സങ്കൽപ്പത്തിലായിരുന്നു ആളുകൾ എത്തിയിരുന്നത്. അതിനു കാരണം ആദ്യ ദർശനത്തിൽ തന്നെ ഗുരുദേവന്റെ ചിത്രമായിരുന്നു കാണാൻ കഴിഞ്ഞിരുന്നത്. കാലപ്പഴക്കത്തിൽ ഗുരുദേവ ചിത്രത്തിനും വേലിനും ജീർണത സംഭവിച്ചപ്പോൾ ദേവപ്രശ്നം അനിവാര്യമായി വരികയും ക്ഷേത്ര പുനർനിർമ്മാണം പൂർത്തിയാക്കുകയും ചെയ്തു.
                  </p>
                </SpotlightCard>
              </AnimatedContent>
            </div>

            <div className="col-lg-6">
              <AnimatedContent direction="horizontal" reverse={true} distance={30} duration={0.65}>
                <TiltedCard maxTilt={5}>
                  <div id="aboutCarouselReact" className="carousel slide carousel-fade shadow-lg rounded-4 overflow-hidden border" style={{ borderColor: 'var(--border-gold)' }} data-bs-ride="carousel" data-bs-interval="3500">
                    <div className="carousel-indicators">
                      {carouselImages.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          data-bs-target="#aboutCarouselReact"
                          data-bs-slide-to={idx}
                          className={idx === 0 ? 'active' : ''}
                          aria-label={`Slide ${idx + 1}`}
                        ></button>
                      ))}
                    </div>
                    <div className="carousel-inner">
                      {carouselImages.map((src, idx) => (
                        <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                          <img
                            src={src}
                            className="d-block w-100 home-carousel-img"
                            alt={`Temple View ${idx + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#aboutCarouselReact" data-bs-slide="prev" aria-label="Previous image">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#aboutCarouselReact" data-bs-slide="next" aria-label="Next image">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                  </div>
                </TiltedCard>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEMPLE FESTIVALS SECTION (COMPACT DESKTOP VIEWPORT) ── */}
      <section
        className="home-festivals-section position-relative"
        style={{
          background: "linear-gradient(135deg, rgba(30, 10, 4, 0.95) 0%, rgba(95, 18, 6, 0.92) 50%, rgba(30, 10, 4, 0.96) 100%), url('/images/temple/temple-evening.jpg') center/cover fixed",
          borderTop: '2px solid var(--gold)',
          borderBottom: '2px solid var(--gold)'
        }}
      >
        <div className="container position-relative py-4" style={{ zIndex: 2 }}>
          <SectionHeader
            label="Festivals & Celebrations"
            title="Temple Festivals"
            titleMal="പ്രധാന ഉത്സവങ്ങൾ"
            subtitle="ഭക്തിസാന്ദ്രമായ ആട്ടവിശേഷങ്ങളും ഉത്സവങ്ങളും"
            light={true}
          />

          <div className="row g-3 g-lg-4">
            <div className="col-md-6 col-lg-4">
              <AnimatedContent delay={0.08} distance={20} className="h-100">
                <SpotlightCard className="h-100 rounded-4" spotlightColor="rgba(255, 183, 3, 0.18)">
                  <Link className="event-card h-100 text-decoration-none" to="/events#thaipooyam">
                    <div className="event-icon"><i className="fas fa-fire text-warning"></i></div>
                    <span className="event-name-mal">മഹാ തൈപൂയം</span>
                    <span className="event-name-eng">Maha Thaipooyam (10 Days Festival)</span>
                    <p className="event-desc">
                      മകരമാസത്തിലെ പൂയം നക്ഷത്രത്തിൽ 10 ദിവസത്തെ കൊടിയേറ്റ ഉത്സവമായി ആഘോഷിക്കുന്നു. പള്ളിവേട്ട, ആറാട്ട്, ചന്ദ്രപ്പൊങ്കാലയും മഞ്ഞൾ നീരാട്ടും സമ്പൂർണ്ണ അന്നദാനവും നടക്കുന്നു.
                    </p>
                    <span className="event-badge">മകരമാസം · പൂയം നക്ഷത്രം →</span>
                  </Link>
                </SpotlightCard>
              </AnimatedContent>
            </div>

            <div className="col-md-6 col-lg-4">
              <AnimatedContent delay={0.16} distance={20} className="h-100">
                <SpotlightCard className="h-100 rounded-4" spotlightColor="rgba(255, 183, 3, 0.18)">
                  <Link className="event-card h-100 text-decoration-none" to="/events#skanda-shashti">
                    <div className="event-icon"><i className="fas fa-star-of-life text-warning"></i></div>
                    <span className="event-name-mal">സ്കന്ദ ഷഷ്ഠി</span>
                    <span className="event-name-eng">Skanda Shashti Mahotsavam</span>
                    <p className="event-desc">
                      ഭഗവാന്റെ യുദ്ധവിജയത്തിനായി പാർവ്വതീദേവി അനുഷ്ഠിച്ച 6 ദിവസത്തെ വ്രതാനുഷ്ഠാന സ്മരണയിൽ ഭക്തിസാന്ദ്രമായി ആചരിക്കുന്നു.
                    </p>
                    <span className="event-badge">തുലാമാസം · 6 ദിവസത്തെ വ്രതം →</span>
                  </Link>
                </SpotlightCard>
              </AnimatedContent>
            </div>

            <div className="col-md-6 col-lg-4">
              <AnimatedContent delay={0.24} distance={20} className="h-100">
                <SpotlightCard className="h-100 rounded-4" spotlightColor="rgba(255, 183, 3, 0.18)">
                  <Link className="event-card h-100 text-decoration-none" to="/events#shasti">
                    <div className="event-icon"><i className="fas fa-moon text-warning"></i></div>
                    <span className="event-name-mal">മാസ ഷഷ്ഠി വ്രതം</span>
                    <span className="event-name-eng">Monthly Shashti Pooja</span>
                    <p className="event-desc">
                      വ്രതങ്ങളിൽ ഏറ്റവും ശ്രേഷ്ഠമായ ഷഷ്ഠിവ്രതം ഉദ്ദിഷ്ടകാര്യ സിദ്ധിക്കായി മാസംതോറും ഭക്തർ അനുഷ്ഠിക്കുന്നു. ഉച്ചയ്ക്ക് ഒരു നേരം വെള്ളനിവേദ്യം മാത്രം ഭുജിച്ച് ഭക്തിപൂർവ്വം സുബ്രഹ്മണ്യ ഭജനം നടത്തുന്നു.
                    </p>
                    <span className="event-badge">എല്ലാ മലയാള മാസവും →</span>
                  </Link>
                </SpotlightCard>
              </AnimatedContent>
            </div>
          </div>

          <div className="text-center mt-4">
            <Link to="/events" className="btn-hero-primary d-inline-block text-decoration-none">
              <i className="fas fa-calendar-days me-2"></i>View All Events / മുഴുവൻ ഉത്സവങ്ങളും കാണുക
            </Link>
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="py-5" id="video">
        <div className="container">
          <SectionHeader
            label="Witness the Divine"
            title="Temple Rituals & Festivals"
            titleMal="ക്ഷേത്ര ഉത്സവ ദൃശ്യങ്ങൾ"
            subtitle="കണ്ണങ്കോട് ശ്രീ സുബ്രഹ്മണ്യസ്വാമി ക്ഷേത്രത്തിലെ ഭക്തിസാന്ദ്രമായ ഉത്സവ ദൃശ്യങ്ങൾ"
          />

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <AnimatedContent scale={0.97} distance={20}>
                <div className="video-card bg-dark p-2 rounded-4 shadow-lg overflow-hidden border" style={{ borderColor: 'var(--border-gold)' }}>
                  <video
                    className="w-100 rounded-3"
                    controls
                    preload="metadata"
                    style={{ maxHeight: '520px', background: '#000' }}
                  >
                    <source src="/video/video.mp4" type="video/mp4" />
                    <track kind="captions" srcLang="ml" label="Malayalam" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </AnimatedContent>
            </div>
          </div>
        </div>
      </section>

      {/* ── REUSABLE GALLERY PREVIEW SECTION ── */}
      <section className="py-5" id="gallery" style={{ background: '#FFFBF2' }}>
        <div className="container">
          <SectionHeader
            label="Visual Glimpses"
            title="Photo Gallery"
            titleMal="ഫോട്ടോ ഗ്യാലറി"
            subtitle="വേൽ കാവടി, മഞ്ഞൾ നീരാട്ട്, അഗ്നി കാവടി തുടങ്ങിയ പുണ്യ ദൃശ്യങ്ങൾ"
          />

          <AnimatedContent distance={30}>
            <GalleryGrid limit={9} showFilters={true} />
          </AnimatedContent>

          <div className="text-center mt-5">
            <Link to="/gallery" className="btn-temple btn btn-lg text-decoration-none">
              <i className="fas fa-images me-2"></i>View Full Gallery / കൂടുതൽ ചിത്രങ്ങൾ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
