import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FestivalCountdown from './components/FestivalCountdown';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import Events from './pages/Events';
import Committee from './pages/Committee';
import Pooja from './pages/Pooja';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const [showSplash, setShowSplash] = useState(() => {
    // Show splash screen only once per browser session
    return !sessionStorage.getItem('temple_splash_seen');
  });

  const handleSplashFinish = () => {
    sessionStorage.setItem('temple_splash_seen', 'true');
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onFinish={handleSplashFinish} />}
      <div className="app-container">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/pooja" element={<Pooja />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        {/* Floating Countdown Pill positioned directly above WhatsApp button */}
        <FestivalCountdown />
      </div>
    </>
  );
}
