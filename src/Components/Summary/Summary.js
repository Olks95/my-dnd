import React from 'react';

import { CharacterAbility, /*CharStat,*/ CharProf } from '../CharacterAbility';

const Summary = props => {
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

    // const abilityScores()

    const characterSummary = (charIndex) => {
    	return (
    		<React.Fragment key={props.data[charIndex][0].Name} >
	    		<div className="character-summary">
			    	<p>{props.data[charIndex][0].Name}</p>
			    	<p>Proficiency Bonus: {}</p>
			    	{abilities.map(charStat => proficiencies(charStat + " Save", charIndex))}
			    	{skills.map(charStat => proficiencies(charStat, charIndex))}
			    	<p><CharProf stat="passivePerception" statProficiency="PerceptionProficiency" data={props.data[charIndex][0]}  key={"passPerception " + props.data[charIndex][0].Name} /></p>
	    		</div>
	    	</React.Fragment>
    	)
    }


	const abilities = ["Strength", "Dexterity", "Constitution", "intelligence", "Wisdom", "Charisma"];
	const skills = ["Acrobatics", "Animal Handling", "Arcana", "Athletics", "Deception", "History", "Insight", "Intimidation", "Medicine", "Nature", "Perception", "Performance", "Persuasion", "Religion", "Sleight Of Hand", "Stealth", "Survival"];

	return (
	    <React.Fragment>
	    	<h1>SUMMARY BABY</h1>
	    	{props.data.map((charData, index) => characterSummary(index))}
	    </React.Fragment>
	)
}

export default Summary;