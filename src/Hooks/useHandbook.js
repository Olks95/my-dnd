import { useState, useEffect } from 'react';

export const useHandbook = (url) => {
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ data, setData ] = useState(null);
	// const [ url, setUrl ] = useState("https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/")

	// if(query) {
	// 	const newQuery = [];
	// 	const splitQuery = query.split(' ');
	// 	splitQuery.forEach(word => {
	// 		const upper = word.charAt(0).toUpperCase() + word.substring(1);
	// 		newQuery.push(upper);
	// 	})
	// 	setUrl(url + category + "/?name=" + newQuery);
	// } else {
	// 	setUrl(url + category);
	// }

	// let headers = new Headers();
	// headers.append('Accept', 'application/json');

	function sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
	}

	console.log(url)

		const fetchData = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(url, {
					method: "GET",
					mode: 'cors'
				});
				const json = await res.json();
				setData(json);
				setIsLoading(false);
			} catch(error) {
				setError(error);
			}
		};

	useEffect(() => {
		sleep(5000)
		fetchData();
	}, []);
	return [ data, error, isLoading ];
};