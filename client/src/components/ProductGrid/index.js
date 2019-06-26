import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Price from './Price';
import Brands from './Brands';
import Size from './Size';
import Products from './Products';
import products from './temporaryProducts/products';

const useStyles = makeStyles({
	container: {
		marginTop: '2rem',
	},
	title: {
		margin: '2rem 0 1rem',
		paddingBottom: '.5rem',
		borderBottom: '1px solid #9F9F9F',
		fontWeight: 'bold',
	},
});

const ProductsContainer = () => {
	const classes = useStyles();

	const [sorting, setSorting] = useState('');
	const [productsFrom, setProductsFrom] = useState(1);
	const [productsTo, setProductsTo] = useState(12);
	const [quantity, setQuantity] = useState(12);

	const handleChangeSorting = event => {
		const { value } = event.target;
		setSorting(value);
	};

	const handleSelectGrid = () => {
		setQuantity(12);
		setProductsFrom(1);
		setProductsTo(12);
	};

	const handleSelectList = () => {
		setQuantity(4);
		setProductsFrom(1);
		setProductsTo(4);
	};

	const handleChangePage = event => {
		const { innerText } = event.target;
		const numFrom = innerText * quantity - (quantity - 1);
		let numTo = innerText * quantity;
		if (numTo > products.length) numTo = products.length;
		setProductsFrom(numFrom);
		setProductsTo(numTo);
	};

	const handleChangeFirstPage = () => {
		const numFrom = 1;
		const numTo = numFrom + quantity - 1;
		setProductsFrom(numFrom);
		setProductsTo(numTo);
	};

	const handleChangePrevPage = () => {
		if (productsFrom !== 1) {
			const numFrom = productsFrom - quantity;
			const numTo = numFrom + quantity - 1;
			setProductsFrom(numFrom);
			setProductsTo(numTo);
		}
	};

	const handleChangeNextPage = () => {
		if (productsTo < products.length) {
			const numFrom = productsFrom + quantity;
			const numTo = numFrom + quantity - 1;
			setProductsFrom(numFrom);
			setProductsTo(numTo);
		}
	};

	const handleChangeLastPage = () => {
		const numFrom = Math.floor(products.length / quantity) * quantity + 1;
		const numTo = products.length;
		setProductsFrom(numFrom);
		setProductsTo(numTo);
	};

	return (
		<Container className={classes.container} maxWidth="lg">
			<Grid container spacing={5}>
				<Grid item md={3} xs={12}>
					<Grid item xs={12}>
						<Typography variant="subtitle2" className={classes.title}>
							PRICE
						</Typography>
						<Price />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="subtitle2" className={classes.title}>
							BRAND
						</Typography>
						<Brands />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="subtitle2" className={classes.title}>
							SIZE
						</Typography>
						<Size />
					</Grid>
				</Grid>
				<Grid item md={9} xs={12} className={classes.grid}>
					<Products
						products={products}
						sorting={sorting}
						productsFrom={productsFrom}
						productsTo={productsTo}
						quantity={quantity}
						handleChangeSorting={handleChangeSorting}
						handleSelectGrid={handleSelectGrid}
						handleSelectList={handleSelectList}
						handleChangePage={handleChangePage}
						handleChangeFirstPage={handleChangeFirstPage}
						handleChangePrevPage={handleChangePrevPage}
						handleChangeNextPage={handleChangeNextPage}
						handleChangeLastPage={handleChangeLastPage}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ProductsContainer;
