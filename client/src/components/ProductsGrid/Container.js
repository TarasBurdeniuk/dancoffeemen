import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import Price from './Price';
import Brands from './Brands';
import Size from './Size';
import Products from './Products';

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

const ProductsContainer = props => {
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

ProductsContainer.propTypes = {
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

export default ProductsContainer;
