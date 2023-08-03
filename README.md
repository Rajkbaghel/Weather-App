# Weather Forecast App Readme

This repository contains a Weather Forecast App built with React.js. The app fetches real-time weather data from the OpenWeatherMap API and displays current weather and forecast information for the selected city.

## Features
Search for cities and fetch their latitude and longitude coordinates using the React-Select library.<br>
Fetch and display current weather data, including temperature, weather description, wind speed, humidity, pressure, and wind direction.<br>
Display the daily weather forecast for the next seven days, including weather icons, descriptions, and temperature ranges.<br>
## Demo
You can see the live demo of the app here.<br>

## How to Use
Clone the repository to your local machine.<br>
Navigate to the project directory in the terminal.<br>
Run npm install to install the required dependencies.<br>
Obtain your RapidAPI key from RapidAPI and replace it in the Api.jsx file for the Geo API.<br>
Obtain your OpenWeatherMap API key from OpenWeatherMap and replace it in the Api.jsx file for the Weather API.<br>
Run npm start to start the development server.<br>
Open your web browser and go to http://localhost:3000 to access the app.<br>
## Project Structure
`App.js`: The main component of the app. It manages the state of current weather and forecast data and handles the search for cities.<br>
`Search.js`: A component using React-Select to search for cities and fetch their coordinates for weather data retrieval.<br>
`CurrentWeather.js`: A component that displays the current weather data, including weather description, temperature, wind speed, humidity, pressure, and wind direction.<br>
`Forecast.js`: A component that displays the daily weather forecast for the next seven days, including weather icons, descriptions, and temperature ranges.<br>
## Dependencies
### React.js<br>
### React-Select<br>
### react-accessible-accordion (used for the accordion in Forecast.js)<br>
### @mui/icons-material (for weather icons)<br>
### RapidAPI Key (Geo API)<br>
### OpenWeatherMap API Key (Weather API)<br>
## Contributing
Contributions to this project are welcome. Feel free to open issues or submit pull requests.<br>
