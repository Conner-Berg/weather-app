const locationInput = document.querySelector(".location-input");
const submit = document.querySelector(".location-submit");
const logBtn = document.querySelector(".log-form");
const weatherOutput = document.querySelector(".weather-output");
const locationOutput = document.querySelector(".location-output");
const tempCurrent = document.querySelector(".temp-current");
const tempHigh = document.querySelector(".temp-high");
const tempLow = document.querySelector(".temp-low");
const humidity = document.querySelector(".humidity");

function logWeatherInfo(event) {
	event.preventDefault();
	fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&APPID=7208fe965623c8f42299986e1f01866b`,
		{ mode: "cors" }
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			console.log(response);
		});
}

function getWeatherInfo(event) {
	event.preventDefault();
	let weatherInfo;
	fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&APPID=7208fe965623c8f42299986e1f01866b`,
		{ mode: "cors" }
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			return (weatherInfo = response);
		})
		.then(function () {
			document.querySelector(".weather-output").style.border =
				"1px solid #eee";
			locationOutput.textContent = `${weatherInfo.name}, ${weatherInfo.sys.country}`;
			tempCurrent.textContent = `Current: ${convertKelvinToF(
				weatherInfo.main.temp
			)} °F`;
			tempHigh.textContent = `High: ${convertKelvinToF(
				weatherInfo.main.temp_max
			)} °F`;
			tempLow.textContent = `Low: ${convertKelvinToF(
				weatherInfo.main.temp_min
			)} °F`;
			humidity.textContent = `Humidity: ${weatherInfo.main.humidity} %`;
		});

	// locationOutput.textContent = `${weatherInfo}`;
	// tempCurrent.textContent = `${convertKelvinToF(weatherInfo.main.temp)} °F`;
	// tempHigh.textContent = `${convertKelvinToF(weatherInfo.main.temp_max)} °F`;
	// tempLow.textContent = `${convertKelvinToF(weatherInfo.main.temp_min)} °F`;
	// humidity.textContent = `${weatherInfo.main.humidity} %`;
}

function convertKelvinToF(temp) {
	return Math.round((((temp - 273.15) * 9) / 5 + 32) * 10) / 10;
}

submit.addEventListener("click", getWeatherInfo);
logBtn.addEventListener("click", logWeatherInfo);
