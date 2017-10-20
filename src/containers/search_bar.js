import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor( props ) {
        super(props);

        this.state = {
            searchTerm: ''
        };
    }

    onInputChange = ( event ) => {
        // console.log(event.target.value);
        this.setState({
            searchTerm: event.target.value
        })
    };

    onFormSubmit = ( event ) => {
        event.preventDefault();

        //fetch data...
        this.props.fetchWeather(this.state.searchTerm);
        this.setState({
            searchTerm: ''
        })
    };

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Chose cities to check the forecast"
                    className="form-control"
                    value={this.state.searchTerm}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}


function mapDispatchToProps( dispatch ) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

//null = no state to pass
export default connect(null, mapDispatchToProps)(SearchBar);