import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/fr';
import 'weather-icons/css/weather-icons.min.css';
import WeatherIcon from '../WeatherIcon';
import WindDirection from '../WindDirection';

const Actual = (props) => {
  const { name, main, weather, sys, wind, dt } = props.weatherData;
  const temp = Math.round(main.temp);
  const windSpeed = Math.round(wind.speed * 3.6);

  return (
    <div className="weather p-3 text-white font-weight-bold rounded">
      <div className="row">
        <div className="col-6">
          <p className="mb-0"><i className="fas fa-globe-americas mr-1"></i>{name}</p>
        </div>

        <div className="col-6">
          <p className="text-right mb-0"><i className="fas fa-thermometer-three-quarters mr-1"></i>{temp}°</p>
        </div>
      </div>

      <div className="text-center mb-5">
        <WeatherIcon weather={weather[0].description}/>
        <p>{weather[0].description}</p>
      </div>

      <div className="row">
        <div className="col-md-4 weather-data">
          <h3 className="h4 text-center mb-4 mt-3 mt-md-0">Soleil</h3>
          <p className="mb-1">Lever <Moment date={sys.sunrise} format="HH:mm" unix cest="Europe/Paris"/></p>
          <p>Coucher <Moment date={sys.sunset} format="HH:mm" unix cest="Europe/Paris"/></p>
        </div>

        <div className="col-md-4 weather-data">
          <h3 className="h4 text-center mb-4 mt-3 mt-md-0">Vent</h3>
          <WindDirection wind={wind.deg}/>
          <p>Vitesse {windSpeed} km/h</p> 
        </div>

        <div className="col-md-4 weather-data-last">
          <h3 className="h4 text-center mb-4 mt-3 mt-md-0">Divers</h3>
          <p className="mb-1">Pression {main.pressure}hPa</p>
          <p><i className="fas fa-tint"></i>{main.humidity}%</p>
        </div>
      </div>
        
      <div className="row mt-5">
        <div className="col-md-6">
          <p className="mb-0"><Moment date={dt} format="dddd Do MMMM" unix cest="Europe/Paris"/></p>
        </div>

        <div className="col-md-6">
          <p className="mb-0 text-right" id="updateAt">Mise à jour à <Moment date={dt} format="HH:mm" unix cest="Europe/Paris"/></p>
        </div>
      </div>
    </div>
  );
};

export default Actual;