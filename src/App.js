import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Wildlife from "./pages/Wildlife";
import Planyourvisit from "./pages/Planyourvisit";
import Information from "./pages/Information";
import Plants from './pages/Plants';
import Animals from './pages/Animals';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wildlife" element={<Wildlife />} />
        <Route path="/wildlife/plants" element={<Plants />} />
        <Route path="/wildlife/animals" element={<Animals />} />
        <Route path="/planyourvisit" element={<Planyourvisit />} />
        <Route path="/Information" element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
