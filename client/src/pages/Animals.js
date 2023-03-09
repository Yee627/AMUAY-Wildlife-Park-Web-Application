import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import animalItems from '../components/AnimalItems';
import Card from '../components/WildlifeCard';
import '../components/WildlifeCard.css';

function Animals() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedConservationStatus, setSelectedConservationStatus] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  function handleCategorySelection(event) {
    setSelectedCategory(event.target.value);
  }

  function handleConservationStatusSelection(event) {
    setSelectedConservationStatus(event.target.value);
  }

  useEffect(() => {
    const filtered = animalItems.filter((animalItem) => {
      return (
        (!selectedCategory || animalItem.category === selectedCategory) &&
        (!selectedConservationStatus || animalItem.status === selectedConservationStatus)
      );
    });
    setFilteredResults(filtered);
  }, [selectedCategory, selectedConservationStatus]);

  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-category"
        heroImg="../images/zibra.jpeg"
        title="ANIMALS"
      />
      <div className="searchWildlife">
        <p className="searchText">View Animals By</p>

        <div className="search">
          <select id="category" value={selectedCategory} onChange={handleCategorySelection}>
            <option value="">Category</option>
            <option value="Mammals">Mammals</option>
            <option value="Birds">Birds</option>
            <option value="Reptiles">Reptiles</option>
            <option value="Amphibians">Amphibians</option>
            <option value="Fish">Fish</option>
          </select>

          <select id="conservation-status" value={selectedConservationStatus} onChange={handleConservationStatusSelection}>
            <option value="">Conservation status</option>
            <option value="Endangered">Endangered</option>
            <option value="Some Threatened">Some Endangered</option>
            <option value="Threatened">Threatened</option>
            <option value="Some Threatened">Some Threatened</option>
            <option value="Stable">Stable</option>
          </select>
        </div>
      </div>
      <div className="wildlifeCards">
        {filteredResults.map(Card)}
      </div>
      <Footer />
    </div>
  );
}

export default Animals;