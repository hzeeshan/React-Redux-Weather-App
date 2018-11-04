import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';

class WeatherList extends Component {

	renderWeather(cityData) {

		const cityName = cityData.city.name;
		const temp = cityData.list.map(weather => weather.main.temp);
		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const lon = cityData.city.coord.lon;
		const lat = cityData.city.coord.lat;


		return (
				<tr key={ cityName }>
				<td> <GoogleMap lon={lon} lat={lat} /> {cityName} </td>
				<td><Chart data={temp} color="orange" unit="K" /></td>
				<td><Chart data={pressure} color="green" unit="hPa" /></td>
				<td><Chart data={humidity} color="black" unit="%" /></td>
				</tr>
		);
	} 

	render() {

		if(!this.props.weather) {

			return 'Loading...';
		}

		return (

			<div>
				<table className="table table-hover">
					<thead>
						<tr>
							<th>
								City
							</th>
							<th>Temperature(K)</th>
							<th>Pressure(hPa)</th>
							<th>Humidity(%)</th>
						</tr>
					</thead>
					<tbody>
						{ this.props.weather.map(this.renderWeather) }
					</tbody>
				</table>
			</div>

			);
	}
}

function mapStateToProps(state) {

	return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);

