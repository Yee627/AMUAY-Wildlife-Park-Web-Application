/*import React, { useState, useEffect } from 'react';*/
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import animalItems from '../components/AnimalItems';

function AnimalSingle() {
  const { id } = useParams();
  const animal = animalItems.find((animal) => animal.id === id);

  if (!animal) {
    return <div>Animal not found</div>;
  }

  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-category"
        heroImg={animal.imgSingle}
        title={animal.name}
      />
      <Footer />
    </div>
  );
}

export default AnimalSingle;