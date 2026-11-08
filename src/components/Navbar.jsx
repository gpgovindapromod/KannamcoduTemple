import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const [poojaDropdownOpen, setPoojaDropdownOpen] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  const eventsDropdownRef = useRef(null);
  const poojaDropdownRef = useRef(null);
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  // Close menus on route change
  useEffect(() => {
    setEventsDropdownOpen(false);
    setPoojaDropdownOpen(false);
    setNavExpanded(false);
  }, [location.pathname, location.hash]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (eventsDropdownRef.current && !eventsDropdownRef.current.contains(event.target)) {
        setEventsDropdownOpen(false);
      }
      if (poojaDropdownRef.current && !poojaDropdownRef.current.contains(event.target)) {
        setPoojaDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg temple-navbar sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="vel-logo">🔱</div>
          <div className="brand-text">
            <span className="temple-name-main">Vettikkavala Kannamcodu</span>
            <span className="temple-name-sub">ശ്രീ സുബ്രഹ്മണ്യ സ്വാമി ക്ഷേത്രം</span>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setNavExpanded(!navExpanded)}
          aria-label="Toggle navigation"
          aria-expanded={navExpanded}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${navExpanded ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-1">
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/')}`}
                to="/"
                onClick={() => setNavExpanded(false)}
              >
                <i className="fas fa-home me-2 d-lg-none text-warning"></i>Home
              </Link>
            </li>

            {/* Controlled Events Dropdown */}
            <li
              className={`nav-item dropdown ${eventsDropdownOpen ? 'show' : ''}`}
              ref={eventsDropdownRef}
            >
              <a
                className={`nav-link dropdown-toggle ${isActive('/events')}`}
                href="#events"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  setEventsDropdownOpen(!eventsDropdownOpen);
                  setPoojaDropdownOpen(false);
                }}
                aria-expanded={eventsDropdownOpen}
              >
                <i className="fas fa-calendar-star me-2 d-lg-none text-warning"></i>Events
              </a>
              <ul className={`dropdown-menu ${eventsDropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/events#yearly"
                    onClick={() => {
                      setEventsDropdownOpen(false);
                      setNavExpanded(false);
                    }}
                  >
                    <i className="fas fa-star me-2 text-warning"></i>Yearly Events / വാർഷിക
                    ഉത്സവങ്ങൾ
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/events#monthly"
                    onClick={() => {
                      setEventsDropdownOpen(false);
                      setNavExpanded(false);
                    }}
                  >
                    <i className="fas fa-calendar-days me-2 text-warning"></i>Monthly Events / മാസ
                    പൂജകൾ
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/committee')}`}
                to="/committee"
                onClick={() => setNavExpanded(false)}
              >
                <i className="fas fa-users me-2 d-lg-none text-warning"></i>Committee Members
              </Link>
            </li>

            {/* Controlled Pooja & Vazhipadu Dropdown */}
            <li
              className={`nav-item dropdown ${poojaDropdownOpen ? 'show' : ''}`}
              ref={poojaDropdownRef}
            >
              <a
                className={`nav-link dropdown-toggle ${isActive('/pooja')}`}
                href="#pooja"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  setPoojaDropdownOpen(!poojaDropdownOpen);
                  setEventsDropdownOpen(false);
                }}
                aria-expanded={poojaDropdownOpen}
              >
                <i className="fas fa-om me-2 d-lg-none text-warning"></i>Pooja & Vazhipadu
              </a>
              <ul className={`dropdown-menu ${poojaDropdownOpen ? 'show' : ''}`}>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/pooja#pooja-chart"
                    onClick={() => {
                      setPoojaDropdownOpen(false);
                      setNavExpanded(false);
                    }}
                  >
                    <i className="fas fa-clock me-2 text-warning"></i>Pooja Chart / നിത്യ പൂജാ ക്രമം
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/pooja#vazhipadu"
                    onClick={() => {
                      setPoojaDropdownOpen(false);
                      setNavExpanded(false);
                    }}
                  >
                    <i className="fas fa-hand-holding-heart me-2 text-warning"></i>Vazhipadu List /
                    വഴിപാട് വിവരങ്ങൾ
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/gallery')}`}
                to="/gallery"
                onClick={() => setNavExpanded(false)}
              >
                <i className="fas fa-images me-2 d-lg-none text-warning"></i>Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${isActive('/contact')}`}
                to="/contact"
                onClick={() => setNavExpanded(false)}
              >
                <i className="fas fa-envelope me-2 d-lg-none text-warning"></i>Contact Us
              </Link>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a className="btn-pooja-nav btn w-100 text-center" href="tel:+919074439789">
                <i className="fas fa-phone-alt me-2"></i>9074439789
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
