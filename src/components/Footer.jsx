import React from 'react';
import { Link } from 'react-router-dom';
import { TEMPLE_INFO } from '../utils/constants';
import { buildWhatsAppLink, buildTelLink } from '../utils/helpers';

export default function Footer() {
  const defaultWhatsAppText = 'Namaskaram, I would like to know more about the temple.';

  return (
    <>
      <footer className="temple-footer">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div style={{ fontSize: '1.8rem' }}>🔱</div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--gold-light)',
                      fontSize: '0.85rem',
                      letterSpacing: '1px',
                    }}
                  >
                    Vettikkavala Kannamcodu
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-malayalam)',
                      color: 'rgba(255,220,150,0.7)',
                      fontSize: '0.8rem',
                    }}
                  >
                    {TEMPLE_INFO.nameMal}
                  </div>
                </div>
              </div>
              <p className="footer-desc">
                കണ്ണങ്കോട് ശ്രീ സുബ്രഹ്മണ്യ സ്വാമി ക്ഷേത്രം കൊല്ലം കൊട്ടാരക്കര താലൂക്കിലെ പവിത്രമായ
                പുണ്യസങ്കേതമാണ്.
              </p>
              <p
                className="footer-desc mt-2"
                style={{ fontFamily: 'var(--font-malayalam)', fontSize: '0.85rem' }}
              >
                ഭക്തിയുടെയും ആദ്ധ്യാത്മികതയുടെയും ഈ ദേവാലയം സർവ്വ ജനങ്ങൾക്കും തുറന്നിരിക്കുന്നു.
              </p>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="footer-col-title">Quick Links</div>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/events">Events</Link>
                </li>
                <li>
                  <Link to="/committee">Committee</Link>
                </li>
                <li>
                  <Link to="/pooja">Pooja Chart</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="footer-col-title">Contact</div>
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  Kannamcodu, Kottarakara,
                  <br />
                  Kollam, Kerala – 691538
                </span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone-alt"></i>
                <span className="d-flex flex-column gap-2">
                  <a
                    href={buildTelLink(TEMPLE_INFO.phones[0].raw)}
                    className="text-light text-decoration-none d-inline-block py-1"
                  >
                    {TEMPLE_INFO.phones[0].display}
                  </a>
                  <a
                    href={buildTelLink(TEMPLE_INFO.phones[1].raw)}
                    className="text-light text-decoration-none d-inline-block py-1"
                  >
                    {TEMPLE_INFO.phones[1].display}
                  </a>
                </span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                <span>
                  <a
                    href={`mailto:${TEMPLE_INFO.email}`}
                    className="text-light text-decoration-none"
                  >
                    {TEMPLE_INFO.email}
                  </a>
                </span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-clock"></i>
                <span style={{ fontFamily: 'var(--font-malayalam)', fontSize: '0.85rem' }}>
                  {TEMPLE_INFO.darshan.morning.start} – {TEMPLE_INFO.darshan.morning.end}
                  <br />
                  {TEMPLE_INFO.darshan.evening.start} – {TEMPLE_INFO.darshan.evening.end}
                </span>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="footer-col-title">Follow Us</div>
              <p className="footer-desc mb-3">
                ക്ഷേത്രത്തിലെ വിശേഷങ്ങളും തൈപ്പൂയം ഉൾപ്പെടെയുള്ള ഉത്സവ അറിയിപ്പുകളും
                ലഭിക്കുന്നതിനായി സോഷ്യൽ മീഡിയയിൽ ബന്ധപ്പെടുക.
              </p>
              <div className="social-icons">
                <a
                  href={TEMPLE_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href={TEMPLE_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href={TEMPLE_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href={buildWhatsAppLink(defaultWhatsAppText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container text-center">
            <span>{TEMPLE_INFO.mantra} &nbsp;|&nbsp;</span>
            &copy; {new Date().getFullYear()} {TEMPLE_INFO.name}. All rights reserved. &nbsp;|&nbsp;{' '}
            <Link to="/privacy-policy" className="text-warning text-decoration-underline">
              Privacy & Legal
            </Link>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={buildWhatsAppLink(defaultWhatsAppText)}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}
