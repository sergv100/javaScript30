
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
const information = document.querySelector('.info');

let cities = [];

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

const prom = fetch(endpoint)
				.then(blob => blob.json())
				.then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
	return cities.filter( place => {
		const regex = new RegExp(wordToMatch, 'gi');
		return place.city.match(regex) || place.state.match(regex);
	});
};

function displayMatches() {
	const matchArray = findMatches(this.value, cities);
	const html = matchArray.map(place => {
		const regex = RegExp(this.value, 'gi');
		const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
		const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
		return `
			<li>
				<span class="name">${cityName}, ${stateName}</span>
				<span class="population">${numberWithCommas(place.population)}</span>
			</li>
		`;
	}).join('');
	suggestions.innerHTML = html;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// const listItems = suggestions.getElementsByTagName('li');
// console.log(listItems);
// Array.from(listItems).forEach( item => item.addEventListener('click', showInformation) );

// function showInformation() {
// 	console.log(this.value);
// }