import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Middle from "../components/Middle";
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="./images/cover.jpg"
        title="Welcome to Amuay wildlife park. "
        text="Surround yourself with genuine natural splendour in the west of the Venezuelan capital and meet a wide range of animals and plants."
      />
      <Middle />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
