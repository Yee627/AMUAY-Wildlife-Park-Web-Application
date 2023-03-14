import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import plantsItems from '../components/PlantsItems';
import '../pages/Single.css';

function PlantSingle() {

  /* In order to jump on the top instantly when opening this page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const { id } = useParams();
  const plant = plantsItems.find((plant) => plant.id === id);

  if (!plant) {
    return <div>Plant not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <div className="topSingle">
          <img src={plant.imgSingle} alt="WildlifeImage" />
          <div className="intro">
            <h2>{plant.name}</h2>
            <h4>{plant.scientificName}</h4>
            <h3>{plant.status}</h3>
            <p>{plant.introduction}</p>
          </div>
        </div>
        <div className="middleSingle">
          <div>
            <i class="fa-solid fa-mountain-sun"><h2>Characteristic</h2></i>
            <p>{plant.characteristic}</p>
          </div>
          <div>
            <i class="fa-solid fa-globe"><h2>Cultivation</h2></i>
            <p>{plant.cultivation}</p>
          </div>
          <div>
            <i class="fa-solid fa-heart-circle-plus"><h2>Conservation</h2></i>
            <p>{plant.conservation}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PlantSingle;