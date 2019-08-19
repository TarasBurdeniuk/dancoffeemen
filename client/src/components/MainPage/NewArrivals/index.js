import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import ImgMediaCard from './ProductCard';
import Spinner from '../../Loading';
import { addToBasket } from '../../../actions/basket';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '20px 0',
		flexGrow: 1,
		margin: '0 auto',
		fontFamily: "'Lato', 'Roboto', sans-serif",
	},
	title: {
		fontSize: 16,
		fontWeight: 500,
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
});

const NewArrivals = ({ newArrivals, addToBasket }) => {
	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	const maxSteps = newArrivals ? newArrivals.length : 10;

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleStepChange = step => {
		setActiveStep(step);
	};

	const cardProduct = newArrivals
		? newArrivals.map(product => (
				<div>
					<ImgMediaCard
						key={product._id}
						src={product.image[0]}
						name={`${product.brand} ${product.model}`}
						price={product.price}
						handleClick={() => addToBasket({ ...product, addQuantity: 1 })}
						_id={product._id}
					/>
				</div>
		  ))
		: [];

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
					</div>
			  ));

	return (
		<div className={classes.root}>
			<h2 className={classes.title}>NEW ARRIVALS</h2>
			<div className={classes.swipeBlock}>
				<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
					{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
				</Button>
				<AutoPlaySwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={activeStep}
					onChangeIndex={handleStepChange}
					enableMouseEvents
					interval="3000"
					springConfig={{
						duration: '1s',
						easeFunction: 'cubic-bezier(0.35, 0.7, 0.8, 1)',
						delay: '0s',
					}}
				>
					{!productList.length ? <Spinner /> : productList}
				</AutoPlaySwipeableViews>
				<Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
					{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
				</Button>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	newArrivals: state.product.newArrivals,
});

const mapDispatchToProps = {
	addToBasket,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(NewArrivals);
