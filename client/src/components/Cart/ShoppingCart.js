import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Clear from '@material-ui/icons/Clear';
import { PropTypes } from 'prop-types';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import { Link } from 'react-router-dom';
import { setQuantity, removeProduct } from '../../actions/basket';
import { calc } from '../../utills/func';

const lightPink = pink[300];
const strongPink = pink[500];
const moreStrongPink = pink[700];
const white = grey[0];
const strongGrey = grey[700];

const useStyles = makeStyles(theme => ({
	container: {
		margin: '1rem 0',
	},
	item: {
		borderBottom: '1px solid #eeeeee',
	},
	product: {
		padding: '2rem 0 2rem 1rem',
		textAlign: 'center',
		[theme.breakpoints.up('md')]: {
			textAlign: 'start',
		},
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
		color: strongGrey,
		'&:hover': {
			color: strongPink,
		},
	},
	price: {
		margin: '1rem 0',
		color: moreStrongPink,
	},
	quantityContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		whiteSpace: 'nowrap',
		margin: '.5rem 0',
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
		background: white,
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
		justifyContent: 'center',
	},
	deleteIcon: {
		width: '2.5rem',
		height: '2.5rem',
		color: strongGrey,
		cursor: 'pointer',
		'&:hover': {
			color: strongPink,
		},
	},
	available: {
		color: lightPink,
	},
}));

const ShoppingCart = props => {
	const { products, setQuantity, removeProduct } = props;

	const handleIncrement = prod => {
		const quantity = prod.addQuantity + 1;
		if (prod.addQuantity < prod.quantity) {
			setQuantity(prod, quantity);
		}
	};

	const handleDecrement = prod => {
		if (prod.addQuantity > 1) {
			const quantity = prod.addQuantity - 1;
			setQuantity(prod, quantity);
		}
	};

	const handleRemove = prod => {
		removeProduct(prod);
	};

	const classes = useStyles();

	const productsCart = products.map(product => (
		<Grid container key={product._id} className={classes.item}>
			<Grid item xs={11}>
				<Grid container className={classes.product}>
					<Grid item xs={12} md={3}>
						<Link to={`/products/${product._id}`}>
							<img
								src={product.image[0]}
								alt={product.model}
								className={classes.image}
							/>
						</Link>
					</Grid>
					<Grid item xs={12} md={5}>
						<Link to={`/products/${product._id}`}>
							<Typography
								variant="h6"
								component="h2"
								gutterBottom
								className={classes.brand}
							>
								{product.brand} {product.model}
							</Typography>
						</Link>
						<Typography variant="subtitle1">{product.specifications.size}</Typography>
						<Typography variant="h6" className={classes.price}>
							${product.price}
						</Typography>
						{product.quantity === 0 && (
							<Typography variant="subtitle1" className={classes.available}>
								Product is not available
							</Typography>
						)}
					</Grid>
					<Grid item xs={12} md={3} className={classes.quantityContainer}>
						<div className={classes.quantity}>
							<button
								type="button"
								className={`${classes.quantityChange} ${classes.quantityDecrement}`}
								onClick={() => handleDecrement(product)}
							>
								&mdash;
							</button>
							<input
								className={classes.quantityInput}
								type="text"
								value={product.addQuantity}
								disabled
							/>
							<button
								type="button"
								className={`${classes.quantityChange} ${classes.quantityIncrement}`}
								onClick={() => handleIncrement(product)}
							>
								&#xff0b;
							</button>
						</div>
					</Grid>
					<Grid item xs={12} md={1} className={classes.total}>
						<Typography variant="h5" className={classes.price}>
							{'$'}
							{calc(product.price, product.addQuantity)}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item xs={1}>
				<Grid container justify="flex-end">
					<Clear onClick={() => handleRemove(product)} className={classes.deleteIcon} />
				</Grid>
			</Grid>
		</Grid>
	));

	return (
		<>
			<Typography variant="h6" gutterBottom>
				Shopping cart
			</Typography>
			<Grid container justify="center" className={classes.container}>
				<Container maxWidth="lg">
					<Paper>{productsCart}</Paper>
				</Container>
			</Grid>
		</>
	);
};

ShoppingCart.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
	setQuantity: PropTypes.func.isRequired,
	removeProduct: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	products: state.basket.products,
});

const mapDispatchToProps = {
	setQuantity,
	removeProduct,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ShoppingCart);
