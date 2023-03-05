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
        cName="hero-mid"
        heroImg="./images/cover.jpg"
        title="Welcome to Amuay wildlife park"
      />
      <Middle />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
