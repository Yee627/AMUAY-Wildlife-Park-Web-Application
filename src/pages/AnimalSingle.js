import React from 'react';
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import animalItems from '../components/AnimalItems';
import '../pages/Single.css';

function AnimalSingle() {
  const { id } = useParams();
  const animal = animalItems.find((animal) => animal.id === id);

  if (!animal) {
    return <div>Animal not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <div className="topSingle">
          <img src={animal.imgSingle} alt="WildlifeImage" />
          <div className="intro">
            <h2>{animal.name}</h2>
            <h4>{animal.scientificName}</h4>
            <h3>{animal.status}</h3>
            <p>{animal.introduction}</p>
          </div>
        </div>
        <div className="middleSingle">
          <div>
            <i class="fa-solid fa-mountain-sun"><h2>Habitat</h2></i>
            <p>{animal.habitat}</p>
          </div>
          <div>
            <i class="fa-solid fa-globe"><h2>Family Life</h2></i>
            <p>{animal.familyLife}</p>
          </div>
          <div>
            <i class="fa-solid fa-heart-circle-plus"><h2>Conservation</h2></i>
            <p>{animal.conservation}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AnimalSingle;