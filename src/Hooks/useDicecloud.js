import { useState, useEffect } from 'react';

export const useDicecloud = (characterId) => {
	
	const [ isLoading, setIsLoading ] = useState(false);
	const [ fetchedData, setFetchedData ] = useState(null);

	// headers.append('Authorization', getToken());
	// All available character information can be fetched using the following url setup:

	// characterId = 'mLdzKAN7AAGt3qPP2';
	const APIkey = 'QRryrEJEF27FDcPsZgWZZvhHhf5a3t';
	const characterUrl = `https://dicecloud.com/vmix-character/${characterId}?key=${APIkey}`;



	useEffect(() => {
		setIsLoading(true);
		const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
		let headers = new Headers();
		headers.append('Accept', 'application/json');

		// console.log('Sending Http request for ' + characterUrl);
	    fetch(proxyUrl + characterUrl, {
	    	method: "GET",
	    	headers: headers,
	    	mode: 'cors'
	    })
	      .then(response => {
	        if (!response.ok) {
	          	console.log(response.status)
	          	throw new Error('Failed to fetch.');
	        }
	        // console.log(response)
	        return response.json()
	      })
	      .then(result => 
      		{
	      		setIsLoading(false);
	        	setFetchedData(result ? result : new Error('Failed for reasons'));
      		})
	      .catch(err => {
	        console.log(err);
	        setIsLoading(false);
	      });
	}, [ characterUrl, characterId ]);

    return [ isLoading, fetchedData ];
}