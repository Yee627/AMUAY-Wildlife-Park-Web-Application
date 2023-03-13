import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import './AnimalEncounter.css';
import encounterItems from '../components/EncounterItems';
import createSections from "../components/Sections";

function AnimalEncounter() {
  return (
    <div>
      <Navbar />
      <Hero cName="hero"
        heroImg="../images/penguins.jpeg"
        title="Animal Encounter"
      />
      <div className="encounterContainer">
        {encounterItems.map(createSections)}
      </div>
      <Footer />
    </div>
  );
}

export default AnimalEncounter;