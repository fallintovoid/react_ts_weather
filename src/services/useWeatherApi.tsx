import React from 'react'
import useRequest from '../hooks/https.hook';

const useWeatherApi = () => {
    const _apiBase = `https://api.openweathermap.org/data/2.5/`;
    const _apiKey = `appid=34f1b8d7a0c12c0e5b687287eefb451e`;
    const {request, loading, error} = useRequest()

    const getCurrentWeather = () => {
        const res = request(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${_apiKey}`)
        return _transformCurrentWeather(res);
    }

    const _transformCurrentWeather = (res: any) => {
        return {
            name: res.name
        }
    }

    return {getCurrentWeather, loading, error};
}

export default useWeatherApi;