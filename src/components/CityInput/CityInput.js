import React, { Component } from 'react';
import './CityInput.css';

class CityInput extends Component {
  state = {
    cityName: ''
  }

  submitCity(event) {
    event.preventDefault();
    const { cityName } = this.state;

    this.props.submitCityName(cityName);
  }

  inputCityValue(event) {
    this.setState({ cityName: event.target.value });
  }

  render() {
    return (
      <form onSubmit={event => this.submitCity(event)}>
        <input type="text" onChange={event => this.inputCityValue(event)} />
        <button type="submit">Rechercher</button>
      </form>
    )
  }
}

export default CityInput;