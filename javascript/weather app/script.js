async function fetchWeatherData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da292f5449afd00c0a16dd53cba74ed7&units=metric`)
        // console.log(response);
        const data = await response.json()
        // console.log(data);
        return data

    } catch (error) {
        console.log(error);
    }
}

async function fetchWeatherForecastData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=da292f5449afd00c0a16dd53cba74ed7&units=metric`)
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
            document.getElementById("weather-image").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        })
        .catch((error) => {
            console.log(error);
        })

    fetchWeatherForecastData(cityName)
        .then((data) => {
            console.log(data);
            data.list.forEach((element) => {
                const parentDiv = document.getElementById("inner")
                const newDiv = document.createElement("div")
                let date = Date(element.dt)
                // console.log(date);
                const dateSlice = date.slice(4, 10)
                // console.log(dateSlice);
                let time = element.dt_txt
                // console.log(time);
                const hour = time.slice(11, 13)
                // console.log(hour);
                const hour_am_pm = hour >= 12 ? "PM" : "AM"
                newDiv.innerHTML = `<p>${dateSlice}</p><p>${hour}${hour_am_pm}</p> <p>${element.main.temp}</p>`
                parentDiv.appendChild(newDiv)
            })

        })
        .catch((error) => {
            console.log(error);
        })
})