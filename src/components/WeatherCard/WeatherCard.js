import React from 'react';
import './WeatherCard.css';

const WeatherCard = (props) => {
    const temp = Math.round(props.temp);

    return(
        <div className="weather-card">
            <p>la météo à {props.city}</p>
            <p>la température est de : {temp}°</p>
            <p>{props.description}</p>
        </div>
    )
};

export default WeatherCard;