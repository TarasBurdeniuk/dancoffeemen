import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroller';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { GridOn, List } from '@material-ui/icons';
import pink from '@material-ui/core/colors/pink';
import PropTypes from 'prop-types';
import { loadProducts, loadFilteredProducts } from '../../actions/products';
import Spinner from '../Loading';
import { addToBasket } from '../../actions/basket';
import grey from '@material-ui/core/colors/grey';

const strongPink = pink[800];
const strongGrey = grey[700];

const useStyles = makeStyles({
	grid: {
		display: 'flex',
		flexDirection: 'column',
		position: 'relative',
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'space-between',
		maxWidth: 350,
		minWidth: 200,
		height: 400,
		margin: '1rem',
		padding: '5px 10px',
		boxSizing: 'border-box',
		'&:hover button': {
			opacity: 1,
			top: '85%',
		},
	},
	buttonHover: {
		marginBottom: '1rem',
		position: 'absolute',
		top: '100%',
		transition: 'all .5s',
		opacity: 0,
	},
	paperBlock: {
		display: 'inherit',
		alignItems: 'center',
		flexDirection: 'column',
		'& h4,h3': {
			margin: '5px 0',
		},
	},
	list: {
		display: 'flex',
		justifyContent: 'center',
		marginRight: '.5rem',
		padding: '2rem 1rem',
	},
	sorting: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '1rem',
	},
	formControl: {
		minWidth: 120,
		marginLeft: '.5rem',
	},
	icon: {
		margin: '.6rem 0 0 .5rem',
		padding: '.5rem',
		background: '#ededed',
		cursor: 'pointer',
	},
	showingInfo: {
		marginTop: '1.1rem',
		margin: '0 auto',
	},
	products: {
		marginTop: '2rem',
	},
	details: {
		marginLeft: '2rem',
	},
	price: {
		margin: '1rem 0 1.2rem',
		color: strongPink,
		fontSize: 18,
	},
	button: {
		marginTop: '1rem',
		marginBottom: '1rem',
	},
	image: {
		maxWidth: 200,
		maxHeight: 200,
		marginTop: '1rem',
	},
	infinity: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		width: '100%',
		marginBottom: 20,
	},
	brand: {
		color: strongGrey,
		'&:hover': {
			color: strongPink,
		},
	},
});

const Products = props => {
	const {
		products,
		quantity,
		handleSelectGrid,
		handleSelectList,
		loadProducts,
		loading,
		startPage,
		quantityAllProducts,
		quantityChosenFilter,
		filteredProducts,
		loadFilteredProducts,
		chosenFilter,
		addToBasket,
	} = props;

	const classes = useStyles();
	let productsArray = [];
	if (filteredProducts.length) {
		productsArray = filteredProducts;
	} else {
		productsArray = products;
	}

	const list = productsArray.map(product => {
		if (quantity === 12) {
			return (
				<Grid key={product._id} item xs={12} sm={6} md={4}>
					<Paper className={classes.grid} justify="center">
						<div className={classes.paperBlock}>
							<Link to={`/${product._id}`}>
								<img
									src={product.image[0]}
									alt={`${product.brand}_${product.model}`}
									className={classes.image}
								/>
							</Link>
							<Link to={`/${product._id}`}>
								<h3
									className={classes.brand}
								>{`${product.brand} ${product.model}`}</h3>
							</Link>
							<h3>{product.specifications.size}</h3>
							<h4 className={classes.price}>Price: ${product.price}</h4>
						</div>
						<Button
							variant="contained"
							size="large"
							color="secondary"
							className={classes.buttonHover}
							onClick={() => handleAddToBasket(product)}
						>
							Add To Basket
						</Button>
					</Paper>
				</Grid>
			);
		}
		if (quantity === 4) {
			return (
				<Grid
					container
					key={product._id}
					className={classes.products}
					justify="center"
					spacing={5}
				>
					<Grid item xs={12} sm={12} md={4}>
						<Link to={`/${product._id}`}>
							<Paper className={classes.list}>
								<img
									src={product.image[0]}
									alt={`${product.brand}_${product.model}`}
									className={classes.image}
								/>
							</Paper>
						</Link>
					</Grid>
					<Grid item className={classes.details} xs={12} sm={12} md={7}>
						<Link to={`/${product._id}`}>
							<Typography variant="h5" gutterBottom className={classes.brand}>
								{`${product.brand} ${product.model} ${product.specifications.size}`}
							</Typography>
						</Link>
						<h4 className={classes.price}>${product.price}</h4>
						<Typography variant="subtitle2" gutterBottom>
							{product.shortDescription}
						</Typography>
						<Button
							variant="contained"
							size="large"
							color="secondary"
							className={classes.button}
							onClick={() => handleAddToBasket(product)}
						>
							Add To Basket
						</Button>
					</Grid>
				</Grid>
			);
		}
		return null;
	});

	const loadMore = () => {
		if (
			quantityAllProducts === productsArray.length ||
			quantityChosenFilter === productsArray.length ||
			loading
		)
			return;
		filteredProducts.length
			? loadFilteredProducts({ ...chosenFilter })
			: loadProducts(startPage);
	};

	const handleAddToBasket = product => {
		addToBasket({ ...product, addQuantity: 1 });
	};

	return (
		<Grid container>
			<Grid container justify="center" className={classes.sorting}>
				<Typography variant="subtitle2" className={classes.showingInfo}>
					Showing {productsArray.length} items of{' '}
					{quantityChosenFilter > 0 ? quantityChosenFilter : quantityAllProducts}{' '}
					{filteredProducts.length > 0 ? 'filtered products' : 'products'}
				</Typography>
				<Grid>
					<GridOn
						className={classes.icon}
						onClick={handleSelectGrid}
						style={quantity === 12 ? { color: '#f50057' } : { color: '#515151' }}
					/>
					<List
						className={classes.icon}
						onClick={handleSelectList}
						style={quantity === 4 ? { color: '#f50057' } : { color: '#515151' }}
					/>
				</Grid>
			</Grid>
			<InfiniteScroll
				className={classes.infinity}
				pageStart={0}
				loadMore={loadMore}
				hasMore={true}
				threshold={100}
				useWindow={true}
			>
				{list}
			</InfiniteScroll>
			{loading && <Spinner />}
		</Grid>
	);
};

Products.propTypes = {
	products: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
	sorting: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
	addToBasket: PropTypes.func.isRequired,
	loadFilteredProducts: PropTypes.func.isRequired,
	loadProducts: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
	loading: state.product.loading,
	startPage: state.product.startPage,
	quantityAllProducts: state.product.quantityAllProducts,
	quantityChosenFilter: state.product.quantityChosenFilter,
	filteredProducts: state.product.filteredProducts,
	chosenFilter: state.product.chosenFilter,
	products: state.product.products,
});

const mapDispatchToProps = {
	loadProducts,
	loadFilteredProducts,
	addToBasket,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Products);
