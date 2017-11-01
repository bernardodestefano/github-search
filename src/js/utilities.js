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

const emptyNode = (node) => (node.innerHTML='');

module.exports = {createItem, emptyNode};
