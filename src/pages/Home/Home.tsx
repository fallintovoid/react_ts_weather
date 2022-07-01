import React, { useEffect } from 'react'
import ThisDay from './components/ThisDay/ThisDay'
import useWeatherApi from '../../services/useWeatherApi';

type Props = {}

const Home = () => {
  const {getCurrentWeather, loading, error} = useWeatherApi();
  
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