/*import React, { useState, useEffect } from 'react';*/
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import plantsItems from '../components/PlantsItems';

function PlantSingle() {
  const { id } = useParams();
  const plant = plantsItems.find((plant) => plant.id === id);

  if (!plant) {
    return <div>Plant not found</div>;
  }

  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-category"
        heroImg={plant.imgSingle}
        title={plant.name}
      />
      <Footer />
    </div>
  );
}

export default PlantSingle;