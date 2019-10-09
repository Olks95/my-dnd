import React from 'react';
import { useDicecloud } from '../../Hooks/useDicecloud';
// import { usePlayersHandbook } from '../../Hooks/usePlayersHandbook';
import { useHandbook } from '../../Hooks/useHandbook';
import { RenderSpellbook } from '../RenderSpellbook';

import Character from '../Character';

export const Player = (props) => {
	const [ isLoading, fetchedData ] = useDicecloud(props.selectedChar);
  	let loadedCharacter = null;

	if(fetchedData) {
	    loadedCharacter = {
	      name: fetchedData[0].Name,
	      alignment: fetchedData[0].Alignment,
	      race: fetchedData[0].Race,
	      dndClass: fetchedData[0].Class.split(" "),
	      gender: fetchedData[0].Gender,
	      imgUrl: fetchedData[0].PictureURL,
	      // description: fetchedData[0].Description
	    };
	  }

  	let content = <p>Loading characters...</p>;
	
  	if(!isLoading && fetchedData && fetchedData.length > 0) {
  		content = (
			<React.Fragment>
				<Character 
					name={loadedCharacter.name}
					alignment={loadedCharacter.alignment}
					race={loadedCharacter.race}
					dndClass={loadedCharacter.dndClass}
					gender={loadedCharacter.gender}
					imgUrl={loadedCharacter.imgUrl}
					// description={loadedCharacter.description} 
					/>
			</React.Fragment>
		)
  	}
  	return content;
}

export const Spellbook = (props) => {
	const [ fetchedData, error, isLoading ] = useHandbook('spells','Aid');

  	let content = <p>Loading spells...</p>;
  	if(!isLoading && fetchedData && !error) {
  		content = (
			<React.Fragment>
				<h1> Spellbook coming soon...</h1>
				<RenderSpellbook />
			</React.Fragment>
		)
	} else if(error) {
		console.log(error)
	}
	return content;
}

export const WorldMap = (props) => {
  	let content = <p>Loading characters...</p>;	

		content = (
			<React.Fragment>
				<h1> WorldMap coming soon...</h1>

			</React.Fragment>
		)
	return content;
}