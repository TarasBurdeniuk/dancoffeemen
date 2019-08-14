import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const style = {
	width: '100%',
	height: '500px',
};

const MapContainer = ({ google }) => {
	return (
		<Map
			google={google}
			initialCenter={{
				lat: 50.42882,
				lng: 30.593976,
			}}
			style={style}
			zoom={14}
		>
			<Marker name={'Current location'} />

			<InfoWindow>
				<div></div>
			</InfoWindow>
		</Map>
	);
};

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBXpo2YMW1IttDu77X4rtLwFgq9IN5ftRc',
})(MapContainer);
