const myKey = '0e699be9156d5e418f4bde0cd73827d5';
let location = 'London';

let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${myKey}`

async function getWeather() {
    let response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData)
}