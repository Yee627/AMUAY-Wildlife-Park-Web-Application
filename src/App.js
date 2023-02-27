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
        <Route path="/" exact element={<Home />} />
        <Route path="/wildlife" exact element={<Wildlife />} />
        <Route path="/wildlife/plants" exact element={<Plants />} />
        <Route path="/wildlife/animals" exact element={<Animals />} />
        <Route path="/planyourvisit" exact element={<Planyourvisit />} />
        <Route path="/Information" exact element={<Information />} />
      </Routes>
    </div>
  );
}

export default App;
