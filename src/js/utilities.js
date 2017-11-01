const createItem = (item) => {
	const li = document.createElement("li");
	const link = document.createElement("a");
	const img = document.createElement("img");
	const span = document.createElement("span");

	li.classList.add('github-search__item');
	li.setAttribute('tabIndex','0');

	img.setAttribute('src', item.avatar_url);
	img.setAttribute('alt','user profile pic');
	img.classList.add('github-search__item__img');

	link.setAttribute('href', item.html_url);
	link.setAttribute('target', '_blanck');
	link.classList.add('github-search__item__link');
	link.setAttribute('tabIndex','-1');

	span.classList.add('github-search__item__name');
	span.innerHTML = item.login;

	li.appendChild(link);
	link.appendChild(img);
	link.appendChild(span);

	return li;
}

const emptyNode = (node) => (node.innerHTML='');

const addResults = (results, node) => {
	for(const user of results) {
		node.appendChild(createItem(user));
	}
};

module.exports = {createItem, emptyNode, addResults};
