import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import image1 from './temporaryImages/image1.jpg';

const useStyles = makeStyles({
	container: {
		// background: '#fffb98',
	},
	product: {
		padding: '2rem 3rem',
	},
	image: {
		width: '5.4rem',
		height: '8rem',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	price: {
		marginTop: '1rem',
	},
});

const CartContainer = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="lg" className={classes.container}>
			<Paper>
				<Grid container className={classes.product}>
					<Grid item xs={12} md={3}>
						<img src={image1} className={classes.image} alt="image1" />
					</Grid>
					<Grid item xs={12} md={4}>
						<Typography variant="h6" component="h2" gutterBottom>
							Lavazza Pienaroma
						</Typography>
						<Typography variant="subtitle1">500g</Typography>
						<Typography variant="h6" className={classes.price}>
							$18
						</Typography>
					</Grid>
				</Grid>
				<hr />
				<div className={classes.product}>Cart</div>
			</Paper>
		</Container>
	);
};

export default CartContainer;
