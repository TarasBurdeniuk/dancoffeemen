import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import grey from '@material-ui/core/colors/grey';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const white = grey[50];

const tutorialSteps = [
	{
		id: 1,
		imgPath: 'photo/mainPage/mainCarusel/coffee1.jpg',
	},
	{
		id: 2,
		imgPath: 'photo/mainPage/mainCarusel/coffee2.jpg',
	},
	{
		id: 3,
		imgPath: 'photo/mainPage/mainCarusel/coffee3.jpg',
	},
	{
		id: 4,
		imgPath: 'photo/mainPage/mainCarusel/coffee4.jpg',
	},
	{
		id: 5,
		imgPath: 'photo/mainPage/mainCarusel/coffee5.jpg',
	},
	{
		id: 6,
		imgPath: 'photo/mainPage/mainCarusel/coffee6.jpg',
	},
	{
		id: 7,
		imgPath: 'photo/mainPage/mainCarusel/coffee7.jpg',
	},
	{
		id: 8,
		imgPath: 'photo/mainPage/mainCarusel/coffee8.jpg',
	},
	{
		id: 9,
		imgPath: 'photo/mainPage/mainCarusel/coffee9.jpg',
	},
	{
		id: 10,
		imgPath: 'photo/mainPage/mainCarusel/coffee10.jpg',
	},
	{
		id: 11,
		imgPath: 'photo/mainPage/mainCarusel/coffee11.jpg',
	},
	{
		id: 12,
		imgPath: 'photo/mainPage/mainCarusel/coffee12.jpg',
	},
	{
		id: 13,
		imgPath: 'photo/mainPage/mainCarusel/coffee13.jpg',
	},
	{
		id: 14,
		imgPath: 'photo/mainPage/mainCarusel/coffee14.jpg',
	},
	{
		id: 15,
		imgPath: 'photo/mainPage/mainCarusel/coffee15.jpg',
	},
	{
		id: 16,
		imgPath: 'photo/mainPage/mainCarusel/coffee16.jpg',
	},
	{
		id: 17,
		imgPath: 'photo/mainPage/mainCarusel/coffee17.jpg',
	},
	{
		id: 18,
		imgPath: 'photo/mainPage/mainCarusel/coffee18.jpg',
	},
	{
		id: 19,
		imgPath: 'photo/mainPage/mainCarusel/coffee19.jpg',
	},
	{
		id: 20,
		imgPath: 'photo/mainPage/mainCarusel/coffee20.jpg',
	},
];

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: '1440px',
		flexGrow: 1,
		margin: '0 auto',
	},
	header: {
		display: 'flex',
		alignItems: 'center',
		height: 50,
		paddingLeft: theme.spacing(4),
		backgroundColor: theme.palette.background.default,
	},
	img: {
		height: '500px',
		display: 'block',
		overflow: 'hidden',
		width: '100%',
		objectFit: 'cover',
	},
	customButtonLeft: {
		position: 'absolute',
		top: '45%',
		left: '10px',
		color: white,
	},
	customButtonRight: {
		position: 'absolute',
		top: '45%',
		right: '10px',
		color: white,
	},
	customDiv: {
		position: 'relative',
	},
}));

const SwipeableTextMobileStepper = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = tutorialSteps.length;

	function handleNext() {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	}

	function handleBack() {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	}

	function handleStepChange(step) {
		setActiveStep(step);
	}

	return (
		<div className={classes.root}>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
				interval="4000"
				springConfig={{
					duration: '1s',
					easeFunction: 'cubic-bezier(0.35, 0.7, 0.8, 1)',
					delay: '0s',
				}}
			>
				{tutorialSteps.map((step, index) => (
					<div key={step.id} className={classes.customDiv}>
						<Button
							key={step.imgPath.slice(0, 10)}
							size="large"
							onClick={handleBack}
							disabled={activeStep === 0}
							className={classes.customButtonLeft}
						>
							{theme.direction === 'rtl' ? (
								<KeyboardArrowRight />
							) : (
								<KeyboardArrowLeft />
							)}
						</Button>
						{Math.abs(activeStep - index) <= 2 ? (
							<img className={classes.img} src={step.imgPath} alt={step.label} />
						) : null}
						<Button
							key={step.imgPath.slice(10, 15)}
							size="large"
							onClick={handleNext}
							disabled={activeStep === maxSteps - 1}
							className={classes.customButtonRight}
						>
							{theme.direction === 'rtl' ? (
								<KeyboardArrowLeft />
							) : (
								<KeyboardArrowRight />
							)}
						</Button>
					</div>
				))}
			</AutoPlaySwipeableViews>
		</div>
	);
};

export default SwipeableTextMobileStepper;
