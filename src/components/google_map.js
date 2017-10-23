import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() {
        // console.log(google.maps);
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return (
            //this.refs.map only in this component
            <div ref="map"/>
        );
    }
}

export default GoogleMap;