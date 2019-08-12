import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ImgMediaCard from './ProductCard';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
	{
		rate: 5,
		price: '234$', // must be value from data base
		name: 'Movenpick Espresso 1 кг', //  must be value from data base
		label: 'San Francisco – Oakland Bay Bridge, United States',
		imgPath: 'https://cdn.shopify.com/s/files/1/0113/4942/products/Illy-2.jpg?v=1484682775',
	},
	{
		rate: 5,
		price: '234$', // must be value from data base
		name: 'Movenpick Espresso 2 кг', //  must be value from data base
		label: 'Bird',
		imgPath:
			'https://target.scene7.com/is/image/Target/GUEST_9e5b7a1a-19b3-4db9-b9ce-5855f9172bfe?wid=488&hei=488&fmt=pjpeg',
	},
	{
		rate: 5,
		price: '234$', // must be value from data base
		name: 'Movenpick Espresso 3 кг', //  must be value from data base
		label: 'Bali, Indonesia',
		imgPath:
			'https://www.mk2shop.com/media/catalog/product/cache/1/image/1600x/040ec09b1e35df139433887a97daa66f/i/l/illy-coffee-capsules-iperespresso-monoarabica-brazil-18-pieces-cmally00000001000.jpg',
	},
	{
		rate: 5,
		price: '234$', // must be value from data base
		name: 'Movenpick Espresso 4 кг', //  must be value from data base
		label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
		imgPath: 'https://cdn.shopify.com/s/files/1/0113/4942/products/Illy-3.jpg?v=1484682815',
	},
	{
		rate: 5,
		price: '234$', // must be value from data base
		name: 'Movenpick Espresso 5 кг', //  must be value from data base
		label: 'Goč, Serbia',
		imgPath: 'https://shop.coles.com.au/wcsstore/Coles-CAS/images/8/0/9/8097061.jpg',
	},
	{
		rate: 5,
		price: '234$', // must be value from data base
		name: 'Movenpick Espresso 6 кг', //  must be value from data base
		label: 'San Francisco – Oakland Bay Bridge, United States',
		imgPath: 'https://cdn.shopify.com/s/files/1/0113/4942/products/Illy-2.jpg?v=1484682775',
	},
	{
		rate: 5,
		price: '234$', // must be value from data base
		name: 'Movenpick Espresso 7 кг', //  must be value from data base
		label: 'Bird',
		imgPath: 'https://cdn.shopify.com/s/files/1/0113/4942/products/Illy-3.jpg?v=1484682815',
	},
	{
		rate: 5,
		price: '234$', // must be value from data base
		name: 'Movenpick Espresso 8 кг', //  must be value from data base
		label: 'Bali, Indonesia',
		imgPath:
			'https://www.mk2shop.com/media/catalog/product/cache/1/image/1600x/040ec09b1e35df139433887a97daa66f/i/l/illy-coffee-capsules-iperespresso-monoarabica-brazil-18-pieces-cmally00000001000.jpg',
	},
	{
		rate: 5,
		price: '234$', // must be value from data base
		name: 'Movenpick Espresso 9 кг', //  must be value from data base
		label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
		imgPath: 'https://shop.coles.com.au/wcsstore/Coles-CAS/images/8/0/9/8097061.jpg',
	},
	{
		rate: 5,
		price: '234$', // must be value from data base
		name: 'Movenpick Espresso 10 кг', //  must be value from data base
		label: 'Goč, Serbia',
		imgPath:
			'https://target.scene7.com/is/image/Target/GUEST_9e5b7a1a-19b3-4db9-b9ce-5855f9172bfe?wid=488&hei=488&fmt=pjpeg',
	},
];

const useStyles = makeStyles(theme => ({
	root: {
		display: 'none',
		padding: '20px 0',
		flexGrow: 1,
		margin: '0 auto',
		fontFamily: "'Lato', 'Roboto', sans-serif",
	},
	title: {
		fontSize: 16,
		fontWeight: 400,
		textTransform: 'uppercase',
		marginBottom: 15,
	},
	img: {
		height: 200,
		display: 'block',
		maxWidth: 200,
		overflow: 'hidden',
		width: '100%',
	},
	carusel: {
		display: 'flex',
		justifyContent: 'center',
		'& div': {
			margin: 10,
		},
	},
	swipeBlock: {
		display: 'flex',
		justifyContent: 'center',
		maxWidth: '100%',
	},
	'@media screen and (min-width:768px)': {
		root: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			width: 768,
			padding: '30px 0',
		},
		title: {
			fontSize: 20,
			fontWeight: 500,
			marginBottom: 15,
		},
	},
	'@media screen and (min-width:1160px)': {
		root: {
			width: 1160,
			padding: '40px 0',
		},
		title: {
			fontSize: 26,
			fontWeight: 600,
			marginBottom: 40,
		},
		container: {
			padding: '30px 0',
		},
	},
}));

const MultiCarouselPage = ({ header }) => {
	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	const maxSteps = tutorialSteps.length;

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleStepChange = step => {
		setActiveStep(step);
	};

	const cardProduct = tutorialSteps.map(item => (
		<div>
			<ImgMediaCard key={item.label} src={item.imgPath} name={item.name} price={item.price} />
		</div>
	));

	const productList =
		document.documentElement.clientWidth >= 1160
			? cardProduct.map((item, i, arr) => (
					<div key={i} className={classes.carusel}>
						{arr[i]}
						{arr[i + 1 > arr.length - 1 ? i - (arr.length - 1) : i + 1]}
						{arr[i + 2 > arr.length - 1 ? i - (arr.length - 2) : i + 2]}
						{arr[i + 3 > arr.length - 1 ? i - (arr.length - 3) : i + 3]}
					</div>
			  ))
			: cardProduct.map((item, i, arr) => (
					<div key={i} className={classes.carusel}>
						{arr[i]}
						{arr[i + 1 > arr.length - 1 ? i - (arr.length - 1) : i + 1]}
					</div>
			  ));

	return (
		<div className={classes.root}>
			<h1 className={classes.title}>{header}</h1>
			<div className={classes.swipeBlock}>
				<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
					{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
				</Button>
				<AutoPlaySwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents
				>
					{productList}
				</AutoPlaySwipeableViews>
				<Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
					{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
				</Button>
			</div>
		</div>
	);
};

export default MultiCarouselPage;
