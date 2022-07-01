import useRequest from '../hooks/https.hook';

const useWeatherApi = () => {
    const _apiBase = `https://api.openweathermap.org/data/2.5/`;
    const _apiKey = `appid=34f1b8d7a0c12c0e5b687287eefb451e`;
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