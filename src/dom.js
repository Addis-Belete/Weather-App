const displayData = function (result) {
	const section = document.querySelector('section');
	const card = document.createElement('div');
	const cityName = document.createElement('h2');
	const description = document.createElement('h4');
	const temperature = document.createElement('p');
	const icons = document.createElement('i');
	description.innerHTML = result.weather[0].main;
	temperature.innerHTML = `${result.main.temp} ℉`;
	icons.innerHTML = result.weather[0].icon;
	cityName.innerHTML = result.name;
	card.append(cityName, description, temperature,
		icons)
	section.appendChild(card);
}

export { displayData }