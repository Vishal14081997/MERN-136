async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da292f5449afd00c0a16dd53cba74ed7`)
        // console.log(response);
        const data = await response.json()
        // console.log(data);
        return data

    } catch (error) {
        console.log(error);
    }
}

document.getElementById("search-button").addEventListener("click", function () {
    let cityName = document.getElementById("input").value
    //    console.log(cityName);
    let weatherData = fetchWeatherData(cityName)
    weatherData
        .then((data) => {
            console.log(data);
            document.getElementById("city-name").innerText = data.name
            document.getElementById("current-temp").innerHTML = `${data.main.temp}<sup>o</sup>C`
            document.getElementById("min-max-temp").innerHTML = `${data.main.temp_min}<sup>o</sup>C/${data.main.temp_max}<sup>o</sup>C`
            document.getElementById("weather-image").src = ``
        })
        .catch((error) => {
            console.log(error);
        })
})