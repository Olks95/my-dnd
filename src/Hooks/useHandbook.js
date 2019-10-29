import { useState, useEffect } from 'react';

export const useHandbook = (category, query) => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ queryResult, setQueryResult ] = useState(null);

	const getQuery = () => {
		let newUrl = '';
		if(query) {
			const newQuery = [];
			const splitQuery = query.split(' ');
			splitQuery.forEach(word => {
				const upper = word.charAt(0).toUpperCase() + word.substring(1);
				newQuery.push(upper);
			});
			newUrl = 'https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/' + category + '/?name=' + newQuery.join('+');
		} else {
			newUrl = 'https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/' + category;
		}
		return newUrl;
	}

	let headers = new Headers();
	headers.append('Accept', 'application/json');

		const fetchData = (url) => {
			setIsLoading(true);
			fetch(url, {
				method: "GET",
				headers: headers,
				mode: 'cors'
			})
			.then(response => response.json())
			.then(data => {
				if(data.count === 1) {
					fetch('https://cors-anywhere.herokuapp.com/' + data.results[0]['url'], {
	      				method: "GET",
	      				headers: headers,
	      				mode: 'cors'
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
				} else if(data.count === 0) {
					console.log('Nothing found. Make sure you use the right resource')
					setIsLoading(false);
				} else {
					console.log('More than 1 result... To be dealt with in future version.')
					setIsLoading(false);
					setQueryResult(data);
				}
			})
			.catch(error => {
				console.log('1: ' + error);
				setIsLoading(false);
				setError(error);
			})
		};

	useEffect(() => {
		fetchData(getQuery());
	}, [category, query]);
	return [ queryResult, error, isLoading ];
};