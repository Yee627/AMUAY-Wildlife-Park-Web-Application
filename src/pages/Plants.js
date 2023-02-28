import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import plantsItems from '../components/PlantsItems';
import Card from '../components/WildlifeCard';
import '../components/WildlifeCard.css';

function Plants() {
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
    const filtered = plantsItems.filter((plantItem) => {
      return (
        (!selectedCategory || plantItem.category === selectedCategory) &&
        (!selectedConservationStatus || plantItem.status === selectedConservationStatus)
      );
    });
    setFilteredResults(filtered);
  }, [selectedCategory, selectedConservationStatus]);

  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-category"
        heroImg="../images/plant.jpeg"
        title="PLANTS"
      />
      <div className="searchWildlife">
        <p className="searchText">View Plants By</p>

        <div className="search">
          <select id="category" value={selectedCategory} onChange={handleCategorySelection}>
            <option value="">Category</option>
            <option value="Ferns">Ferns</option>
            <option value="Flowers">Flowers</option>
            <option value="Grasses">Grasses</option>
            <option value="Herbs">Herbs</option>
            <option value="Palms">Palms</option>
            <option value="Cactus">Cactus</option>
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

export default Plants;