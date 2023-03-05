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
          <h4>About</h4>
          <a href="/">History</a>
          <a href="/">Mission</a>
          <a href="/">Service</a>
        </div>
        <div>
          <h4>News</h4>
          <a href="/">Journal</a>
          <a href="/">Video</a>
          <a href="/">Blog</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="/">Contact</a>
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
        </div>
        <div>
          <h4>Get Involved</h4>
          <a href="/">Job</a>
          <a href="/">Volunteer</a>
          <a href="/">Sponsorship</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;