import axios from 'axios';
const API_KEY = '96e2aaad053b92ca595ce060d6482399';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?q=`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const url = `${ROOT_URL}${city},us&appid=${API_KEY}`;
	const request = axios.get(url);

	return {

		type: FETCH_WEATHER,
		payload: request
	};

} 

