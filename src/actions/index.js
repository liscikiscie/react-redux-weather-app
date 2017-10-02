import axios from 'axios';

const API_KEY = '3a062fa7a134e7e0d30f4cc741bc4bcd';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city, countryCode ) {
    const url = `${ROOT_URL}&q=${city},${countryCode}`;

    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}