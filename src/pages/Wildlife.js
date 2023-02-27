import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import Category from '../components/Category';

function Wildlife() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="./images/lion-drinking-water.jpeg"
        title="Explore Our Flora And Fauna"
        text="At AMUAY, thousands of plants and animals are waiting for you to explore."
      />
      <Category />
      <Footer />
    </div>
  );
}

export default Wildlife;
