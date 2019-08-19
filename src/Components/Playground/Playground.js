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
	        		<select name="box1" id="box1">
	        			<option value="player">Choose me</option>
	        			<option value="destiny2">Bravery</option>
	        			<option value="destiny3">Cowardise</option>
	        		</select>
	        		<div className="content">
		        		<Content characters={props.characters} />
	        		</div>
	        	</div>
	        	<div className="flex-item">
	        		Second Element
	        	</div>
	        	<div className="flex-item">
	        		Third Element
	        	</div>
	        </div>
	        <button onClick={props.returnHandler} value='' >Return</button>
		</React.Fragment>
	)
}

export default Playground;