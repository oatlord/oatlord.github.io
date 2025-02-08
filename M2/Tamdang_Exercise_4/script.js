// Replace with your WeatherAPI key
const apiKey = '57d6ddd9a246cb8dfadbdf129d8b17c4';
// Change this to the city you want to search
const city = 'London'; 

function callAPI() {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        document.querySelector("#weather_city").textContent = data.location.name || 'N/A';
        document.querySelector("#weather_temperature").textContent = `${data.current.temp_c}°C` || 'N/A';
        document.querySelector("#weather_condition").textContent = data.current.condition.text || 'N/A';
    });
}

