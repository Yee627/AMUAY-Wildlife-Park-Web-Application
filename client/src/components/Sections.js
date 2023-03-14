import React from "react";
import { Link } from "react-router-dom";

function createSections(props) {
  return (
    <section className={props.className}>
      <img src={props.middleImg} alt="MiddleImg" />
      <h3>{props.title}</h3>
      <h4>{props.text}</h4>
      <Link to={props.url} className="newlink">Learn More</Link>
    </section>
  )
}

export default createSections;