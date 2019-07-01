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
		imgPath:
			'https://www.shambhalaschool.org/wp-content/uploads/2017/11/pp-hot-coffee-rf-istock.jpg',
	},
	{
		id: 2,
		imgPath: 'https://kabar.kg/site/assets/files/38765/1-1.jpg',
	},
	{
		id: 3,
		imgPath: 'https://riabir.ru/wp-content/uploads/2019/03/CHay.jpg',
	},
	{
		id: 4,
		imgPath: 'https://www.stanforddaily.com/wp-content/uploads/2016/05/coffee-grind.jpg',
	},
	{
		id: 5,
		imgPath:
			'https://s3.amazonaws.com/bncore/wp-content/uploads/2018/05/1010290878-Gusto-Cheap-12-e1545847595185.jpg',
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
