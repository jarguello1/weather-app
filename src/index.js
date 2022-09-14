const myKey = '0e699be9156d5e418f4bde0cd73827d5';
let location = 'Miami';

let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${myKey}`
let temp;
let condition;
let feelsLike;
let humidity;

async function getWeather() {
    let response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData);
    temp =  (1.8*(weatherData.main.temp-273) + 32).toFixed(1);
    condition = weatherData.weather[0].main;
    humidity = weatherData.main.humidity;
    feelsLike = (1.8*(weatherData.main.feels_like-273) + 32).toFixed(1);
}

getWeather();

async function logWeather() {

}


function Weather(temp, condition) {
    
}