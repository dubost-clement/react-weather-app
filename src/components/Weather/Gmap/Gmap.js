import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const Gmap = (props) => {
  const {lat, lon} = props.markerPosition;

  return(
    <Map
      google={props.google}
      initialCenter={{lat:lat, lng:lon}}
      center={{lat:lat, lng:lon}}
      zoom={6}>
      <Marker position={{lat:lat, lng:lon}} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD_TRsuZe937XLeMc4TflEvtqvAJXlzoNY")
})(Gmap);