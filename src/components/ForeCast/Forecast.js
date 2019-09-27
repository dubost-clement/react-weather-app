import React from 'react';
import WeatherIcon from '../Weather/WeatherIcon';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/fr';
import 'weather-icons/css/weather-icons.min.css';
import './Forecast.css';

const FiveDays = (props) => {
  return(
    props.weatherData.map((weather, id) => (
      <div className="col-lg-2" key={id}>
        <div className="card forecast-card" >
          <div className="card-body text-center text-white font-weight-bold">
            <p className="card-title">{Math.round(weather.main.temp)}°</p>
            <WeatherIcon weather={weather.weather[0].description}/>
            <p className="card-subtitle mb-2 ">{weather.weather[0].description}</p>
            <p><Moment date={weather.dt} format="dddd Do MMMM" unix cest="Europe/Paris"/></p>
          </div>
        </div>
      </div>
    ))
  );
};

export default FiveDays;