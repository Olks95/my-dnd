import { useState, useEffect } from 'react';

export const useHandbook = (category, query) => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ queryResult, setQueryResult ] = useState(null);

	const getQuery = () => {
		let newUrl = '';
		let newQuery = [];
		if(query) {
			const splitQuery = query.split(' ');
			splitQuery.forEach(word => {
				const upper = word.charAt(0).toUpperCase() + word.substring(1);
				newQuery.push(upper);
			});
			newUrl = 'https://cors-anywhere.herokuapp.com/https://dnd5eapi.co/api/' + category + '/?name=' + newQuery.join('+');
		} else {
			newUrl = 'https://cors-anywhere.herokuapp.com/https://dnd5eapi.co/api/' + category;
		}
		return [ newUrl, newQuery.join(' ') ];
	}

	let headers = new Headers();
	headers.append('Accept', 'application/json');

	const fetchData = ([url, newQuery], abortController) => {
		setIsLoading(true);
		fetch(url, {
			method: "GET",
			headers: headers,
			signal: abortController.signal
		})
		.then(response => response.json())
		.then(data => {
			if(data.count === 1) {
				// The API changed how they answered queries... This used to work...
				fetch('https://cors-anywhere.herokuapp.com/' + data.results[0]['url'], {
      				method: "GET",
      				headers: headers,
      				mode: 'cors',
      				signal: abortController.signal
      			})
      			.then(response => response.json())
      			.then(data => {
      				setIsLoading(false);
					setQueryResult(data);
      			})
      			.catch(error => {
      				console.log('2: ' + error);
      				setIsLoading(false);
      				setError(error);
      			})
			} else if (data.count > 1) {
				// Had to add this when the API changed how it responded to queries...
				const queriedObject = data.results.find(object => object.name === newQuery);
				let finalUrl;
				if (queriedObject) {
					finalUrl = queriedObject.url;
					fetch('https://cors-anywhere.herokuapp.com/https://dnd5eapi.co' + finalUrl, {
	      				method: "GET",
	      				headers: headers,
	      				mode: 'cors',
	      				signal: abortController.signal
	      			})
	      			.then(response => response.json())
	      			.then(data => {
	      				setIsLoading(false);
						setQueryResult(data);
	      			})
	      			.catch(error => {
	      				console.log('2: ' + error);
	      				setIsLoading(false);
	      				setError(error);
	      			})
				} else {
					console.log('Nothing found. Make sure you use the right resource')
					setIsLoading(false);
				}
			} else {
				console.log('Nothing found. Make sure you use the right resource')
				setIsLoading(false);
			}
		})
		.catch(error => {
			console.log('1: ' + error);
			setIsLoading(false);
			setError(error);
		})
	};

	useEffect(() => {
		const abortController = new AbortController();
		fetchData(getQuery(), abortController)
		return () => {
			abortController.abort();
		}
	}, [category, query]);
	return [ queryResult, error, isLoading ];
};