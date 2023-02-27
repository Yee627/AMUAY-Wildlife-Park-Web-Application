import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h2>AMUAY<span> Wildlife Park </span></h2>
        </div>
        <div>
          <a href="/"><i class="fa-brands fa-instagram"></i></a>
          <a href="/"><i class="fa-brands fa-facebook-square"></i></a>
          <a href="/"><i class="fa-brands fa-twitter"></i></a>
          <a href="/"><i class="fa-brands fa-tiktok"></i></a>
          <a href="/"><i class="fa-brands fa-youtube"></i></a>
          <a href="/"><i class="fa-brands fa-pinterest"></i></a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Visit</h4>
          <a href="/">Direction</a>
          <a href="/">Zoo Map</a>
          <a href="/">Guest Service</a>
        </div>
        <div>
          <h4>News</h4>
          <a href="/">Journal</a>
          <a href="/">Podcast</a>
          <a href="/">Press Room</a>
        </div>
        <div>
          <h4>Discover</h4>
          <a href="/">Academy</a>
          <a href="/">Adventures</a>
          <a href="/">Wildlife Exploration</a>
        </div>
        <div>
          <h4>Get Involved</h4>
          <a href="/">Job</a>
          <a href="/">Volunteer</a>
          <a href="/">Sponsorship & Licensing</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;