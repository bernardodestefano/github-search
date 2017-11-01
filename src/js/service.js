import config from '../../config.json';
//TODO: add hint in readme about github token

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

module.exports = searchRequest;
