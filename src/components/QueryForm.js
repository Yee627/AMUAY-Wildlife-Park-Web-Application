import React, { useState } from "react";
import '../components/Information.css';

function QueryForm(props) {
  const [query, setQuery] = useState({
    name: "",
    email: "",
    phone: "",
    theme: "",
    message: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setQuery(preQuery => {
      return {
        ...preQuery,
        [name]: value
      };
    });
  }

  function handleSubmit(event) {
    props.onAdd(query);
    event.preventDefault();

  }

  return (
    <section class="query">
      <i class="fa-solid fa-envelope"><p>Get In Touch</p></i>

      <form onSubmit={handleSubmit}>
        <div class="queryForm">
          <input type="text" id="name" onChange={handleChange} value={query.name} name="name" placeholder="Name" />
          <input type="text" id="email" onChange={handleChange} value={query.email} name="email" placeholder="Email" />
          <input type="text" id="phone" onChange={handleChange} value={query.phone} name="phone" placeholder="Phone" />
          <input type="text" id="theme" onChange={handleChange} value={query.theme} name="theme" placeholder="Query Theme" />
        </div>
        <div class="query-form-message">
          <textarea name="message" onChange={handleChange} value={query.message} id="message" rows="10" cols="60" placeholder="Message(0 of 1000 max characters)"></textarea>
          <input type="submit" class="sendMessage" value="Submit" />
        </div>
      </form>
    </section>
  );
}

export default QueryForm;