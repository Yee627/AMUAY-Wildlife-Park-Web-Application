import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import Category from '../components/Category';

function Wildlife() {

  /* In order to jump on the top instantly when opening this page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
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
