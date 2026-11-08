import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import DarshanBar from '../components/DarshanBar';
import SectionHeader from '../components/SectionHeader';
import { TEMPLE_INFO } from '../utils/constants';
import { buildWhatsAppLink, buildTelLink } from '../utils/helpers';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="ഞങ്ങളെ ബന്ധപ്പെടുക"
        bgImage="/images/temple/temple-front.jpg"
      />

      <DarshanBar />

      <section className="contact-section py-5">
        <div className="container">
          <SectionHeader
            label="Get in Touch"
            title="Contact Us"
            titleMal="ക്ഷേത്ര വിവരങ്ങളും വിലാസവും"
          />

          <div className="row g-5">
            <div className="col-lg-5">
              <div
                className="map-wrapper mb-4 rounded-4 overflow-hidden shadow-sm border"
                style={{ borderColor: 'var(--border-gold)' }}
              >
                <iframe
                  src={TEMPLE_INFO.location.mapsEmbedUrl}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Temple Location"
                  style={{ border: 0, width: '100%', height: '320px' }}
                ></iframe>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-info-text">
                  <strong>Address / വിലാസം</strong>
                  {TEMPLE_INFO.location.address}
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-info-text">
                  <strong>Phone / ഫോൺ</strong>
                  <a
                    href={buildTelLink(TEMPLE_INFO.phones[0].raw)}
                    style={{ color: 'var(--medium-brown)', textDecoration: 'none' }}
                  >
                    {TEMPLE_INFO.phones[0].display}
                  </a>
                  <br />
                  <a
                    href={buildTelLink(TEMPLE_INFO.phones[1].raw)}
                    style={{ color: 'var(--medium-brown)', textDecoration: 'none' }}
                  >
                    {TEMPLE_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-info-text">
                  <strong>Email</strong>
                  <a
                    href={`mailto:${TEMPLE_INFO.email}`}
                    style={{ color: 'var(--medium-brown)', textDecoration: 'none' }}
                  >
                    {TEMPLE_INFO.email}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-info-text">
                  <strong>Darshan Timings / ദർശന സമയം</strong>
                  <span style={{ fontFamily: 'var(--font-malayalam)' }}>
                    {TEMPLE_INFO.darshan.morning.start} – {TEMPLE_INFO.darshan.morning.end}{' '}
                    &nbsp;|&nbsp; {TEMPLE_INFO.darshan.evening.start} –{' '}
                    {TEMPLE_INFO.darshan.evening.end}
                  </span>
                </div>
              </div>

              <div className="contact-info-item">
                <div
                  className="contact-icon-wrap"
                  style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}
                >
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="contact-info-text">
                  <strong>WhatsApp Helpline</strong>
                  <a
                    href={buildWhatsAppLink(
                      'Namaskaram, I am contacting you from the temple website.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--medium-brown)', textDecoration: 'none' }}
                  >
                    {TEMPLE_INFO.whatsapp.display}
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div
                className="contact-form-card shadow-sm p-4 p-md-5 rounded-4 bg-white border"
                style={{ borderColor: 'var(--border-gold)' }}
              >
                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--dark-brown)',
                    marginBottom: '1.5rem',
                    fontSize: '1.15rem',
                  }}
                >
                  <i className="fas fa-paper-plane text-warning me-2"></i>Send a Message / സന്ദേശം
                  അയക്കുക
                </h4>

                {submitted ? (
                  <div className="alert alert-success p-4 rounded-3 text-center">
                    <h5>
                      <i className="fas fa-check-circle me-2"></i>നന്ദി! സന്ദേശം ലഭിച്ചു.
                    </h5>
                    <p className="mb-0">
                      Your message has been sent successfully. We will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Your Name / പേര്</label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Subject / വിഷയം</label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Message subject"
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label">Message / സന്ദേശം</label>
                        <textarea
                          className="form-control"
                          rows="6"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Write your message here..."
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn-temple btn w-100 py-3">
                          <i className="fas fa-paper-plane me-2"></i>Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
