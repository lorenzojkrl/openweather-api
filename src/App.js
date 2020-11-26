import { useState } from 'react';
import './App.css';
import CardsContainer from './components/CardsContainer'
import Form from './components/Form'
import TodayCard from './components/TodayCard'

function App() {
  const [weatherData, setWeatherData] = useState([])
  const [userLocation, setUserLocation] = useState('Rome')
  const [backgroundImage, setBackgroundImage] = useState('')

  const bgImage = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    maxWidth: '800px',
    height: '115vh',
  }

  const mainContainer = {
    display: 'flex',
    justifyContent: 'space-around'
  }

  return (
    <div style={mainContainer}>
      <div style={bgImage}>
        <Form
          setWeatherData={setWeatherData}
          setUserLocation={setUserLocation}
          userLocation={userLocation}
          setBackgroundImage={setBackgroundImage}
        />
        <TodayCard
          weatherData={weatherData}
          setBackgroundImage={setBackgroundImage}
        />
        <CardsContainer weatherData={weatherData} />
      </div>
    </div>);

}

export default App;
