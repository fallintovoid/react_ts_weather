import React, { useEffect } from 'react'
import ThisDay from './components/ThisDay/ThisDay/ThisDay'
import useWeatherApi from '../../services/useWeatherApi';
import { WeatherInfo } from './components/WeatherInfo';

import s from './Home.module.scss';

const Home: React.FC = () => {
  const {getCurrentWeather} = useWeatherApi()
  
  useEffect(() => {
      console.log(getCurrentWeather())
  }, [])
  return (
    <div className={s.thisday}>
        <ThisDay/>
        <WeatherInfo />
    </div>
  )
}

export default Home