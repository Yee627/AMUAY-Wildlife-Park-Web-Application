import React from "react";
import "./Middle.css";
import homeItems from "../components/HomeItems";
import createSections from "../components/Sections";


function Middle() {
  return (
    <>
      <div className="sectionContainer">
        {homeItems.map(createSections)}
      </div>
    </>
  );
}

export default Middle;