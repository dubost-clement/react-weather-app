import React from 'react';
import './WeatherCard.css';

const WeatherCard = (props) => {
    return(
        <div className="weather-card">
            <p>la météo à {props.city}</p>
            <p>la température est de : {props.temp}°</p>
            <p>{props.description}</p>
        </div>
    )
};

export default WeatherCard;