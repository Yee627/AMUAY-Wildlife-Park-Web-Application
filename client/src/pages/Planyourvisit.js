import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Experiences from '../components/Experiences';
import Footer from '../components/Footer';

function Planyourvisit() {

  /* In order to jump on the top instantly when opening this page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="./images/visit_your_plan.jpeg"
        title="Get Ready For Your Adventure"
        text="Surround yourself with genuine natural splendour in the west of the Venezuelan capital and meet a wide range of animals and plants."
      />
      <Experiences />
      <Footer />
    </div>
  );
}

export default Planyourvisit;