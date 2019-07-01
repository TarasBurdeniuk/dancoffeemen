import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import image1 from './temporaryImages/image1.jpg';

const useStyles = makeStyles({
	container: {
		// background: '#fffb98',
	},
	product: {
		padding: '2rem 3rem',
	},
	image: {
		width: '5.4rem',
		height: '8rem',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	price: {
		marginTop: '1rem',
	},

	quantity: {
		display: 'inline-block',
		marginTop: '1rem',
		borderRadius: '5px',
		boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
	},
	quantityInput: {
		width: '4rem',
		padding: '.7rem',
		fontSize: '1.5rem',
		textAlign: 'center',
		border: 0,
		background: '#fff',
	},
	quantityChange: {
		width: '3rem',
		padding: '.7rem',
		textAlign: 'center',
		textShadow: '0 1px 0 rgba(#fff, .6)',
		fontSize: '1.5rem',
		border: '0 solid #dbdbdb',
		outline: 'none',
		background: '#f3f3f3',
		color: '#888',
		cursor: 'pointer',
		'&:hover': {
			background: '#e3e3e3',
			color: '#636363',
		},
	},
	quantityDecrement: {
		borderRadius: '5px 0 0 5px',
	},
	quantityIncrement: {
		borderRadius: '0 5px 5px 0',
	},
});

const CartContainer = props => {
	const { quantity, handleIncrement, handleDecrement } = props;

	const classes = useStyles();

	return (
		<Container maxWidth="lg" className={classes.container}>
			<Paper>
				<Grid container className={classes.product}>
					<Grid item xs={12} md={3}>
						<img src={image1} className={classes.image} alt="image1" />
					</Grid>
					<Grid item xs={12} md={4}>
						<Typography variant="h6" component="h2" gutterBottom>
							Lavazza Pienaroma
						</Typography>
						<Typography variant="subtitle1">500g</Typography>
						<Typography variant="h6" className={classes.price}>
							$18
						</Typography>
					</Grid>
					<Grid item xs={12} md={3}>
						<div>
							<div className={classes.quantity}>
								<button
									type="button"
									className={`${classes.quantityChange} ${classes.quantityDecrement}`}
									onClick={handleDecrement}
								>
									&mdash;
								</button>
								<input
									className={classes.quantityInput}
									type="text"
									value={quantity}
									disabled
								/>
								<button
									type="button"
									className={`${classes.quantityChange} ${classes.quantityIncrement}`}
									onClick={handleIncrement}
								>
									&#xff0b;
								</button>
							</div>
						</div>
					</Grid>
				</Grid>
				<hr />
				<div className={classes.product}>Cart</div>
			</Paper>
		</Container>
	);
};

export default CartContainer;
