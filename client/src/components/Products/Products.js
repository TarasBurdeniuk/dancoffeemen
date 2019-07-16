import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { GridOn, List } from '@material-ui/icons';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

const useStyles = makeStyles({
	grid: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		height: 400,
		marginTop: '1rem',
		padding: 5,
		boxSizing: 'border-box',
		'&:hover button': {
			display: 'block',
		},
	},
	buttonHover: {
		display: 'none',
		marginBottom: '1rem',
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
	},
	products: {
		marginTop: '2rem',
	},
	details: {
		marginLeft: '2rem',
	},
	price: {
		margin: '1rem 0 1.2rem',
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
	pagination: {
		marginTop: '3rem',
		marginBottom: '3rem',
	},
});

const Products = props => {
	const {
		products,
		sorting,
		productsFrom,
		productsTo,
		quantity,
		handleChangeSorting,
		handleSelectGrid,
		handleSelectList,
		handleChangePage,
		handleChangeFirstPage,
		handleChangePrevPage,
		handleChangeNextPage,
		handleChangeLastPage,
	} = props;

	const classes = useStyles();

	const inputLabel = useRef(null);
	const [labelWidth, setLabelWidth] = useState(0);
	useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	const list = products.map((product, i) => {
		if (i + 1 <= productsTo && i + 1 >= productsFrom) {
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
								<h3>{`${product.brand} ${product.model} ${product.specifications.size}`}</h3>
								<h4>Price: ${product.price}</h4>
							</div>
							<Button
								variant="contained"
								size="large"
								color="secondary"
								className={classes.buttonHover}
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
							<Typography variant="h5" gutterBottom>
								{`${product.brand} ${product.model} ${product.specifications.size}`}
							</Typography>
							<Typography className={classes.price} variant="h5" gutterBottom>
								${product.price}
							</Typography>
							<Typography variant="subtitle2" gutterBottom>
								{product.shortDescription}
							</Typography>
							<Button
								variant="contained"
								size="large"
								color="secondary"
								className={classes.button}
							>
								Add To Basket
							</Button>
						</Grid>
					</Grid>
				);
			}
		}
		return null;
	});

	return (
		<Grid container>
			<Grid container justify="center" className={classes.sorting}>
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
						Sort by
					</InputLabel>
					<Select
						value={sorting}
						onChange={handleChangeSorting}
						input={
							<OutlinedInput
								labelWidth={labelWidth}
								name="sorting"
								id="outlined-age-simple"
							/>
						}
					>
						<MenuItem value="rating">Rating</MenuItem>
						<MenuItem value="popularity">Popularity</MenuItem>
						<MenuItem value="newness">Newness</MenuItem>
					</Select>
				</FormControl>
				<Typography variant="subtitle2" className={classes.showingInfo}>
					Showing {productsFrom}-{productsTo} of {products.length} products
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
			<Grid container justify="center" spacing={4}>
				{list}
			</Grid>
			<Grid container className={classes.pagination} justify="center">
				<Pagination
					products={products}
					productsTo={productsTo}
					quantity={quantity}
					handleChangePage={handleChangePage}
					handleChangeFirstPage={handleChangeFirstPage}
					handleChangePrevPage={handleChangePrevPage}
					handleChangeNextPage={handleChangeNextPage}
					handleChangeLastPage={handleChangeLastPage}
				/>
			</Grid>
		</Grid>
	);
};

Products.propTypes = {
	products: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
	sorting: PropTypes.string.isRequired,
	productsFrom: PropTypes.number.isRequired,
	productsTo: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	handleChangeSorting: PropTypes.func.isRequired,
	handleSelectGrid: PropTypes.func.isRequired,
	handleSelectList: PropTypes.func.isRequired,
	handleChangePage: PropTypes.func.isRequired,
	handleChangeFirstPage: PropTypes.func.isRequired,
	handleChangePrevPage: PropTypes.func.isRequired,
	handleChangeNextPage: PropTypes.func.isRequired,
	handleChangeLastPage: PropTypes.func.isRequired,
};

export default Products;
