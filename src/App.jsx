import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FestivalCountdown from './components/FestivalCountdown';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import { safeStorage } from './utils/helpers';

const Events = lazy(() => import('./pages/Events'));
const Committee = lazy(() => import('./pages/Committee'));
const Pooja = lazy(() => import('./pages/Pooja'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function PageFallback() {
  return (
    <div
      className="page-loading-fallback d-flex justify-content-center align-items-center"
      role="status"
      aria-label="Loading page"
    >
      <div className="spinner-border text-warning">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.location.pathname !== '/') return false;

    // Do not show splash screen if client prefers reduced motion or is a headless bot
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    if (
      navigator.userAgent &&
      /Lighthouse|HeadlessChrome|bot|crawl|spider/i.test(navigator.userAgent)
    ) {
      return false;
    }

    return !safeStorage.get('temple_splash_seen', null, true);
  });

  const handleSplashFinish = () => {
    safeStorage.set('temple_splash_seen', 'true', true);
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

      <div className="app-container">
        <ScrollToTop />

        <Navbar />

        <main className="app-main">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/pooja" element={<Pooja />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

        <FestivalCountdown />
      </div>
    </>
  );
}
