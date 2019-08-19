import React from 'react';

import './Character.css';

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
        <img src={props.imgUrl} alt="Not found."/>
      </p>
    </div>
  );
};

export default Character;
