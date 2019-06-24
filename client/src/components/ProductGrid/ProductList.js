import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import { GridOn, List } from '@material-ui/icons';
import { products } from './temporaryProducts/products';

const useStyles = makeStyles({
	paper: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
		height: 350,
	},
	image: {
		maxWidth: '80%',
		maxHeight: '80%',
		marginTop: '1rem',
	},
	number: {
		margin: '1rem .3rem',
	},
	sorting: {
		display: 'flex',
		justifyContent: 'space-between',
		marginBottom: '1rem',
	},
	icon: {
		margin: '.2rem',
		padding: '.5rem',
		background: '#ededed',
		cursor: 'pointer',
	},
});

const ProductList = () => {
	const classes = useStyles();

	const [productsFrom, setProductsFrom] = useState(1);
	const [productsTo, setProductsTo] = useState(12);
	const [quantity, setQuantity] = useState(12);

	const handleChangePage = event => {
		let numFrom = event.target.innerText * quantity - (quantity - 1);
		let numTo = event.target.innerText * quantity;
		if (numTo > products.length) numTo = products.length;
		setProductsFrom(numFrom);
		setProductsTo(numTo);
	};

	const handleSelectGrid = async () => {
		await setQuantity(12);
		await setProductsFrom(1);
		await setProductsTo(12);
	};

	const handleSelectList = async () => {
		await setQuantity(4);
		await setProductsFrom(1);
		await setProductsTo(4);
	};

	const pagination = [];
	for (let i = 1; i <= Math.ceil(products.length / quantity); i++) {
		pagination.push(i);
	}

	const list = products.map(product => {
		if (product.id <= productsTo && product.id >= productsFrom) {
			return (
				<Grid key={product.id} item xs={12} sm={6} md={4}>
					<Paper className={classes.paper} justify="center">
						<img src={product.src} alt={product.id} className={classes.image} />
						{product.id}
					</Paper>
				</Grid>
			);
		}
		return null;
	});

	const pages = pagination.map(page => {
		return (
			<Fab
				key={page}
				size="small"
				color={page === Math.ceil(productsTo / quantity) ? 'secondary' : 'default'}
				aria-label="Add"
				className={classes.number}
				onClick={handleChangePage}
			>
				{page}
			</Fab>
		);
	});

	return (
		<Grid container>
			<Grid container justify="center" className={classes.sorting}>
				<Typography variant="subtitle2">
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
			<Grid container justify="center">
				{pages}
			</Grid>
		</Grid>
	);
};

export default ProductList;
