import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProductPrice from './ProductPrice';
import ProductBrands from './ProductBrands';
import ProductSize from './ProductSize';

const useStyles = makeStyles({
	container: {
		height: '100vh',
		marginTop: '2rem',
		// backgroundColor: '#cfe8fc',
	},
	sidebar: {
		// backgroundColor: '#fcbec8',
	},
	title: {
		margin: '2rem 0 1rem',
		paddingBottom: '.5rem',
		borderBottom: '1px solid #9F9F9F',
		fontWeight: 'bold',
	},
	grid: {
		height: '100vh',
		backgroundColor: '#d0fcbf',
	},
});

const ProductGrid = () => {
	const classes = useStyles();

	return (
		<Container className={classes.container} maxWidth="lg">
			<Grid container spacing={5}>
				<Grid item md={3} xs={12} className={classes.sidebar}>
					<Grid item xs={12}>
						<Typography variant="subtitle2" className={classes.title}>
							PRICE
						</Typography>
						<ProductPrice />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="subtitle2" className={classes.title}>
							BRAND
						</Typography>
						<ProductBrands />
					</Grid>
					<Grid item xs={12}>
						<Typography variant="subtitle2" className={classes.title}>
							SIZE
						</Typography>
						<ProductSize />
					</Grid>
				</Grid>
				<Grid item md={9} xs={12} className={classes.grid}>
					Product Grid
				</Grid>
			</Grid>
		</Container>
	);
};

export default ProductGrid;
