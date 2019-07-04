import React from 'react';
import SwipeableTextMobileStepper from './KaruselMaterial';
import ImgMediaCard from './BrandsGrid';
import MultiCarouselPage from './MultiCarouselPage';

const MainPage = () => {
	return (
		<div>
			<SwipeableTextMobileStepper />
			<MultiCarouselPage header="new arrivals" />
			<ImgMediaCard />
			<MultiCarouselPage header="top rates" />
		</div>
	);
};

export default MainPage;
