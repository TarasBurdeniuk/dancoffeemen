import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	container: {
		marginTop: '2rem'
	}
});

const ProductDetails = () => {
	const classes = useStyles();

	return (
		<Container className={classes.container} maxWidth="md">
			<Grid container spacing={3}>
				<Grid item xs={12} md={5}>
					<img src={require('./temporaryPictures/coffee-package-1.jpg')} alt="coffee-package" />
				</Grid>
				<Grid item xs={12} md={7}>
					<Typography variant="h5" component="h2" gutterBottom>
						Lavazza Pienaroma
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Rate
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Price
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Short description
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Availability
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Quantity
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Size
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Add to cart
					</Typography>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h5" component="h2" gutterBottom>
					Description
				</Typography>
			</Grid>
		</Container>
	);
};

export default ProductDetails;
