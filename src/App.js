import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import CityInput from './components/CityInput/CityInput';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    weatherData: null,
    cityError: false,
  }

  getWeather(cityName) {
    const apiKey = '942b001a12073846ceb89fb33e10be0b'
    if(cityName) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=fr&units=metric&appid=${apiKey}`)
      .then(response => {
        this.setState({weatherData: response.data, cityError: false});
      })
      .catch(() => {
        this.setState({cityError: true});
      });
    }
  }

  render(){
    let weatherCard = null;
    let error = null;

    if (this.state.weatherData) {
      weatherCard = (
        <WeatherCard weatherData={this.state.weatherData}/>
      );
    }

    if(this.state.cityError) {
      error = (
        <div class="alert alert-danger" role="alert">
          La ville que vous avez recherché n'a pas été trouvée.
        </div>
      );
    }

    return (
      <div className="App d-flex flex-column">
        <Header />
        <section className="flex-grow-1">
          <div className="container">
            {error}
            <CityInput submitCityName={cityName => this.getWeather(cityName)}/>
            {weatherCard}
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default App;
