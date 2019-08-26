import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faThermometerThreeQuarters, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
import './WeatherCard.css';

const WeatherCard = (props) => {
  const temp = Math.round(props.temp);

  return (
    <div className="weather-card">
      <p><FontAwesomeIcon icon={faGlobeAmericas} size="2x" />{props.city}</p>
      <p><FontAwesomeIcon icon={faThermometerThreeQuarters} size="2x" />{temp}°</p>
      <p>{props.description}</p>
      <p><FontAwesomeIcon icon={faTint} size="2x" />{props.humidity}%</p>
    </div>
  )
};

export default WeatherCard;