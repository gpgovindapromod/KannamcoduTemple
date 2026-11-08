import React from 'react';
import { COMMITTEE_DATA } from '../data/templeData';
import PageHero from '../components/PageHero';
import DarshanBar from '../components/DarshanBar';
import SectionHeader from '../components/SectionHeader';
import MemberCard from '../components/MemberCard';

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

      <section className="committee-section py-5" id="team">
        <div className="container">

          {/* Section Header */}
          <SectionHeader
            label="Leadership & Administration"
            title="Committee Members"
            titleMal="ഭരണസമിതി അംഗങ്ങൾ"
            subtitle="Vettikkavala Kannamcodu Sree Subrahmanya Swami Temple Committee Members"
          />

          {/* Top Row: Executive Officers (President, Vice President, Secretary) */}
          <div className="row g-4 justify-content-center mb-5 first-row">
            {executives.slice(0, 3).map((exec) => (
              <div key={exec.id} className="col-lg-4 col-md-6 col-sm-10">
                <MemberCard
                  name={exec.name}
                  role={exec.role}
                  img={exec.img}
                  phone={exec.phone}
                  highlight={true}
                />
              </div>
            ))}
          </div>

          {/* Second Section: Council & Committee Members */}
          <div className="mt-4 mb-4 text-center">
            <h3 className="h4 fw-bold text-maroon" style={{ fontFamily: 'var(--font-heading)' }}>
              സമിതി അംഗങ്ങൾ (Council Members)
            </h3>
            <div className="section-divider"></div>
          </div>

          <div className="row g-4 justify-content-center mb-5">
            {/* Liju V (Union Rep) + All General Committee Members */}
            {[executives[3], ...members].map((member) => (
              <div key={member.id} className="col-lg-3 col-md-6 col-sm-10">
                <MemberCard
                  name={member.name}
                  role={member.role}
                  img={member.img}
                  phone={member.phone}
                />
              </div>
            ))}
          </div>

          {/* Spiritual Guide / Tantri */}
          {spiritualLeader && (
            <div className="mt-5 pt-4 border-top" style={{ borderColor: 'rgba(212, 160, 23, 0.3)' }}>
              <div className="text-center mb-4">
                <h3 className="h3 fw-bold text-maroon" style={{ fontFamily: 'var(--font-heading)' }}>
                  ക്ഷേത്രം തന്ത്രി
                </h3>
                <p className="text-muted" style={{ fontFamily: 'var(--font-malayalam)' }}>
                  ആദ്ധ്യാത്മിക മാർഗ്ഗദർശി
                </p>
                <div className="section-divider"></div>
              </div>

              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-10">
                  <MemberCard
                    name={spiritualLeader.name}
                    role={spiritualLeader.role}
                    img={spiritualLeader.img}
                    phone={spiritualLeader.phone}
                    highlight={true}
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
