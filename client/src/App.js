import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wildlife from "./pages/Wildlife";
import Planyourvisit from "./pages/Planyourvisit";
import Information from "./pages/Information";
import Plants from './pages/Plants';
import Animals from './pages/Animals';
import PlantSingle from './pages/PlantSingle';
import AnimalSingle from './pages/AnimalSingle';
import DriveThrough from './pages/DriveThrough';
import WalkingTour from './pages/WalkingTour';
import AnimalFeeding from './pages/AnimalFeeding';
import AnimalEncounter from './pages/AnimalEncounter';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wildlife" element={<Wildlife />} />
        <Route path="/wildlife/plants" element={<Plants />} />
        <Route path="/wildlife/plants/:id" element={<PlantSingle />} />
        <Route path="/wildlife/animals" element={<Animals />} />
        <Route path="/wildlife/animals/:id" element={<AnimalSingle />} />
        <Route path="/planyourvisit" element={<Planyourvisit />} />
        <Route path="/planyourvisit/drivethrough" element={<DriveThrough />} />
        <Route path="/planyourvisit/walkingtour" element={<WalkingTour />} />
        <Route path="/planyourvisit/animalfeeding" element={<AnimalFeeding />} />
        <Route path="/planyourvisit/animalencounter" element={<AnimalEncounter />} />
        <Route path="/Information" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
