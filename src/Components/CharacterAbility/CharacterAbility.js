import React from 'react';


export const CharAbility = ({
	ability,
	abilityMod,
	stil,
	data
}) => {
	return (
		<div className={stil + "-abilities"}>
		  <h2 className={stil + "-ability"}> {ability} </h2>
		  <p className={stil + "-ability-score"} id={ability}> {data[ability]} </p>
		  <p className={stil + "-ability-modifier"} id={ability+"Mod"}> {data[abilityMod]} </p>
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
	let cleanStatProficiency;
	if(typeof statProficiency === 'string') {
		cleanStatProficiency = statProficiency.replace(/\s+/g, '');
	};
	if(data[cleanStatProficiency] || statProficiency === true) {
		return (
			<p>{stat} {data[cleanStat]} </p>
		)
	} else return null;
}