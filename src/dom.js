/* eslint-disable camelcase */
/* eslint-disable func-names */
const displayData = function (result) {
  const cityName = document.querySelector('h2');
  const description = document.querySelector('h4');
  const temperature = document.querySelector('p');
  const feels = document.querySelector('.feels');
  const min_temp = document.querySelector('.temp_min');
  const max_temp = document.querySelector('.temp_max');
  const humidity = document.querySelector('.humidity');
  const icons = document.querySelector('img');
  icons.src = `https://openweathermap.org/img/w/${result.weather[0].icon}.png`;
  description.innerHTML = result.weather[0].main;
  temperature.innerHTML = `${result.main.temp} ℃`;
  icons.innerHTML = result.weather[0].icon;
  cityName.innerHTML = result.name;
  feels.innerHTML = `Feels_like:${result.main.feels_like} ℃ | `;
  min_temp.innerHTML = `Temp_min:${result.main.temp_min} ℃ | `;
  max_temp.innerHTML = `Temp_max:${result.main.temp_max} ℃ | `;
  humidity.innerHTML = `Humidity:${result.main.humidity}`;
};

const displayError = function () {
  const errorMessage = document.createElement('div');
  errorMessage.innerHTML = '<p id = "error">Please enter correct city name</p>';
  document.body.append(errorMessage);
  setTimeout(() => {
    errorMessage.innerText = '';
  }, 3000);
};

export { displayData, displayError };
