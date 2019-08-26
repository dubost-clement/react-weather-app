import React, {Component} from 'react';
import './App.css';
import CityInput from './components/CityInput/CityInput';
import WeatherCard from './components/WeatherCard/WeatherCard';

class App extends Component {
  state = {
    weatherData: null,
  }

  getWeather(cityName) {
    const apiKey = '942b001a12073846ceb89fb33e10be0b'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},FR&lang=fr&units=metric&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => this.setState({weatherData: data})); 
  }

  render(){
    let weatherCard = null;

    if (this.state.weatherData) {
      const { name, main, weather, sys } = this.state.weatherData;

      weatherCard = (
        <WeatherCard city={name} temp={main.temp} description={weather[0].description} humidity={main.humidity} sunset={sys.sunset}/>
      );
    }

    return (
      <div className="App">
        <h1>React weather</h1>
        <CityInput submitCityName={cityName => this.getWeather(cityName)}/>
        <div className="container">
          {weatherCard}
        </div>
      </div>
    )
  }
}

export default App;
