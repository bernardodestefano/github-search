import '../css/main.scss';
import '../index.html';
import config from '../../config.json';
//TODO: add hint in readme about github token

const search = document.querySelector(".github-search__input");
const list = document.querySelector(".github-search__list");
let delayTimer;

const emptyNode = (node) => node.innerHTML="";

const addResults = (results, node) => {
	//only for testing
	for(const user of results) {
		console.log(user);
	}
	//TODO
};

const searchRequest = (input) => {
	return new Promise( (resolve, reject) => {
		const api = 'https://api.github.com';
		const url = `${api}/search/users?q=${input}&access_token=${config.ACCESS_TOKEN}`;
		const http = new XMLHttpRequest();

		http.open("GET", url, true);
		http.setRequestHeader("Content-type", "application/json");
		http.onload = () => {
				if(http.readyState == 4 && http.status == 200) {
					const response = JSON.parse(http.responseText);
					resolve(response.items);
				} else {
					reject({ status: http.status });
				}
		}
		http.send();
	});
};

search.oninput = (event) => {
	clearTimeout(delayTimer);
	delayTimer = setTimeout(() => {
		if(event.target.value.length > 1 ) {
			searchRequest(event.target.value)
				.then((res) => {
					emptyNode(list);
					addResults(res, list)
				})
				.catch((error) => console.error('There was an error!', error.statusText))
		} else {
			emptyNode(list);
		}
  }, 1500);
};
