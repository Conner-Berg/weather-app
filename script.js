const locationInput = document.querySelector(".location-input");
const submit = document.querySelector(".location-submit");

function logWeatherAPI(event) {
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

submit.addEventListener("click", logWeatherAPI);
