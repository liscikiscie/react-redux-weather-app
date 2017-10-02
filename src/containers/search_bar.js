import React, { Component } from 'react';

class SearchBar extends Component {
    constructor( props ) {
        super(props);

        this.state = {
            searchTerm: ''
        };
    }

    onInputChange = ( event ) => {
        console.log(event.target.value);
        this.setState({
            searchTerm: event.target.value
        })
    };

    onFormSubmit = ( event ) => {
        event.preventDefault();

        //fetch data...
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

export default SearchBar;