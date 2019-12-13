import { useState, useEffect } from 'react';

export const useDicecloud = (characters) => {
	
	const [ isLoading, setIsLoading ] = useState(false);
	const [ fetchedData, setFetchedData ] = useState([]);

	let characterUrls = [];

	if(characters.length > 1) {
		characterUrls = characters.map(charObj => `https://dicecloud.com/vmix-character/${charObj.id}?key=${charObj.APIkey}`);
	} else if(characters.length === 1){
		characterUrls[0] = `https://dicecloud.com/vmix-character/${characters[0].id}?key=${characters[0].APIkey}`;
	} else {
		characterUrls = null;
	}
	// console.log(characterUrls);
	
	const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
	let headers = new Headers();
	headers.append('Accept', 'application/json');

	useEffect(() => {
		const abortController = new AbortController();
		if(characters.length === 0) {
			console.log('No character selected.')
		} else {
			setIsLoading(true);
			// console.log(characterUrls);

			Promise.all(characterUrls.map(url => {
				// console.log('Sending Http request for ' + url);
			    return fetch(proxyUrl + url, {
			    	method: "GET",
			    	headers: headers,
			    	mode: 'cors',
			    	signal: abortController.signal
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
		}
		return () => {
			abortController.abort();
		}
	}, [ characters ]);

    return [ isLoading, fetchedData ];
}