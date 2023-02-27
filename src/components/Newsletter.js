import React from 'react';
import './Newsletter.css';

function Newsletter() {
  return (
    <div className="newsletter">
      <h2>GET THE NEWSLETTER</h2>
      <div className="eyebrow">Sign up for wildlife news, zoo activities and more</div>
      <form action="" method="POST">
        <input type="text" id="email" name="email" placeholder="Email Address" />
        <input type="submit" class="subscribe" value="SUBMIT" />
      </form>
    </div>
  )
}

export default Newsletter;