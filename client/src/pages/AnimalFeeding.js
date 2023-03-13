import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import createSections from "../components/Sections";
import './AnimalFeeding.css'
import feedingItems from '../components/feedingItems';

function AnimalFeeding() {
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