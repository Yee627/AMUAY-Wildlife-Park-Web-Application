import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import createSections from "../components/Sections";
import './AnimalFeeding.css'
import feedingItems from '../components/feedingItems';

function AnimalFeeding() {

  /* In order to jump on the top instantly when opening this page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Navbar />
      <Hero cName="hero"
        heroImg="../images/feeding.jpeg"
        title="Animal Feeding"
      />
      <div className="feedingContainer">
        {feedingItems.map(createSections)}
      </div>
      <Footer />
    </div>

  );
}

export default AnimalFeeding;