import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';

const style = {
	maxWidth: '1160px',
	margin: '0 auto',
	height: '65vh',
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
			<Marker name="Current location" />
		</Map>
	);
};

MapContainer.propTypes = {
	google: PropTypes.object.isRequired,
};

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBXpo2YMW1IttDu77X4rtLwFgq9IN5ftRc',
})(MapContainer);
