import '../css/main.scss';
import '../index.html';
import service from './service.js';
import utilities from './utilities.js';
import {debounce} from 'lodash';

const search = document.querySelector(".github-search__input");
const list = document.querySelector(".github-search__list");

search.onkeydown = (event) => {
  if (event.keyCode === 40) {
    list.firstElementChild.focus();
  }
};

search.oninput = debounce((event) => {
  if (event.target.value.length > 1) {
    service(event.target.value)
      .then((res) => {
        utilities.emptyNode(list);
        utilities.addResults(res, list);
      })
      .catch(error => console.error('There was an error!', error.statusText));
  } else {
    utilities.emptyNode(list);
  }
}, 500);

list.onkeydown = (event) => {
  switch (event.keyCode || event.which) {
    case 13:
      document.activeElement.firstChild.click();
      break;
    case 38:
      if (document.activeElement.previousElementSibling) {
        document.activeElement.previousElementSibling.focus();
      }
      break;
    case 40:
      if (document.activeElement.nextElementSibling) {
        document.activeElement.nextElementSibling.focus();
      }
      break;
  }
};
