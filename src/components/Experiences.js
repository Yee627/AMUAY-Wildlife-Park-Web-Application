import React from 'react';
import "./Experiences.css";
import visitItems from "../components/VisitItems";
import createSections from "../components/Sections";

function Experiences() {
  return (
    <>
      <div className="visitContainer">
        {visitItems.map(createSections)}
      </div>
    </>
  );
}

export default Experiences;