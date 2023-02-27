import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer';

function Plants() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-category"
        heroImg="../images/plant.jpeg"
        title="PLANTS"
      />

      <Footer />
    </div>
  );
}

export default Plants;