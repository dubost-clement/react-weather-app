import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const Gmap = (props) => {
  return(
    <Map
      google={props.google}
      initialCenter={{lat:props.markerPosition.lat, lng:props.markerPosition.lon}}
      center={{lat:props.markerPosition.lat, lng:props.markerPosition.lon}}
      zoom={6}>
      <Marker
        position={{lat:props.markerPosition.lat, lng:props.markerPosition.lon}}
      />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: ("AIzaSyD_TRsuZe937XLeMc4TflEvtqvAJXlzoNY")
})(Gmap);