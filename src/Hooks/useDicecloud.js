import { useState, useEffect } from 'react';

export const useDicecloud = (characterId) => {
	
	const [ isLoading, setIsLoading ] = useState(false);
	const [ fetchedData, setFetchedData ] = useState([]);

	// headers.append('Authorization', getToken());
	// All available character information can be fetched using the following url setup:

	// characterId = 'mLdzKAN7AAGt3qPP2';
	let characterUrls = [];
	const APIkey = 'QRryrEJEF27FDcPsZgWZZvhHhf5a3t';
	if(Array.isArray(characterId)) {
		characterUrls = characterId.map(charId => `https://dicecloud.com/vmix-character/${charId}?key=${APIkey}`);
	} else {
		characterUrls[0] = `https://dicecloud.com/vmix-character/${characterId}?key=${APIkey}`;
	}
	// console.log(characterUrls);
	
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
	let headers = new Headers();
	headers.append('Accept', 'application/json');

	useEffect(() => {
		setIsLoading(true);
		// console.log(characterUrls);

		Promise.all(characterUrls.map(url => {
			// console.log('Sending Http request for ' + url);
		    return fetch(proxyUrl + url, {
		    	method: "GET",
		    	headers: headers,
		    	mode: 'cors'
		    }).then(response => response.json())
		})).then(results => {
	      		setIsLoading(false);
	      		// console.log(results)
	        	setFetchedData(results ? results : new Error('Failed for reasons'));
      		})
	      .catch(err => {
	        console.log(err);
	        setIsLoading(false);
	      });
	}, [ characterId ]);

    return [ isLoading, fetchedData ];
}