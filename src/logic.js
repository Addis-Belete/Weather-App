/* eslint-disable camelcase */
const clearField = () => {
	const city_name = document.getElementById('city_name');
	city_name.value = '';
}

const toFreneheit = (value) => {
	return Math.floor(value * 1.8 + 32)
}

export { clearField, toFreneheit }

