import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


const style = {
	width: '100%',
	height: '300px'
}

export class MapContainer extends Component {
	render() {
	  return (
		<Map google={this.props.google} 
		initialCenter={{
            lat: 50.428820,
            lng: 30.593976
		  }} 
		  style = {style} zoom={14}>
   
		  <Marker onClick={this.onMarkerClick}
				  name={'Current location'} />
   
		  <InfoWindow onClose={this.onInfoWindowClose}>
			  <div>
			  </div>
		  </InfoWindow>
		</Map>
	  );
	}
  }

  export default GoogleApiWrapper({
	apiKey: ('AIzaSyBXpo2YMW1IttDu77X4rtLwFgq9IN5ftRc')
  })(MapContainer)