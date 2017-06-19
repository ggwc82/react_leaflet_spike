import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class LeafletMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: 33.9301310, 
      lng: -84.7667300,
      zoom: 13
    };
  }

  componentDidMount() {
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom} className="atlbike-map">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png' subdomains='abcd'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
          </Popup>
        </Marker>
      </Map>
    );
  }
}

export default LeafletMap;