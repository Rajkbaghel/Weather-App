import { useState } from 'react';
import './App.css';
import { WEATHER_API_KEY, WEATHER_API_URL } from './component/Api';
import Search from './component/Search';
import CurrentWeather from './component/current-weather/current-weather';
import Forecast from './component/forecast/Forecast';

function App() {

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const onSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const CurrentWeatherfetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const Forecastfetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

    Promise.all([CurrentWeatherfetch, Forecastfetch])
      .then(async (response) => {
        const WeatherResponse = await response[0].json();
        const ForecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...WeatherResponse });
        setForecast({ city: searchData.label, ...ForecastResponse });
      })
      .catch((err) => console.log(err));
  }
  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className='container'>
      <Search onSearchChange={onSearchChange}></Search>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;