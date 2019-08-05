import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import ShoppingCart from './ShoppingCart';
import { loadLocalStorageProducts, setShippingAddress, createOrder } from '../../actions/basket';
import pink from '@material-ui/core/colors/pink';

const moreStrongPink = pink[700];
const strongPink = pink[500];

const useStyles = makeStyles(theme => ({
	layout: {
		maxWidth: 1160,
		padding: '10px 5px 20px',
		boxSizing: 'border-box',
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			maxWidth: 1160,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	stepper: {
		padding: theme.spacing(3, 16, 5),
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
	price: {
		color: moreStrongPink,
		textAlign: 'end',
		padding: 5,
	},
	step: {
		display: 'none',
	},
	'@media screen and (min-width:768px)': {
		step: {
			display: 'block',
		},
	},
	'@media screen and (min-width:1160px)': {
		layout: {
			padding: theme.spacing(3, 16, 5),
		},
	},
}));

const steps = ['Shopping cart', 'Shipping address', 'Payment details', 'Review your order'];

const getStepContent = step => {
	switch (step) {
		case 0:
			return <ShoppingCart />;
		case 1:
			return <AddressForm />;
		case 2:
			return <PaymentForm />;
		case 3:
			return <Review />;
		default:
			throw new Error('Unknown step');
	}
};

const Checkout = ({
	loadLocalStorageProducts,
	products,
	user,
	setShippingAddress,
	shippingAddress,
	createOrder,
}) => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = useState(0);
	if (!localStorage.shoppingCart) {
		localStorage.setItem('shoppingCart', '[]');
	}
	const localStorageProducts = JSON.parse(localStorage.shoppingCart);
	useEffect(() => {
		loadLocalStorageProducts(localStorageProducts);
		if (user) {
			setShippingAddress({
				name: user.name,
				email: user.email,
				contactPhone: user.phone,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleNext = () => {
		setActiveStep(activeStep + 1);
		if (activeStep === 3) {
			const totalPrice = calculateSum();
			createOrder(shippingAddress, products, totalPrice);
		}
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	const calculateSum = () => {
		let sum = 0;
		products.forEach(product => {
			const prodSum = product.price * product.addQuantity;
			sum = Math.round(sum * 1000 + prodSum * 1000) / 1000;
		});
		return sum;
	};
	let check = false;

	const checkForms = form => {
		const {
			name,
			email,
			city,
			street,
			houseNumber,
			contactPhone,
			cardNumber,
			expDate,
			cvv,
		} = form;
		if (
			!name ||
			!email ||
			!city ||
			!street ||
			!houseNumber ||
			!contactPhone ||
			!cardNumber ||
			!expDate ||
			!cvv
		) {
			check = true;
			return false;
		}
		return true;
	};

	if (activeStep === 3) {
		checkForms(shippingAddress);
	}

	return (
		<>
			<main className={classes.layout}>
				<Typography component="h1" variant="h4" align="center">
					Checkout
				</Typography>
				<Stepper activeStep={activeStep} className={classes.stepper}>
					{steps.map(label => (
						<Step key={label} className={classes.step}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<>
					{activeStep === steps.length ? (
						<>
							<Typography variant="h5" gutterBottom>
								Thank you for your order.
							</Typography>
							<Typography variant="subtitle1">
								Your order number is #. We have emailed your order confirmation, and
								will send you an update when your order has shipped.
							</Typography>
						</>
					) : (
						<>
							{getStepContent(activeStep)}
							<Typography variant="h5" className={classes.price}>
								{'Total price: $'}
								{calculateSum()}
							</Typography>
							{check && (
								<Typography
									variant="h5"
									style={{ color: strongPink, fontSize: 24 }}
								>
									Please fill all required fields
								</Typography>
							)}
							<div className={classes.buttons}>
								{activeStep !== 0 && (
									<Button onClick={handleBack} className={classes.button}>
										Back
									</Button>
								)}
								<Button
									variant="contained"
									color="primary"
									defaultValue={steps[activeStep]}
									disabled={calculateSum() === 0 || check}
									onClick={() => handleNext()}
									className={classes.button}
								>
									{activeStep === steps.length - 1 ? 'Place order' : 'Next'}
								</Button>
							</div>
						</>
					)}
				</>
			</main>
		</>
	);
};

const mapStateToProps = state => ({
	products: state.basket.products,
	shippingAddress: state.basket.shippingAddress,
	user: state.auth.user,
});

const mapDispatchToProps = {
	loadLocalStorageProducts,
	setShippingAddress,
	createOrder,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Checkout);
