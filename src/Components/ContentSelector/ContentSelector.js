import React from 'react';
import { useDicecloud } from '../../Hooks/useDicecloud';

import Character from '../Character/Character.js';

export const Player = (props) => {
	const [ isLoading, fetchedData ] = useDicecloud(props.characters[0]);
  	let loadedCharacter = null;

	if(fetchedData) {
		console.log(fetchedData[0].PictureURL)
	    loadedCharacter = {
	      name: fetchedData[0].Name,
	      alignment: fetchedData[0].Alignment,
	      race: fetchedData[0].Race,
	      dndClass: fetchedData[0].Class.split(" "),
	      gender: fetchedData[0].Gender,
	      imgUrl: fetchedData[0].PictureURL
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
					imgUrl={loadedCharacter.imgUrl} />
			</React.Fragment>
		)
  	}

	return content;
}