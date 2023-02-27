import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer';

function Information() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="./images/bear.jpeg"
        title="Information Center"
        text="AMUAY Wildlife Park Welcomes Your Comments, Suggestions, And Questions!"
      />
      <Footer />
    </div>
  )
}

export default Information;