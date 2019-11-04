import React from 'react';


export const CharacterAbility = ({
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

export const CharacterSaveOrSkill = ({
	stat,
	statProficiency,
	data
}) => {
	const noSpaceStat = stat.replace(/\s+/g, '');
	const noSpaceStatProficiency = statProficiency.replace(/\s+/g, '');
	return (
		<div className="round">
			<input className="character-stat-proficiency" type="checkbox" readOnly checked={data[noSpaceStatProficiency]}/>
			<label id={noSpaceStat + "-label"}></label>
			<span className="character-stat" id={noSpaceStat}>{data[noSpaceStat]}</span><span className="character-stat-text"> {stat}</span>
		</div>
	);
}