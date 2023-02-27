import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import animalItems from '../components/AnimalItems';
import Card from '../components/WildlifeCard';
import '../components/WildlifeCard.css';

function Animals() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-category"
        heroImg="../images/zibra.jpeg"
        title="ANIMALS"
      />
      <div className="search">
        <form >
          <select id="category">
            <option value="">Category</option>
            <option value="Mammals">Mammals</option>
            <option value="Birds">Birds</option>
            <option value="Reptiles">Reptiles</option>
            <option value="Amphibians">Amphibians</option>
            <option value="Fish">Fish</option>
          </select>

          <select id="conservation-status" >
            <option value="">Conservation Status</option>
            <option value="Endangered">Endangered</option>
            <option value="Some Threatened">Some Endangered</option>
            <option value="Threatened">Threatened</option>
            <option value="Some Threatened">Some Threatened</option>
            <option value="Stable">Stable</option>
          </select>

          <button type="submit">Filter</button>
        </form>
      </div>
      <div className="animalCards">
        {animalItems.map(Card)}
      </div>
      <Footer />
    </div>
  );
}

export default Animals;