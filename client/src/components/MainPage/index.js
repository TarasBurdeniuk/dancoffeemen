import React from 'react';
import SwipeableTextMobileStepper from './KaruselMaterial';
import ImgMediaCard from './BrandsGrid';
import NewArrivals from './NewArrivals';

const MainPage = () => {
	return (
		<div>
			<SwipeableTextMobileStepper />
			<ImgMediaCard />
			<NewArrivals />
		</div>
	);
};

export default MainPage;
