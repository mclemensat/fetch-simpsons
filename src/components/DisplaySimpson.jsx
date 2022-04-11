import React from "react";
import "./DisplaySimpson.css";

const DisplaySimpson = ({ simpson }) => {
  return (
    simpson && (
      <figure className="DisplaySimpson">
        <img src={simpson.image} alt={simpson.character} />
        <figcaption>
          <blockquote>{simpson.quote}</blockquote>
          <cite>{simpson.character}</cite>
        </figcaption>
      </figure>
    )
  );
};

export default DisplaySimpson;
