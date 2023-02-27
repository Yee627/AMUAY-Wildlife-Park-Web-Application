import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experiences from '../components/Experiences';
import Footer from '../components/Footer';


function Planyourvisit() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="./images/visit_your_plan.jpeg"
        title="Get Ready For Your Adventure"
      />
      <Experiences />
      <Footer />
    </div>
  );
}

export default Planyourvisit;