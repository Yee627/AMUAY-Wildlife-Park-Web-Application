import React, { useState } from "react";
import '../pages/Information.css';
import axios from 'axios';

function QueryForm() {
  const [query, setQuery] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
    event.preventDefault();

    axios.post("Amuaywildlifepark-env-1.eba-fqrw9p2y.us-east-1.elasticbeanstalk.com	code-pipeline-1678316609554-8095dbbf0459b644cf6f4d759c50813fb631278f/addQuery", query)
      .then(response => {
        console.log(response)
        alert("Query received!")
        setQuery({
          firstName: "",
          lastName: "",
          email: "",
          theme: "",
          message: ""
        })
      })
      .catch(err => console.log(err));
  }

  return (
    <section className="query">
      <i className="fa-solid fa-envelope"><p>Get In Touch</p></i>

      <form onSubmit={handleSubmit}>
        <div className="queryForm">
          <input type="text" id="firstName" onChange={handleChange} value={query.firstName} name="firstName" placeholder="First Name" />
          <input type="text" id="lastName" onChange={handleChange} value={query.lastName} name="lastName" placeholder="Last Name" />
          <input type="text" id="email" onChange={handleChange} value={query.email} name="email" placeholder="Email" />
          <input type="text" id="theme" onChange={handleChange} value={query.theme} name="theme" placeholder="Query Theme" />
        </div>
        <div className="query-form-message">
          <textarea name="message" onChange={handleChange} value={query.message} id="message" rows="10" cols="60" placeholder="Message(0 of 1000 max characters)"></textarea>
          <input type="submit" class="sendMessage" value="SUBMIT" />
        </div>
      </form>
    </section>
  );
}

export default QueryForm;