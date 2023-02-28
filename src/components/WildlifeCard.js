import React from 'react';
import { Link } from "react-router-dom";
import '../components/WildlifeCard.css';

function Card(props) {
  return (
    <div>
      <Link to={props.url}>
        <div className="card">
          <img src={props.AnimalImg} alt="WildlifeImg" />
          <h5>{props.name}</h5>
        </div>
      </Link>
    </div>
  );
}

export default Card;