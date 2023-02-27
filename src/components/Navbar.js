import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuItems from "./MenuItems";

function createItems(item) {
  return (
    <li key={item.id}>
      <Link to={item.url} className="nav-link">
        <i className={item.icon}></i>
        {item.title}
      </Link>
    </li>
  );
}

function Navbar() {
  const [isClicked, setClick] = useState(false);

  function handleClick() {
    setClick(!isClicked);
  }

  return (
    <nav className="NavbarItems">

      <h1 className={isClicked ? "logo active" : "logo"}>
        AMUAY<div class="logo-second-line">Wildlife Park</div>
      </h1>

      <div className="menu-icons" onClick={handleClick}>
        <i className={isClicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={isClicked ? "nav-menu active" : "nav-menu"}>{MenuItems.map(createItems)}</ul>
    </nav>
  );
}

export default Navbar;
