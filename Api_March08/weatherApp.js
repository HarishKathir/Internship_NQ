const axios = require('axios');

async function getWeatherData(city){

    const apiKey = 'f32bc9d113d18edce0e828e145cda259';
    const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try{
        const response = await axios.get(apiUrl);
        const weatherData = response.data;
        return [weatherData]; 
    }catch(error){
        console.log("error in getting weather data");
    }
  
}

const kelvinToCelius = (temperature) => {
    return (temperature - 273.15).toFixed(2);
}

async function displayWeather(city){
    try{
        const weatherData = await getWeatherData(city);

        const displayWeatherData = weatherData.map( weatherData => {
            return{ 
                "city" : weatherData.name,
                "id" : weatherData.id,
                "Temperature" : kelvinToCelius(weatherData.main.temp)+"°c",
                "Pressure" : weatherData.main.pressure + "pa",
                "Humidity" : weatherData.main.humidity + "%",
                "WindSpeed" : weatherData.wind.speed + "m/s" 
        };           
    }); 
    console.log(displayWeatherData);
    }catch(error){
        console.log("No weather data");
    }

}
const city = "palani";
displayWeather(city);

