import React from 'react';
import './Playground.css';
import { Player, Spellbook, WorldMap } from '../ContentSelector';
import { NewCharacterForm } from '../NewCharacterForm';
import useForm from 'react-hook-form';


const components = {
	player: Player,
	spellbook: Spellbook,
	worldmap: WorldMap
}

// const query = 'Aid';

const Playground = (props) => {
	const ElementOne = components['player'];
	const ElementTwo = components['spellbook'];
	const ElementThree = components['worldmap'];

// 	Initiating useForm and testing submit using console log
	const { register, handleSubmit } = useForm();
	const onSubmit = data => {
		// console.log(data);
		props.onResourceSelect(data.resource);
		props.onQuery(data.query);
	}

	let summary = null;
	let characterIds = null;
		if(props.playgroundType === 'DM') {
			characterIds = props.characters.map((character) => character.id);
			summary = (
			<option key="summary" value={characterIds} data-array={true} >
				Character Summary
			</option>
			)
		} else summary = null;

	return(
		<React.Fragment>
			<div className="main-header">
		        <h1>You are a {props.playgroundType}!</h1>
		        <button onClick={props.onReturn} value='' >Return</button>
			</div>
	        <div className="container" >
	        	<div className="flex-item">
	        		<div className="flex-item-header">
		        		<select 
		        			onChange={props.onCharSelect}
		        			data-value={props.selectedChar}
		        			className="select-css"
		        		>
		        		{props.characters.map(char => (
		        			<option key={char.id} value={char.id} data-array={false}>
		        		    	{char.name}
		        			</option>
		        			))}
		        		{summary}
		        		</select>
	        		</div>
	        		<div className="characterContainer">
		        		<ElementOne selectedChar={props.selectedChar} characters={props.characters} />
	        		</div>
	        		<div className="add-character">
	        			<NewCharacterForm onNewCharacter={props.onNewCharacter} />
	        		</div>
	        	</div>
	        	<div className="flex-item">
	        		<div className="flex-item-header">

{/*Using the react-hook-form instead of normal form have the react state be the "single source of truth" */}
					<form onSubmit={handleSubmit(onSubmit)}>
						<select className="select-css" 
							name="resource" 
							ref={register}
						>
							{props.resources.map(res => (
								<option key={res} value={res} >
									{res}
								</option>
							))}
						</select>
						<div>
							<input className="search" type="input" name="query" placeholder="Spell Name" ref={register} />
							<input className="my-button" type="submit" value="Search" />
						</div>
					</form>
	        		</div>
	        		<div className="spellContainer">
	        			<ElementTwo selectedResource={props.selectedResource} query={props.query} />
	        		</div>
	        	
	        	</div>
	        	<div className="flex-item">
	        		<div className="flex-item-header">
	        		<select 
	        			onChange={props.onMapSelect}
	        			value={props.selectedMap}
	        			className="select-css"
	        		>
	        		{props.maps.map(map => (
	        			<option key={map.id} value={map.id} >
	        				{map.name}
	        			</option>
	        			))}
	        		</select>
	        		</div>
	        		<div className="mapContainer">
		        		<ElementThree maps={props.maps} selectedMap={props.selectedMap} />
	        		</div>
	        	</div>
	        </div>
	        <button onClick={props.onReturn} value='' >Return</button>
		</React.Fragment>
	)
}

export default Playground;