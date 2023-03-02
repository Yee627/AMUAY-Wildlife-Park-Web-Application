import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import '../components/Information.css';
import QueryForm from '../components/QueryForm';

function Information() {

  const [queries, setQueries] = useState([]);

  function addQuery(newQuery) {
    setQueries(preQueries => {
      return [...preQueries, newQuery];
    });
  }

  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="./images/bear.jpeg"
        title="Information Center"
        text="AMUAY Wildlife Park Welcomes Your Comments, Suggestions, And Questions!"
      />
      <div className="mapInfo">
        <div className="locationMap">
          <i class="fa-solid fa-map-location-dot"><p>How To Find Us</p></i>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d16232111.205160126!2d-66.614671!3d6.657113!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2853cb36cbd801%3A0xdca0f2587cd54dd3!2sVenezuela!5e0!3m2!1sen!2sie!4v1677700703377!5m2!1sen!2sie" title="Location Map" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="parkMap">
          <i class="fa-solid fa-map-location-dot"><p>Tour Map In Park</p></i>
          <img src="./images/tour map.png" alt="tour map"></img>
        </div>
      </div>
      <div className="timeInfo">
        <div className="leftInfo">
          <i class="fa-solid fa-clock"><p>When To Visit Us</p></i>
          <div class="visitTime">
            <h3>Opening Time</h3>
            <h4>Monday - Friday</h4>
            <p>9:00 am to 5:00 pm</p>
            <h4>Weekend</h4>
            <p>8:30 am to 10:00 pm</p>
          </div>
        </div>
        <div className="rightInfo">
          <i class="fa-solid fa-clock"><p>Animal Feeding Time</p></i>
          <div class="feedingTime">
            <h4>Morning feedings</h4>
            <p>10:00 am elephant</p>
            <p>11:30 am giraffes</p>
            <p>12:00 am meerkats</p>
            <h4>Afternoon feedings</h4>
            <p>1:00 pm elephants</p>
            <p>1:30 pm lemurs</p>
            <p>3:00 pm sun bears</p>
          </div>
        </div>
      </div>
      <QueryForm onAdd={addQuery} />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Information;