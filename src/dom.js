const displayData = function (result) {
	const section = document.querySelector('section');
	const card = document.createElement('div');
	card.innerHTML = `
<div class = "card">
<h2> ${result.name}</h2>
<h4>${result.weather[0].main}</h4>
<p>${result.main.temp} ℉</p>
<img src = "http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png">
</div>
`
	section.appendChild(card);
}
export { displayData }