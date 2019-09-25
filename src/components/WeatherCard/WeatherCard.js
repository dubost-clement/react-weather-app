import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/fr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faThermometerThreeQuarters, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import './WeatherCard.css';
import Gmap from '../Gmap/Gmap';

const WeatherCard = (props) => {
  const { name, main, weather, sys, wind, dt, coord } = props.weatherData;
  const temp = Math.round(main.temp);
  const windSpeed = Math.round(wind.speed * 3.6);
 
  return (
    <div className="row mt-sm-5">
      <div className="col-lg-8">
        <div className="weather p-3 text-white rounded">
          <div className="row">
            <div className="col-6">
              <p className="mb-0"><FontAwesomeIcon icon={faGlobeAmericas} size="2x" />{name}</p>
            </div>

            <div className="col-6">
              <p className="text-right mb-0"><FontAwesomeIcon icon={faThermometerThreeQuarters} size="2x" />{temp}°</p>
            </div>
          </div>

          <div className="text-center mb-5">
            <p id="weatherIcon" className="mb-0"><i className="${this.icon}"></i></p>
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
              <p className="mb-1">Direction</p>
              <p>Vitesse {windSpeed} km/h</p> 
            </div>

            <div className="col-md-4 weather-data-last">
              <h3 className="h4 text-center mb-4 mt-3 mt-md-0">Divers</h3>
              <p className="mb-1">Pression {main.pressure}hPa</p>
              <p><FontAwesomeIcon icon={faTint} size="2x" />{main.humidity}%</p>
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
      </div>
      <div className="col-lg-4 mt-3 mt-lg-0">
        <div className="rounded" id="g-map">
          <Gmap markerPosition={coord}/>
        </div>
      </div>
    </div>
  )
};

export default WeatherCard;