const axios = require('axios');
const fs = require('fs');

async function getWeatherData(city){

    const apiKey = 'f32bc9d113d18edce0e828e145cda259';
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try{
        const response = await axios.get(apiUrl);
        const weatherData = response.data;
        return weatherData; 
    }catch(error){
        console.log("error in getting weather data");
    }
  
}

function basicDetails(weatherData){

    const Details = [];
    Details.push({
        "city" : weatherData.name,
        "id" : weatherData.id,
        "Temperature" : weatherData.main.temp+"°c",
        "Pressure" : weatherData.main.pressure,
        "Humidity" : weatherData.main.humidity,
        "WindSpeed" : weatherData.wind.speed
    });
    return Details;
}

async function displayWeather(city){
    try{
        const weatherData = await getWeatherData(city);
        // console.log(weatherData);

        const Details = basicDetails(weatherData);
        console.log(Details);
    }catch(error){
        console.log("No weather data");
    }

}

const city = "palani";
displayWeather(city);
