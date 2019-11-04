import React from 'react';
import './Playground.css';
import { Player, Spellbook, WorldMap } from '../ContentSelector';
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

	return(
		<React.Fragment>
	        <h1>You are a {props.playgroundType}!</h1>
	        <button onClick={props.onReturn} value='' >Return</button>
	        <div className="container" >
	        	<div className="flex-item">
	        		<div className="flex-item-header">
		        		<select 
		        			onChange={props.onCharSelect}
		        			value={props.selectedChar}
		        			className="select-css"
		        		>
		        		{props.characters.map(char => (
		        			<option key={char.id} value={char.id}>
		        		    	{char.name}
		        			</option>
		        			))}
		        		</select>
	        		</div>
	        		<div className="characterContainer">
		        		<ElementOne selectedChar={props.selectedChar} />
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