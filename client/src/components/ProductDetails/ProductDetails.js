import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
	container: {
		marginTop: '2rem'
	},
	availability: {
		display: 'inline-block'
	},
	quantity: {
		display: 'inline-block',
		borderRadius: '3px',
		boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)'
	},
	quantityInput: {
		width: '4rem',
		padding: '.7rem',
		fontSize: '1.5rem',
		textAlign: 'center',
		border: 0,
		background: '#fff'
	},
	quantityChange: {
		width: '3rem',
		padding: '.7rem',
		textAlign: 'center',
		textShadow: '0 1px 0 rgba(#fff, .6)',
		fontSize: '1.5rem',
		border: '0 solid #dbdbdb',
		outline: 'none',
		background: '#f3f3f3',
		color: '#888',
		cursor: 'pointer',
		'&:hover': {
			background: '#e3e3e3',
			color: '#636363'
		}
	}
});

const ProductDetails = (props) => {
	const { increment, decrement, value } = props;

	const classes = useStyles();

	return (
		<Container className={classes.container} maxWidth="md">
			<Grid container spacing={3}>
				<Grid item xs={12} md={5}>
					<img src={require('./temporaryPictures/coffee-package-1.jpg')} alt="coffee-package" />
				</Grid>
				<Grid item xs={12} md={7}>
					<Typography variant="h4" component="h2" gutterBottom>
						Lavazza Pienaroma
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Rate
					</Typography>
					<Typography variant="h6" gutterBottom>
						$18
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						A adipisci atque consequatur consequuntur, corporis cupiditate
						distinctio dolore enim fugit iusto labore laborum magni maiores
						molestiae, odit quisquam sapiente tempora. Impedit!
					</Typography>
					<Typography variant="h6" gutterBottom>
						Availability:&nbsp;
						<Typography className={classes.availability}>
							In Stock
						</Typography>
					</Typography>
					<Typography variant="subtitle1" gutterBottom>
						Size
					</Typography>
					<div className={classes.quantity}>
						<button className={classes.quantityChange} onClick={decrement}>
							&mdash;
						</button>
						<input className={classes.quantityInput} type="text" value={value} disabled />
						<button className={classes.quantityChange} onClick={increment}>
							&#xff0b;
						</button>
					</div>
					<Typography variant="subtitle1" gutterBottom>
						Add to cart
					</Typography>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="h5" component="h2" gutterBottom>
					Description
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores aspernatur autem consequuntur cupiditate, delectus esse illum iste itaque maxime odio pariatur praesentium, quae, quas quisquam soluta totam unde vitae!
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda distinctio ducimus excepturi ipsa iste laborum magni maxime minima nisi odit officiis perspiciatis quis, recusandae repudiandae, totam ullam, voluptas voluptatum!
					</Typography>
				</Typography>
			</Grid>
		</Container>
	);
};

export default ProductDetails;
