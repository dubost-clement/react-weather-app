import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import CityInput from './components/CityInput/CityInput';
import Weather from './components/Weather/Weather';
import ForeCast from './components/ForeCast/Forecast';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    weatherData: null,
    fiveDays: null,
    cityError: false,
  }

  getWeather(cityName) {
    const apiKey = '942b001a12073846ceb89fb33e10be0b'
    if(cityName) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=fr&units=metric&appid=${apiKey}`)
      .then(response => {
        this.setState({weatherData: response.data, cityError: false});
        this.getFiveDays();
      })
      .catch(() => {
        this.setState({cityError: true});
      });
    }
  }

  getFiveDays() {
    const apiKey = '942b001a12073846ceb89fb33e10be0b'
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.weatherData.name}&lang=fr&units=metric&appid=${apiKey}`)
      .then(response => {
        const dailyData = response.data.list.filter(reading => reading.dt_txt.includes("15:00:00"))
        this.setState({fiveDays: dailyData})
      });
  }

  render(){
    let weather = null;
    let forecast = null;
    let error = null;

    if (this.state.weatherData) {
      weather = (
        <Weather weatherData={this.state.weatherData} />
      );
    }

    if (this.state.fiveDays) {
      forecast = (
        <ForeCast weatherData={this.state.fiveDays} />
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
            <CityInput submitCityName={cityName => this.getWeather(cityName)} />
          </div>
          {weather}
          <div className="container-fluid">
            <div className="row mt-sm-5 justify-content-center">
              {forecast}      
            </div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}

export default App;