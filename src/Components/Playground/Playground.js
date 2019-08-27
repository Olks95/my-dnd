import React from 'react';
import './Playground.css';
import { Player, Spellbook, WorldMap } from '../ContentSelector/ContentSelector.js';


const components = {
	player: Player,
	spellbook: Spellbook,
	worldmap: WorldMap
}

const query = 'Aid';

const Playground = (props) => {
	const ElementOne = components['player'];
	const ElementTwo = components['spellbook'];
	const ElementThree = components['worldmap'];
	return(
		<React.Fragment>
	        <h1>You are a {props.playgroundType}!</h1>
	        <div className="container" >
	        	<div className="flex-item">
	        		<select 
	        			onChange={props.onCharSelect}
	        			value={props.selectedChar}
	        		>
	        		{props.characters.map(char => (
	        			<option key={char.id} value={char.id}>
	        		    	{char.name}
	        			</option>
	        			))}
	        		</select>
	        		<div className="content">
		        		<ElementOne characters={props.characters} selectedChar={props.selectedChar} selectedResource={props.selectedResource} />
	        		</div>
	        	</div>
	        	<div className="flex-item">
	        	<select 
	        			onChange={props.onCharSelect}
	        			value={props.selectedChar}
	        		>
	        		{props.characters.map(char => (
	        			<option key={char.id} value={char.id}>
	        		    	{char.name}
	        			</option>
	        			))}
	        		</select>
	        		<div>
	        			<ElementTwo selectedChar={props.selectedChar} selectedResource={props.selectedResource} query={query} />
	        		</div>
	        	
	        	</div>
	        	<div className="flex-item">
	        	<select 
	        			onChange={props.onCharSelect}
	        			value={props.selectedChar}
	        		>
	        		{props.characters.map(char => (
	        			<option key={char.id} value={char.id}>
	        		    	{char.name}
	        			</option>
	        			))}
	        		</select>
	        		<div>
		        		<ElementThree characters={props.characters} selectedChar={props.selectedChar} />
	        		</div>
	        	</div>
	        </div>
	        <button onClick={props.onReturn} value='' >Return</button>
		</React.Fragment>
	)
}

export default React.memo(Playground);