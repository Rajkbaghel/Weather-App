import React from 'react';
import "./current-weather.css";


function CurrentWeather({ data }) {
    var direction;
    if (data.wind.deg < (360 - 338) && data.wind.deg <= 22) {
        direction = "North";
    } else if (data.wind.deg >= 23 && data.wind.deg <= 67) {
        direction = "NorthEast"
    } else if (data.wind.deg >= 68 && data.wind.deg <= 112) {
        direction = "East"
    } else if (data.wind.deg >= 113 && data.wind.deg <= 157) {
        direction = "SouthEast"
    } else if (data.wind.deg >= 158 && data.wind.deg <= 202) {
        direction = "South"
    } else if (data.wind.deg >= 203 && data.wind.deg <= 247) {
        direction = "SouthWest"
    } else if (data.wind.deg >= 248 && data.wind.deg <= 292) {
        direction = "West"
    } else if (data.wind.deg >= 293 && data.wind.deg <= 337) {
        direction = "NorthEast"
    }
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather-description'>{data.weather[0].description}</p>
                </div>
                <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`}></img>
            </div>
            <div className='bottom'>
                <p className='temprature'>{Math.round(data.main.temp)}°C</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Details</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'>{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>{data.wind.speed}mph</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind Direction</span>
                        <span className='parameter-value'>{direction}</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>{Math.round(data.main.humidity)}%</span>
                    </div>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>{Math.round(data.main.pressure)}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather;