import '../css/main.scss';
import '../index.html';
import service from './service.js';
import utilities from './utilities.js';
import {debounce} from 'lodash';

const search = document.querySelector(".github-search__input");
const list = document.querySelector(".github-search__list");


const addResults = (results, node) => {
	for(const user of results) {
		node.appendChild(utilities.createItem(user));
	}
};

search.onkeydown = (event) => {
  if (event.keyCode === 40) {
    list.firstElementChild.focus();
  }
};

document.querySelector('.github-search__input').oninput = debounce((event) => {
  if (event.target.value.length > 1) {
    service(event.target.value)
      .then((res) => {
        utilities.emptyNode(list);
        addResults(res, list);
      })
      .catch(error => console.error('There was an error!', error.statusText));
  } else {
    utilities.emptyNode(list);
  }
}, 500);
