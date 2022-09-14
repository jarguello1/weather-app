/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const myKey = '0e699be9156d5e418f4bde0cd73827d5';\nlet location = 'Miami';\nweatherArray = [];\n\nconsole.log(location);\n\nlet url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${myKey}`\n\nfunction Weather(temp = 0, condition = 'clear', feelsLike = 0, humidity = 0) {\n    this.temp = temp;\n    this.condition = condition;\n    this.feelsLike = feelsLike;\n    this.humidity = humidity;\n\n    this.getTemp = () => {\n        return this.temp;\n    }\n}\n\nasync function getWeather() {\n    let response = await fetch(url);\n    const weatherData = await response.json();\n    const temp =  (1.8*(weatherData.main.temp-273) + 32).toFixed(1);\n    const condition = weatherData.weather[0].main;\n    const humidity = weatherData.main.humidity;\n    const feelsLike = (1.8*(weatherData.main.feels_like-273) + 32).toFixed(1);\n\n\n    const currentWeather = new Weather(temp, condition, feelsLike, humidity);\n\n    return currentWeather;\n}\n\nlet currentWeather = getWeather();\n\n\n\n\nconst temp = document.getElementById('temp');\nconst condition = document.getElementById('condition');\nconst feelsLike = document.getElementById('feelsLike');\nconst humidity = document.getElementById('humidity');\n\nfunction updateWeather() {\n    currentWeather.then(function(result) {\n        temp.textContent = `Temperature :${result.temp} F`;\n        condition.textContent = `Weather: ${result.condition}`;\n        feelsLike.textContent = `Feels Like: ${result.feelsLike} F`;\n        humidity.textContent = `Humidity: ${result.humidity}%`;\n        console.log(result);\n    })\n}\n\nupdateWeather();\n\nconst inputBtn = document.getElementById('searchBtn')\nconst input = document.getElementById('term')\n\ninputBtn.addEventListener('click', () => {\n    location = input.value;\n    input.value = \"\";\n    url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${myKey}`\n    currentWeather = getWeather();\n    updateWeather();\n})\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;