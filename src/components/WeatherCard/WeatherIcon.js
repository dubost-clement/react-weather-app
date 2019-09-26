import React from 'react';

const WeatherIcon = (props) => {
  let icon = ""

  if (props.weather === "ciel dégagé") {
    icon = "wi wi-day-sunny";
  }

  if (props.weather === "brume") {
    icon = "wi wi-fog";
  }

  if (props.weather === "brouillard") {
    icon = "wi wi-fog";
  }

  if (props.weather === "nuageux") {
    icon = "wi wi-cloudy";
  }

  if (props.weather === "peu nuageux") {
    icon = "wi wi-day-cloudy";
  }

  if (props.weather === "partiellement nuageux") {
    icon = "wi wi-day-cloudy";
  }

  if (props.weather === "couvert") {
    icon = "wi wi-cloud";
  }

  if (props.weather === "légère pluie") {
    icon = "wi wi-rain";
  }

  if (props.weather === "pluie très fine") {
    icon = "wi wi-rain";
  }

  if (props.weather === "pluie modérée") {
    icon = "wi wi-rain";
  }

  if (props.weather === "orage et pluie fine") {
    icon = "wi wi-thunderstorm";
  }

  return(
    <p id="weatherIcon" className="mb-0"><i className={icon}></i></p>
  );
};

export default WeatherIcon;