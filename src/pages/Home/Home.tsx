import React, { useEffect } from 'react'
import ThisDay from './components/ThisDay/ThisDay'
import useWeatherApi from '../../services/useWeatherApi';

const Home = () => {
  const {getCurrentWeather} = useWeatherApi()
  
  useEffect(() => {
      console.log(getCurrentWeather())
  }, [])
  return (
    <div>
        <ThisDay/>
    </div>
  )
}

export default Home