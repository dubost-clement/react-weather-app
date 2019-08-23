import React, {Component} from 'react';
import './App.css';
import CityInput from './components/CityInput';

class App extends Component {
  state = {
    weatherData: null,
  }

  getWeather(cityName) {
    const apiKey = '942b001a12073846ceb89fb33e10be0b'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=fr&units=metric&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => this.setState({weatherData: data}));
  }

  render(){
    return (
      <div className="App">
        <h1>React weather</h1>
        <CityInput submitCityName={cityName => this.getWeather(cityName)}/>
      </div>
    )
  }
}

export default App;
