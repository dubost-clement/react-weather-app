import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './WeatherCard.css';
import Actual from './Actual/Actual'
import Gmap from './Gmap/Gmap';

const WeatherCard = (props) => {
  return (
    <div className="container">
      <div className="row mt-sm-5">
        <div className="col-lg-8">
          <Actual weatherData={props.weatherData} />
        </div>
        <div className="gmap col-lg-4 mt-3 mt-lg-0">
          <div className="rounded" id="g-map">
            <Gmap markerPosition={props.weatherData.coord} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default WeatherCard;