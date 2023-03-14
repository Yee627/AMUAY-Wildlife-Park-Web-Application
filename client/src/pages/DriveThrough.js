import React, { useEffect } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import './DriveThrough.css'

function DriveThrough() {

  /* In order to jump on the top instantly when opening this page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="../images/safari.jpeg"
        title="Safari Tours"
      />
      <div className="container">
        <div className="safari">
          <img src="../images/safari_girraff.jpg" alt="SafariImg" />
          <div class="description">
            <h2>Giraffe Photography Safari</h2>
            <h4>Status: Ready to start</h4>
            <p>Welcome guys who are giraffe lovers and would like to go on a safari tour, I am your best choice. Soak up the sun and the warm breeze on the tour bus, which travels on dirt paths, and experience the beauty of nature. Enjoy snacks and
            drinks prepared by the driver on board as you relax and look forward to the rest of the tour. You will then drive into the giraffe herd, and you won't believe your eyes, so many lovely giraffes surrounding you, it's so much fun to get up
            close and personal with the giraffes and there will be a professional camera on board to take pictures of you with the giraffes, trust me it will be an experience you will never forget!</p>
            <h5>Start Date: 7th Mar</h5>
            <h5>End Date: 11th Dec</h5>
          </div>
        </div>
        <div className="safari">
          <img src="../images/safari_tiger.jpg" alt="SafariImg" />
          <div class="description">
            <h2>Jungle Safari Night</h2>
            <h4>Status: Ready to start</h4>
            <p>Welcome guys who like to travel at night and love excitement, choosing me will be the best choice for your trip. The darkness of the night will inspire you to explore on a moonlit tour bus, where you will experience the landscape
            differently from the day. Beer and drinks are served on board to get you all excited for the ride. The most exciting part of the tour is the tiger colony, as there is special treatment on board so you don't have to worry about your safety,
            but of course, you are not allowed to get off during the safari. As the tigers surround you, you will feel the pressure of the beasts and the adrenaline will be pumping. Believe me, it's an unprecedented thrill!</p>
            <h5>Start Date: 12th Mar</h5>
            <h5>End Date: 13th Nov </h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

export default DriveThrough;