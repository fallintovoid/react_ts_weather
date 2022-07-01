import React from 'react'
import { useCallback } from 'react';
import useRequest from '../hooks/https.hook';

const useWeatherApi = () => {
    const _apiBase = `https://api.openweathermap.org/data/2.5/`;
    const _apiKey = `appid=41871744201de27e1fc74e024c20d9f2`;
    const {request} = useRequest()

    const getCurrentWeather = () => {
        const res = request(`${_apiBase}weather?lat=52&lon=13&${_apiKey}`)
        return _transformCurrentWeather(res);
    }

    const _transformCurrentWeather = (res: any) => {
        return {
            name: res.name
        }
    }

    return {getCurrentWeather};
}

export default useWeatherApi;