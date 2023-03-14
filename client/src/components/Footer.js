import React from 'react';
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h2>AMUAY<span> Wildlife Park </span></h2>
        </div>
        <div>
          <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
          <Link to="/"><i class="fa-brands fa-facebook-square"></i></Link>
          <Link to="/"><i class="fa-brands fa-twitter"></i></Link>
          <Link to="/"><i class="fa-brands fa-tiktok"></i></Link>
          <Link to="/"><i class="fa-brands fa-youtube"></i></Link>
          <Link to="/"><i class="fa-brands fa-pinterest"></i></Link>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>About</h4>
          <Link to="/">History</Link>
          <Link to="/">Mission</Link>
          <Link to="/">Service</Link>
        </div>
        <div>
          <h4>News</h4>
          <Link to="/">Journal</Link>
          <Link to="/">Video</Link>
          <Link to="/">Blog</Link>
        </div>
        <div>
          <h4>Support</h4>
          <Link to="/">Contact</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Terms</Link>
        </div>
        <div>
          <h4>Get Involved</h4>
          <Link to="/">Job</Link>
          <Link to="/">Volunteer</Link>
          <Link to="/">Sponsorship</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;