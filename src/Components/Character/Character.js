import React from 'react';

// import './Character.css';

const portraitStyle = {
  maxHeight: "25rem",
  maxWidth: "100%",
  border: "40px solid red",
  borderImage: "url(portraitBorder.png) 100 round",
  margin: "20px",
  maxWidth: "75%"
}

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
