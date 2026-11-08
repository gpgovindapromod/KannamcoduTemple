import React, { useState } from 'react';
import PageHero from '../components/PageHero';
import DarshanBar from '../components/DarshanBar';
import SectionHeader from '../components/SectionHeader';

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
              <div className="map-wrapper mb-4 rounded-4 overflow-hidden shadow-sm border" style={{ borderColor: 'var(--border-gold)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4161.458169666238!2d76.82735201077834!3d8.989288189571667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06752c721752b1%3A0xdcbe9c24c09fa645!2sKannamkodu%20Sri%20Subramanyan%20Temple!5e1!3m2!1sen!2sin!4v1734189667363!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Temple Location"
                  style={{ border: 0, width: '100%', height: '320px' }}
                ></iframe>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap"><i className="fas fa-map-marker-alt"></i></div>
                <div className="contact-info-text">
                  <strong>Address / വിലാസം</strong>
                  Kannamcodu Sree Subrahmanya Swami Temple,<br />
                  Kannamcodu, Kottarakara, Kollam District, Kerala – 691538
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap"><i className="fas fa-phone-alt"></i></div>
                <div className="contact-info-text">
                  <strong>Phone / ഫോൺ</strong>
                  <a href="tel:+919074439789" style={{ color: 'var(--medium-brown)', textDecoration: 'none' }}>+91 90744 39789</a><br />
                  <a href="tel:+919567691538" style={{ color: 'var(--medium-brown)', textDecoration: 'none' }}>+91 95676 91538</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap"><i className="fas fa-envelope"></i></div>
                <div className="contact-info-text">
                  <strong>Email</strong>
                  <a href="mailto:kannamkoduthaipooyam@gmail.com" style={{ color: 'var(--medium-brown)', textDecoration: 'none' }}>
                    kannamkoduthaipooyam@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap"><i className="fas fa-clock"></i></div>
                <div className="contact-info-text">
                  <strong>Darshan Timings / ദർശന സമയം</strong>
                  <span style={{ fontFamily: 'var(--font-malayalam)' }}>5:30 AM – 10:00 AM &nbsp;|&nbsp; 5:00 PM – 7:30 PM</span>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrap" style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}>
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="contact-info-text">
                  <strong>WhatsApp Helpline</strong>
                  <a href="https://wa.me/919567691538" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--medium-brown)', textDecoration: 'none' }}>+91 95676 91538</a>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="contact-form-card shadow-sm p-4 p-md-5 rounded-4 bg-white border" style={{ borderColor: 'var(--border-gold)' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--dark-brown)', marginBottom: '1.5rem', fontSize: '1.15rem' }}>
                  <i className="fas fa-paper-plane text-warning me-2"></i>Send a Message / സന്ദേശം അയക്കുക
                </h4>

                {submitted ? (
                  <div className="alert alert-success p-4 rounded-3 text-center">
                    <h5><i className="fas fa-check-circle me-2"></i>നന്ദി! സന്ദേശം ലഭിച്ചു.</h5>
                    <p className="mb-0">Your message has been sent successfully. We will get back to you shortly.</p>
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
