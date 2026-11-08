import React from 'react';
import { COMMITTEE_DATA } from '../data/templeData';
import PageHero from '../components/PageHero';
import DarshanBar from '../components/DarshanBar';
import SectionHeader from '../components/SectionHeader';
import SpotlightCard from '../components/reactbits/SpotlightCard';

export default function Committee() {
  const { spiritualLeader, executives, members } = COMMITTEE_DATA;

  return (
    <>
      <PageHero
        title="Committee Members"
        subtitle="ക്ഷേത്ര ഭരണ സമിതി അംഗങ്ങളും തന്ത്രിയും"
        bgImage="/images/temple/temple-main.jpg"
      />

      <DarshanBar />

      <section className="committee-section py-5" style={{ background: 'var(--cream)' }}>
        <div className="container">

          {/* Spiritual Leader / Tantri */}
          {spiritualLeader && (
            <div className="mb-5">
              <SectionHeader
                label="Spiritual Guide"
                title="ക്ഷേത്രം തന്ത്രി"
                titleMal="Temple Tantri"
              />

              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                  <SpotlightCard className="member-card p-4 text-center bg-white rounded-4 shadow-sm" style={{ border: '2px solid var(--gold)' }}>
                    <div className="member-avatar mx-auto mb-3" style={{ width: '130px', height: '130px', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--gold)' }}>
                      <img src={spiritualLeader.img} alt={spiritualLeader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="member-name fw-bold" style={{ fontSize: '1.25rem', color: 'var(--dark-brown)' }}>{spiritualLeader.name}</div>
                    <div className="member-role" style={{ fontSize: '0.98rem', color: 'var(--saffron-dark)', fontFamily: 'var(--font-malayalam)' }}>{spiritualLeader.role}</div>
                  </SpotlightCard>
                </div>
              </div>
            </div>
          )}

          {/* Executive Managing Committee */}
          <div className="mt-5 mb-5">
            <SectionHeader
              label="Executive Body"
              title="Managing Committee"
              titleMal="കാര്യനിർവ്വഹണ സമിതി"
            />

            <div className="row g-4">
              {executives.map(member => (
                <div key={member.id} className="col-sm-6 col-lg-3">
                  <SpotlightCard className="member-card p-4 text-center bg-white rounded-4 shadow-sm h-100 d-flex flex-column align-items-center" style={{ border: '1.5px solid var(--border-gold)' }}>
                    <div className="member-avatar mb-3" style={{ width: '110px', height: '110px', borderRadius: '50%', overflow: 'hidden', border: '3px solid var(--gold)', flexShrink: 0 }}>
                      <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    
                    <div className="member-name-block w-100">
                      <div className="member-name fw-bold" style={{ fontSize: '1.1rem', color: 'var(--dark-brown)' }}>{member.name}</div>
                      <div className="member-role text-center mt-1" style={{ fontSize: '0.86rem', color: 'var(--saffron-dark)', fontFamily: 'var(--font-malayalam)', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {member.role}
                      </div>
                    </div>

                    <div className="mt-auto pt-3 w-100 text-center">
                      {member.phone ? (
                        <a href={`tel:${member.phone}`} className="btn btn-outline-warning btn-sm text-dark fw-bold rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1 shadow-xs" style={{ fontSize: '0.8rem', borderColor: 'var(--gold)' }}>
                          <i className="fas fa-phone-alt text-warning"></i>{member.phone}
                        </a>
                      ) : (
                        <div style={{ height: '31px' }}></div>
                      )}
                    </div>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>

          {/* General Committee Members */}
          <div className="mt-5">
            <SectionHeader
              label="Active Council"
              title="Council Members"
              titleMal="സമിതി അംഗങ്ങൾ"
            />

            <div className="row g-4">
              {members.map(member => (
                <div key={member.id} className="col-sm-6 col-md-4 col-lg-3">
                  <SpotlightCard className="member-card p-4 text-center bg-white rounded-4 shadow-sm h-100 d-flex flex-column align-items-center" style={{ border: '1.5px solid var(--border-gold)' }}>
                    <div className="member-avatar mb-3" style={{ width: '95px', height: '95px', borderRadius: '50%', overflow: 'hidden', border: '2.5px solid var(--gold)', flexShrink: 0 }}>
                      <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    
                    <div className="member-name-block w-100">
                      <div className="member-name fw-bold" style={{ fontSize: '1.02rem', color: 'var(--dark-brown)' }}>{member.name}</div>
                      <div className="member-role text-center mt-1" style={{ fontSize: '0.82rem', color: 'var(--medium-brown)', fontFamily: 'var(--font-malayalam)', minHeight: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {member.role}
                      </div>
                    </div>

                    <div className="mt-auto pt-3 w-100 text-center">
                      {member.phone ? (
                        <a href={`tel:${member.phone}`} className="btn btn-outline-warning btn-sm text-dark fw-bold rounded-pill px-3 py-1 d-inline-flex align-items-center gap-1 shadow-xs" style={{ fontSize: '0.78rem', borderColor: 'var(--gold)' }}>
                          <i className="fas fa-phone-alt text-warning"></i>{member.phone}
                        </a>
                      ) : (
                        <div style={{ height: '29px' }}></div>
                      )}
                    </div>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
