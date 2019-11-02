import React from 'react';

import './Character.css';

const portraitStyle = {
  maxHeight: "25rem",
  maxWidth: "75%",
  border: "20px solid red",
  marginTop: "20px",
  borderImage: "url(portraitBorder.png) 100 round"
}

let portrait = document.getElementsByClassName("portrait");


function changeBorder(x) {
  if (x.matches) { // If media query matches
    portrait[0].style.borderImage = "";
    portrait[0].style.border = "1px transparent";
  } else {
    portrait[0].style.border = "20px solid red";
    portrait[0].style.borderImage = "url(portraitBorder.png) 100 round";
  }
}

let smallWindow = window.matchMedia("(max-width: 700px)");
smallWindow.addListener(changeBorder); // Attach listener function on state changes

const Character = props => {
  return (
    <div className="summary">
      <h1>{props.name}</h1>
      <p>
        <span className="summary__output">{props.race} {props.gender} {props.dndClass[0]}</span>
      </p>
      <p>
        {props.alignment}
      </p>
      <p>
        {props.dndClass[0]} level {props.dndClass[1]}
      </p>
      <p>
        <img className="portrait" src={props.imgUrl} alt="Not found." style={portraitStyle} />
      </p>
      <p>
        {props.description}
      </p>
    </div>
  );
};

export default Character;
