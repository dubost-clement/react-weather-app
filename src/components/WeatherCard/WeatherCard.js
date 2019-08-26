import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
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
      <Moment date={props.sunset} format="HH:mm" unix cest="Europe/Paris"/>
    </div>
  )
};

export default WeatherCard;