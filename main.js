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

eval("const myKey = '0e699be9156d5e418f4bde0cd73827d5';\nlet location = 'Miami';\n\nlet url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${myKey}`\nlet temp;\nlet condition;\nlet feelsLike;\nlet humidity;\n\nasync function getWeather() {\n    let response = await fetch(url);\n    const weatherData = await response.json();\n    console.log(weatherData.coord);\n    console.log(weatherData.main);\n    temp =  (1.8*(weatherData.main.temp-273) + 32).toFixed(1);\n    condition = weatherData.weather[0].main;\n    humidity = weatherData.main.humidity;\n    feelsLike = (1.8*(weatherData.main.feels_like-273) + 32).toFixed(1);\n\n    console.log(feelsLike);\n    \n}\n\ngetWeather();\n\nasync function logWeather() {\n\n}\n\n\nfunction Weather(temp, condition) {\n    \n}\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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