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
                  <MemberCard
                    name={spiritualLeader.name}
                    role={spiritualLeader.role}
                    img={spiritualLeader.img}
                    avatarSize="130px"
                  />
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
                  <MemberCard
                    name={member.name}
                    role={member.role}
                    img={member.img}
                    phone={member.phone}
                    avatarSize="110px"
                  />
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
                  <MemberCard
                    name={member.name}
                    role={member.role}
                    img={member.img}
                    phone={member.phone}
                    avatarSize="95px"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
