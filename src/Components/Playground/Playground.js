import React from 'react';
import './Playground.css';
import { Player } from '../ContentSelector/ContentSelector.js';

const components = {
	player: Player
}

const Playground = (props) => {
	const Content = components['player'];
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
		        		<Content characters={props.characters} selectedChar={props.selectedChar} />
	        		</div>
	        	</div>
	        	<div className="flex-item">
	        		Second Element
	        	</div>
	        	<div className="flex-item">
	        		Third Element
	        	</div>
	        </div>
	        <button onClick={props.onReturn} value='' >Return</button>
		</React.Fragment>
	)
}

export default Playground;