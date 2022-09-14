const myKey = '0e699be9156d5e418f4bde0cd73827d5';
let location = 'Miami';
weatherArray = [];

console.log(location);

let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${myKey}`

function Weather(temp = 0, condition = 'clear', feelsLike = 0, humidity = 0) {
    this.temp = temp;
    this.condition = condition;
    this.feelsLike = feelsLike;
    this.humidity = humidity;

    this.getTemp = () => {
        return this.temp;
    }
}

async function getWeather() {
    let response = await fetch(url);
    const weatherData = await response.json();
    const temp =  (1.8*(weatherData.main.temp-273) + 32).toFixed(1);
    const condition = weatherData.weather[0].main;
    const humidity = weatherData.main.humidity;
    const feelsLike = (1.8*(weatherData.main.feels_like-273) + 32).toFixed(1);


    const currentWeather = new Weather(temp, condition, feelsLike, humidity);

    return currentWeather;
}

let currentWeather = getWeather();



const locationDisplay = document.getElementById('location');
const temp = document.getElementById('temp');
const condition = document.getElementById('condition');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');

function updateWeather() {
    locationDisplay.textContent = location;
    currentWeather.then(function(result) {
        temp.textContent = `Temperature :${result.temp} F`;
        condition.textContent = `Weather: ${result.condition}`;
        feelsLike.textContent = `Feels Like: ${result.feelsLike} F`;
        humidity.textContent = `Humidity: ${result.humidity}%`;
        console.log(result);
    })
}

updateWeather();

const inputBtn = document.getElementById('searchBtn')
const input = document.getElementById('term')

inputBtn.addEventListener('click', () => {
    location = input.value;
    input.value = "";
    url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${myKey}`
    currentWeather = getWeather();
    updateWeather();
})