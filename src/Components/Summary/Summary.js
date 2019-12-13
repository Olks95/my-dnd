import React from 'react';
import './Summary.css';

import { CharAbility, /*CharStat,*/ CharProf } from '../CharacterAbility';

const Summary = props => {
	const abilities = ["Strength", "Dexterity", "Constitution", "intelligence", "Wisdom", "Charisma"];
	const skills = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight Of Hand", "Stealth", "Survival"];

	// const passivePerceptions = (charIndex) => {
	// 	return (
	// 		<CharStat stat="passivePerception" statProficiency="PerceptionProficiency" data={props.data[charIndex][0]}  key={"passPerception " + props.data[charIndex][0].Name} />
	// 	)
	// }
	// const stat = (stat, charIndex) => {
	// 	return (
	// 		<CharStat stat={stat} statProficiency={stat+"Proficiency"} data={props.data[charIndex][0]}  key={stat + ' ' + props.data[charIndex][0].Name} />
	// 	)
	// }

	const proficiencies = (stat, charIndex) => {
    	return (
			<CharProf stat={stat} statProficiency={stat+"Proficiency"} data={props.data[charIndex][0]}  key={stat+ "Proficiency " + props.data[charIndex][0].Name} />
    	)
    }

    const abilityScores = (ability, charIndex) => {
    	return (
    		<CharAbility ability={ability} abilityMod={ability+'Mod'} data={props.data[charIndex][0]} stil="summary" key={ability + props.data[charIndex][0].Name} />
    	)
    }

    const characterSummary = (charIndex) => {
    	return (
    		<React.Fragment key={"Character " + charIndex + " out of " + props.data.length} >
		    	{/*<p>{props.data[charIndex][0].Name}</p>
		    	<p>Proficiency Bonus: {}</p>*/}
		    	<div className="summary-item">
			    	<h1 className="summary-name" >{props.data[charIndex][0].Name}</h1>
		    		{abilities.map(ability => abilityScores(ability, charIndex))}
		    		<div className="summary-proficiencies">
				    	{abilities.map(ability => proficiencies(ability + " Save", charIndex))}
				    	{skills.map(charStat => proficiencies(charStat, charIndex))}
				    	<CharProf stat="passivePerception" statProficiency={true} data={props.data[charIndex][0]}  key={"passPerception " + props.data[charIndex][0].Name} />
		    		</div>
		    	</div>
	    	</React.Fragment>
    	)
    }



	return (
	    <React.Fragment>
	    	{props.data.map((charData, index) => (
	    		characterSummary(index))
	    	)}
	    </React.Fragment>
	)
}

export default Summary;