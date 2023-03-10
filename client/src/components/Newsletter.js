import React, { useState } from 'react';
import './Newsletter.css';
import axios from 'axios';

function Newsletter() {
  const [email, setEmail] = useState("");

  function handleChange(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!email) {
      alert('Email is required');
      return;
    }

    axios.post("subscribe", { email })
      .then(response => {
        console.log(response)
        alert("Thanks for subscribing!")
        setEmail("")
      })
      .catch(err => {
        console.log(err)
        alert("Failed to subscribe")
        setEmail("")
      });
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