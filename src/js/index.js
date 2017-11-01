import '../css/main.scss';
import '../index.html';
import config from '../../config.json';
//TODO: add hint in readme about github token

const search = document.querySelector(".github-search__input");
const list = document.querySelector(".github-search__list");
let delayTimer;

const emptyNode = (node) => node.innerHTML="";

const createItem = (item) => {
	const li = document.createElement("li");
	const link = document.createElement("a");
	const img = document.createElement("img");
	const span = document.createElement("span");

	li.classList.add('github-search__item');

	img.setAttribute('src', item.avatar_url);
	img.setAttribute('alt','user profile pic');
	img.classList.add('github-search__item__img');

	link.setAttribute('href', item.html_url);
	link.setAttribute('target', '_blanck');
	link.classList.add('github-search__item__link');

	span.classList.add('github-search__item__name');
	span.innerHTML = item.login;

	li.appendChild(link);
	link.appendChild(img);
	link.appendChild(span);

	return li;
}

const addResults = (results, node) => {
	for(const user of results) {
		node.appendChild(createItem(user));
	}
	node.firstElementChild.focus();
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
