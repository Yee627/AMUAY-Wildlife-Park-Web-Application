import React, { useState } from 'react';
import './Newsletter.css';
import axios from 'axios';

function Newsletter() {
  const [email, setEmail] = useState("");

  function handleChange(event) {
    setEmail(event.target.value);
    console.log(email);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="newsletter">
      <h2>GET THE NEWSLETTER</h2>
      <div className="eyebrow">Sign up for wildlife news, zoo activities and more</div>
      <form onSubmit={handleSubmit} >
        <input onChange={handleChange} type="text" id="email" value={email} name="email" placeholder="Email Address" />
        <input type="submit" class="subscribe" value="SUBMIT" />
      </form>
    </div>
  )
}

export default Newsletter;