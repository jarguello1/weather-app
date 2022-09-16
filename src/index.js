// Info for weather api
const myKey = '0e699be9156d5e418f4bde0cd73827d5';
let location = 'Miami';
let url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${myKey}`

// object function for weather data
function Weather(temp = 0, condition = 'clear', code = 800, feelsLike = 0, humidity = 0) {
    this.temp = temp;
    this.condition = condition;
    this.code = code;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
}

//async function to pull weather data from API
async function getWeather() {
    let response = await fetch(url, {mode: 'cors'});
    const weatherData = await response.json();
    const temp =  (1.8*(weatherData.main.temp-273) + 32).toFixed(1);
    const condition = weatherData.weather[0].main;
    const code = weatherData.weather[0].id;
    const humidity = weatherData.main.humidity;
    const feelsLike = (1.8*(weatherData.main.feels_like-273) + 32).toFixed(1);


    const currentWeather = new Weather(temp, condition, code, feelsLike, humidity);

    return currentWeather;
}

//store data in new object
let currentWeather = getWeather();

//Add information to divs for display
const locationDisplay = document.getElementById('location');
const temp = document.getElementById('temp');
const condition = document.getElementById('condition');
const feelsLike = document.getElementById('feelsLike');
const humidity = document.getElementById('humidity');

function updateWeather() {
    main.className = '';
    locationDisplay.textContent = location;
    currentWeather.then(function(result) {
        temp.textContent = `Temperature :${result.temp} F`;
        condition.textContent = `Weather: ${result.condition}`;
        main.classList.add(`wc${result.code}`);
        feelsLike.textContent = `Feels Like: ${result.feelsLike} F`;
        humidity.textContent = `Humidity: ${result.humidity}%`;
    })
    console.log(url);
}

//run intial function
updateWeather();

// Functions for search bar
const inputBtn = document.getElementById('searchBtn')
const input = document.getElementById('term')

inputBtn.addEventListener('click', () => {
    location = input.value;
    input.value = "";
    url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${myKey}`
    currentWeather = getWeather();
    updateWeather();
})
