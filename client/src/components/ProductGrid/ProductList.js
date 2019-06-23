import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import { products } from './temporaryProducts/products';

const useStyles = makeStyles({
	paper: {
		width: '100%',
		height: 350,
	},
	number: {
		margin: '1rem .3rem',
	},
});

const ProductList = () => {
	const classes = useStyles();

	const [productsFrom, setProductsFrom] = useState(1);
	const [productsTo, setProductsTo] = useState(12);

	const handleChangePage = event => {
		let numFrom = event.target.innerText * 12 - 11;
		let numTo = event.target.innerText * 12;
		if (numTo > products.length) numTo = products.length;
		setProductsFrom(numFrom);
		setProductsTo(numTo);
	};

	const pagination = [];
	for (let i = 1; i <= Math.ceil(products.length / 12); i++) {
		pagination.push(i);
	}

	const list = products.map(product => {
		if (product.id <= productsTo && product.id >= productsFrom) {
			return (
				<Grid key={product.id} item xs={12} sm={6} md={4}>
					<Paper className={classes.paper}>{product.id}</Paper>
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
				color={page === Math.ceil(productsTo / 12) ? 'primary' : 'default'}
				aria-label="Add"
				className={classes.number}
				onClick={handleChangePage}
			>
				{page}
			</Fab>
		);
	});

	return (
		<Grid container justify="center" spacing={4}>
			{list}
			<Grid container justify="center">
				{pages}
			</Grid>
		</Grid>
	);
};

export default ProductList;
