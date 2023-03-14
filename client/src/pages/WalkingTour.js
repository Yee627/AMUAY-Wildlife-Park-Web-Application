import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import './WalkingTour.css';

function WalkingTour() {

  /* In order to jump on the top instantly when opening this page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="../images/hiking.jpeg"
        title="Walking Tours"
      />
      <div className="walkContainer">
        <div className="walkTour">
          <div>
            <Link to="/">
              <h2>Animal Walking Tours</h2>
            </Link>
            <p>Choose me for an exhilarating hike, there's no denying the wildlife in nature, it's full of life and lively critters like little elves, you'll find all kinds of animals by your fee, you can also try to find all the animal illustrations
        posted on the website, it'll be a great opportunity to learn about animals, come and hike don't hesitate!</p>
          </div>
          <img src="../images/dear_in_walking_tour.jpg" alt="WalkingTourImg" />
        </div>
        <div className="walkTour" id="plantTour">
          <img src="../images/Cacti.jpg" alt="WalkingTourImg" />
          <div>
            <Link to="/">
              <h2>Plant Walking Tours</h2>
            </Link>
            <p>Choose me for a peaceful and quiet hike, there's no turning away from a walk through a trail full of beautiful plants, you'll find all kinds of plants and you'll be amazed, if you don't know it, you can try to visit the website to see all
        the plant illustrations posted, it's a great opportunity to learn about plants, come and hike!</p>
          </div>
        </div>
        <div className="walkTour">
          <div>
            <h2 className="zoomap">Zoo Map</h2>
            <p>View the Amuay Wildlife Park's classic illustrated map on your browser. Find your favorite wildlife, plan your walking tours!</p>
            <a href="../images/map_guide.jpg" download><h4>Download the Map here&nbsp;▸</h4></a>
          </div>
          <img src="../images/map_guide.jpg" alt="WalkingTourImg" />
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default WalkingTour;