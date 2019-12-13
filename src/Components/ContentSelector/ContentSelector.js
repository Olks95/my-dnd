import React from 'react';
import { useDicecloud } from '../../Hooks/useDicecloud';
// import { usePlayersHandbook } from '../../Hooks/usePlayersHandbook';
import { useHandbook } from '../../Hooks/useHandbook';
import { RenderSpellbook } from '../RenderSpellbook';
import { RenderMap } from '../RenderMap';

import Character from '../Character';
import Summary from '../Summary';
import './ContentSelector.css';
import './Character.css';


export const Player = (props) => {
	const [ isLoading, fetchedData ] = useDicecloud(props.selectedChar);

  	let content = <p>Loading characters...</p>;
	
  	if(props.characters.length === 0) {
  		content = (
  			<h1>Please add a character using the form below...</h1>)
  	} else if (props.selectedChar === null) {
  		content = (
  			<h1>Please select a character above.</h1>
  		)
  	} else if(!isLoading && fetchedData && fetchedData.length > 0) {
		// console.log(fetchedData.length);
  		if(fetchedData.length > 1) {
  		content = (
			<React.Fragment>
				<div className="summary-parent">
					<Summary
						data={fetchedData}
					/>
				</div>
			</React.Fragment>
		)} else {
  		content = (
			<React.Fragment>
				<Character 
					data={fetchedData[0][0]}
				/>
			</React.Fragment>
		)
  	}
  	}
  	return content;
}

export const Spellbook = (props) => {
	const [ fetchedData, error, isLoading ] = useHandbook(props.selectedResource, props.query);

  	let content = <p>Loading {props.selectedResource}</p>;
  	if(!isLoading && fetchedData && !error) {
  		content = (
			<React.Fragment>
				<RenderSpellbook 
					selectedResource={props.selectedResource}
					data={fetchedData}
				/>
			</React.Fragment>
		)
	} else if(error) {
		console.log(error)
	}
	return content;
}

export const WorldMap = (props) => {
	return (
		<React.Fragment>
			<RenderMap maps={props.maps} selectedMap={props.selectedMap} />
		</React.Fragment>
	)
}