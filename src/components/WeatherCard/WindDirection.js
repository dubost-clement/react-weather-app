import React from 'react';

const WindDirection = (props) => {
  let deg = null

  if(props.wind >= 0 && props.wind < 22.5) {
    deg = "Nord"
  }

  if(props.wind >= 22.5 && props.wind < 67.5) {
    deg = "Nord-Ouest"
  }

  if(props.wind >= 67.5 && props.wind < 112.5) {
    deg = "Est"
  }

  if(props.wind>= 112.5 && props.wind < 157.5) {
    deg = "Sud-Est"
  }

  if(props.wind >= 157.5 && props.wind < 202.5) {
    deg = "Sud"
  }

  if(props.wind >= 202.5 && props.wind < 247.5) {
    deg = "Sud-Ouest"
  }

  if(props.wind >= 247.5 && props.wind < 292.5) {
    deg = "Ouest"
  }

  if(props.wind >= 292.5 && props.wind < 337) {
    deg = "Nord-Ouest"
  }

  if(props.wind >= 337 && props.wind < 360) {
    deg = "Nord"
  }

  return(
    <p className="mb-1">Direction {deg}</p>
  );
};

export default WindDirection;