import React, { Component } from 'react';

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
      <form className="input-group my-3 my-sm-5" onSubmit={event => this.submitCity(event)}>
        <input className="form-control" type="search" onChange={event => this.inputCityValue(event)}/>
        <div className="input-group-append">
          <button className="btn btn-success" type="submit">Rechercher</button>
        </div>
        
      </form>
    )
  }
}

export default CityInput;