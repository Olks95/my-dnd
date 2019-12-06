import React from 'react';


export const CharAbility = ({
	ability,
	abilityMod,
	data
}) => {
	return (
		<div className="character-abilities">
		  <h2 className="character-ability"> {ability} </h2>
		  <p className="character-ability-score" id={ability}> {data[ability]} </p>
		  <p className="character-ability-modifier" id={ability+"Mod"}> {data[abilityMod]} </p>
		</div>
	);
}

export const CharStat = ({
	stat,
	statProficiency,
	data
}) => {
	const cleanStat = stat.replace(/\s+/g, '');
	const cleanStatProficiency = statProficiency.replace(/\s+/g, '');
	return (
		<div className="round">
			<input className="character-stat-proficiency" type="checkbox" readOnly checked={data[cleanStatProficiency]}/>
			<label id={cleanStat + "-label"}></label>
			<span className="character-stat" id={cleanStat}>{data[cleanStat]}</span><span className="character-stat-text"> {stat}</span>
		</div>
	);
}

export const CharProf = ({
	stat,
	statProficiency,
	data
}) => {
	const cleanStat = stat.replace(/\s+/g, '');
	const cleanStatProficiency = statProficiency.replace(/\s+/g, '');
	if(data[cleanStatProficiency]) {
		return (
			<span>{stat} {data[cleanStat]} </span>
		)
	} else return null;
}