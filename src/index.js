import './style.css'
import { displayData } from './dom'
import { clearField } from './logic';
const cityWeather = function (city_name = 'Addis Ababa') {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=665d996c0995235e2a6538dc312d1922`, {
		method: 'GET',
		mode: 'cors'
	})
		.then(function (response) {
			if (!response.ok) {
				throw Error(response.statusText + ' - ' + response.url);
			}
			console.log(response);
			return response.json()

		}).then(function (result) {
			displayData(result);
			console.log(result);
		}).catch((e) => {
			console.log(e);
		});
}

window.onload = function () {
	const city_name = document.getElementById('city_name');
	const form = document.querySelector('form');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if (city_name.value === '') {
			const errorMessage = document.createElement('div')
			errorMessage.innerHTML = "Please Fill city name";
			document.body.append(errorMessage);

		}
		else {
			cityWeather(city_name.value);
			clearField()
		}
	})
}