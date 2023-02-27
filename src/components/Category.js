import React from 'react';
import './Category.css';
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="category">
      <h4>Welcome to AMUAY Wildlife Park! Our land is home to an amazing abundance of plant and animal life. The AMUAY Wildlife Park is a 200-acre facility with an extraordinary variety of flora and fauna from habitats around the world, many of them rare and precious.</h4>
      <div className="flexContainer">
        <Link to="/wildlife/plants">
          <div className="plant">
            <img src="./images/tree.jpg" alt="Plants" />
            <h3>PLANTS</h3>
          </div>
        </Link>
        <Link to="/wildlife/animals">
          <div className="animal">
            <img src="./images/lions.jpg" alt="Animals" />
            <h3>ANIMALS</h3>
          </div>
        </Link>
      </div>

    </div>
  );
}

export default Category;