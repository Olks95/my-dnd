import { useState, useEffect } from 'react';

export const usePlayersHandbook = (resource, query) => {
	
	const [ isLoading, setIsLoading ] = useState(false);
	const [ fetchedData, setFetchedData ] = useState(null);

	const url = "http://dnd5eapi.co/api/";
	let queryUrl;

//		http://dnd5eapi.co/api/spells/?name=Acid+Arrow
//		http://dnd5eapi.co/api/spells/1 -> Acid Splash

	if(query) {
		const newQuery = [];
		const splitQuery = query.split(' ');
		splitQuery.forEach(word => {
			const upper = word.charAt(0).toUpperCase() + word.substring(1);
			newQuery.push(upper);
		})
		queryUrl = url + resource + "/?name=" + newQuery;
	} else {
		queryUrl = url + resource;
	}
	console.log(resource);

	const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
	let headers = new Headers();
	headers.append('Accept', 'application/json');


	useEffect(() => {
		setIsLoading(true);
		
		console.log('Sending Http request for ' + proxyUrl + queryUrl);
		fetch(proxyUrl + queryUrl, {
	    	method: "GET",
	    	headers: headers,
	    	mode: 'cors'
	    })
      	.then(response => {
        	if (!response.ok) {
          		console.log(response.status)
	          	throw new Error('Failed to fetch query.');
	        }
	        console.log('Search status: ' + response.status)
	        return response.json()
     	})
      	.then(data => {
      		if(data.count === 1) {
      			fetch(proxyUrl + data.results[0]['url'], {
      				method: "GET",
      				headers: headers,
      				mode: 'cors'
      			})
      			.then(response => {
      				if(!response.ok) {
      					console.log(response.status)
      					throw new Error('Failed to fetch object.');
      				}
      				console.log('Final object pull status: ' + response.status)
      				return response.json()
      			})
		    	.then(result => {
		    		setIsLoading(false);
		    		console.log(result);
		      		setFetchedData(result ? result : new Error('Fetch failed for reasons'));
				})
      		} else if(data.count > 1) {
      			console.log(`Several ${resource} found.`);
      			setIsLoading(false);
      			const sentenceEnd = data.count > 5 ? '...' : '.';
      			const searchResults = data.results.slice(0, 5).map(result => {
      				return result.name;
      			})
      			setFetchedData(`${data.count} results: \n ${searchResults.join(', ') + sentenceEnd}`);
      		} else if(data) {
      			console.log(`No ${resource} found`);
      			setIsLoading(false);
      			setFetchedData(`There are no ${resource} with that name. Please try again.`)
      			return data;
      		} else throw new Error('No content');
      	})
      	.catch(err => {
	        console.log(err);
	        setIsLoading(false);
	    });
	}, []);

    return [ isLoading, fetchedData ];
}