import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Clear from '@material-ui/icons/Clear';

const useStyles = makeStyles({
	container: {
		margin: '1rem 0',
	},
	item: {
		borderBottom: '1px solid #eeeeee',
	},
	product: {
		padding: '2rem 1rem',
	},
	image: {
		width: '8rem',
		height: '8rem',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	brand: {
		display: 'inline-block',
		cursor: 'pointer',
		'&:hover': {
			color: '#f50057',
		},
	},
	price: {
		margin: '1rem 0',
	},
	quantityContainer: {
		display: 'flex',
		alignItems: 'center',
		whiteSpace: 'nowrap',
		marginBottom: '.5rem',
	},
	quantity: {
		display: 'inline-block',
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
	total: {
		display: 'flex',
		alignItems: 'center',
	},
});

const CartContainer = props => {
	const { quantity, products, handleIncrement, handleDecrement } = props;

	const classes = useStyles();

	const productsCart = products.map(product => (
		<Grid container key={product.id} className={classes.item}>
			<Grid item xs={11}>
				<Grid container className={classes.product}>
					<Grid item xs={12} md={3}>
						<img src={product.src} alt={product.id} className={classes.image} />
					</Grid>
					<Grid item xs={12} md={5}>
						<Typography
							variant="h6"
							component="h2"
							gutterBottom
							className={classes.brand}
						>
							{product.brand}
						</Typography>
						<Typography variant="subtitle1">500g</Typography>
						<Typography variant="h6" className={classes.price}>
							${product.price}
						</Typography>
					</Grid>
					<Grid item xs={12} md={3} className={classes.quantityContainer}>
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
					</Grid>
					<Grid item xs={12} md={1} className={classes.total}>
						<Typography variant="h5">${product.price * quantity}</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={1}>
				<Clear />
			</Grid>
		</Grid>
	));

	return (
		<Grid container justify="center" className={classes.container}>
			<Container maxWidth="lg">
				<Paper>{productsCart}</Paper>
			</Container>
		</Grid>
	);
};

export default CartContainer;
