function logWeatherAPI() {
	fetch(
		"http://api.openweathermap.org/data/2.5/weather?q=Tampa&APPID=7208fe965623c8f42299986e1f01866b",
		{ mode: "cors" }
	)
		.then(function (response) {
			return response.json();
		})
		.then(function (response) {
			console.log(response);
		});
}

logWeatherAPI();
