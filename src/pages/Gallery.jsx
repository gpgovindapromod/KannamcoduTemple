import React from 'react';
import PageHero from '../components/PageHero';
import DarshanBar from '../components/DarshanBar';
import SectionHeader from '../components/SectionHeader';
import GalleryGrid from '../components/GalleryGrid';

export default function Gallery() {
  return (
    <>
      <PageHero
        title="Photo Gallery"
        subtitle="ക്ഷേത്ര ദൃശ്യങ്ങളും പുണ്യ നിമിഷങ്ങളും"
        bgImage="/images/temple/temple-aerial.jpg"
      />

      <DarshanBar />

      <section className="gallery-section py-5">
        <div className="container">
          <SectionHeader
            label="Visual Memories"
            title="Temple Gallery"
            titleMal="ഫോട്ടോ ഗ്യാലറി"
            subtitle="വേൽ കാവടി, മഞ്ഞൾ നീരാട്ട്, അഗ്നി കാവടി, ക്ഷേത്ര ദൃശ്യങ്ങൾ"
          />

          <GalleryGrid limit={0} showFilters={true} />
        </div>
      </section>
    </>
  );
}
