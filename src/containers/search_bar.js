import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {

	constructor(props) {

		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {

		//console.log(event.target.value);
		this.setState({ term: event.target.value} );

	}

	onFormSubmit(event) {

		event.preventDefault();

		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render() {

		return (

			<div>
				<form onSubmit={this.onFormSubmit} className="input-group">
					<input
					placeholder="Search"
					className="form-control"
					value={ this.state.term } 
					onChange={ this.onInputChange } 
					 />
					<span className="input-group-btn">
						<button className="btn btn-secondry">Search</button>
					</span>
				</form>
			</div>

			);
	}
}

export default connect(null, { fetchWeather })(SearchBar);