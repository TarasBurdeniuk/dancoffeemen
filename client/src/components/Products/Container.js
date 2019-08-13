import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
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
	button: {
		width: '100%',
	},
	input: {
		display: 'none',
	},
});

const ProductsContainer = props => {
	const {
		products,
		sorting,
		quantity,
		handleChangeSorting,
		handleSelectGrid,
		handleSelectList,
		handleClearFilter,
	} = props;

	const classes = useStyles();

	return (
		<Container className={classes.container} maxWidth="lg">
			<Grid container spacing={5}>
				<Grid item md={3} xs={12}>
					<Button
						variant="contained"
						color="primary"
						className={classes.button}
						onClick={handleClearFilter}
					>
						clear filter
					</Button>
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
						quantity={quantity}
						handleChangeSorting={handleChangeSorting}
						handleSelectGrid={handleSelectGrid}
						handleSelectList={handleSelectList}
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

ProductsContainer.propTypes = {
	products: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
	sorting: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
};

export default ProductsContainer;
