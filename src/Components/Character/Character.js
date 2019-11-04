import React from 'react';
import { CharacterAbility, CharacterSaveOrSkill } from '../CharacterAbility';

import './Character.css';

const portraitStyle = {
  border: "20px solid red",
  borderImage: "url(portraitBorder.png) 100 round"
}

let portraits = document.getElementsByClassName("portrait");

const changeBorder = x => {
  if (x.matches) { // If media query matches
    [].forEach.call(portraits, i => {
      i.style.borderImage = "";
      i.style.border = "1px transparent";
    })
  } else {
    [].forEach.call(portraits, i => {
      i.style.border = "20px solid red";
      i.style.borderImage = "url(portraitBorder.png) 100 round";
    })
  }
}

let smallWindow = window.matchMedia("(max-width: 700px)");
smallWindow.addListener(changeBorder); // Attach listener function on state changes

const abilities = ["Strength", "Dexterity", "Constitution", "intelligence", "Wisdom", "Charisma"];
const skills = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight Of Hand", "Stealth", "Survival"];

const Character = props => {
  let portraitUrls = props.data.PictureURL.split(', ');
  let dndClass = props.data.Class.split(" ");

  return (
    <React.Fragment>
      <div className="card-holder">
        <div className="character-card">
          <div className="character-header">
            <h1>{props.data.Name}</h1>
            <p>{props.data.Race} {props.data.Gender} {dndClass[0]} </p>
            <p>{props.data.Backstory} - {props.data.Alignment}</p>
            <p>{dndClass[0]} level {dndClass[1]} ({props.data.Experience} EXP)</p>
          </div>
          <div className="character-body">
            <div className="character-left">
              <div className="character-ability-scores">
                {abilities.map(ability => (
                  <CharacterAbility ability={ability} abilityMod={ability+"Mod"} data={props.data}  key={abilities.indexOf(ability)} />
                ))}
              </div>
            </div>
            <div className="character-middle">
              <div className="character-saves">
              {abilities.map(ability => (
                  <CharacterSaveOrSkill stat={ability+"Save"} statProficiency={ability+"SaveProficiency"} data={props.data}  key={"Save" + abilities.indexOf(ability)} />
                ))}
              </div>
              <div className="character-skills">
              {skills.map(skill => (
                  <CharacterSaveOrSkill stat={skill} statProficiency={skill+"Proficiency"} data={props.data}  key={"Skill" + skills.indexOf(skill)} />
                ))}
              </div>
              <div className="character-skills">
                  <CharacterSaveOrSkill stat="passivePerception" statProficiency="PerceptionProficiency" data={props.data}  key="passivePerception" />
              </div>
            </div>
            <div className="character-right">
              <div className="character-armor">
                <h3 className="character-armor-title">AC</h3>
                <p className="character-armor-class">{props.data.AC}</p>
              </div>
              <div className="character-health">
                <h3 className="character-health-title">Max HP</h3>
                <p className="character-health-points">{props.data.HPValue}</p>
              </div>
              <div className="character-initiative">
                <h3 className="character-initiative-title">Init</h3>
                <p className="character-initiative-mod">{props.data.Initiative}</p>
              </div>
              <div className="character-speed">
                <h3 className="character-speed-title">Speed</h3>
                <p className="character-speed-value">{props.data.Speed}</p>
              </div>
              <div id="desc">{props.data.Description}</div>
            </div>
          </div>
          <div className="character-footer">
            <div className="character-personality">
            <h3>Personality</h3>
            <p className="character-personality-trait">{props.data.Personality}</p>
            <p className="character-personality-ideals">{props.data.Ideals}</p>
            <p className="character-personality-bonds">{props.data.Bonds}</p>
            <p className="character-personality-flaws">{props.data.Flaws}</p>
            </div>
            <div className="character-images">
              {portraitUrls.map(portraitUrl => (
                <img className="portrait" key={portraitUrls.indexOf(portraitUrl)} src={portraitUrl} alt="Not found." style={portraitStyle} /> 
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Character;


    // <div className="summary">

    //   <p>{props.description}</p>
    // </div>