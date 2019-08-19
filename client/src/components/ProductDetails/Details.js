import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';

const strongPink = pink[800];
const white = grey[0];
const lightGrey = grey[100];
const strongGrey = grey[700];

const useStyles = makeStyles({
	container: {
		marginTop: '2rem',
		marginBottom: '2rem',
	},
	price: {
		margin: '1rem 0',
		'& span': {
			color: strongPink,
			fontWeight: 800,
			fontSize: 26,
		},
	},
	availability: {
		display: 'inline-block',
	},
	formControl: {
		minWidth: 120,
		margin: '1rem 0',
	},
	size: {
		display: 'block',
	},
	quantity: {
		display: 'inline-block',
		marginTop: '1rem',
		borderRadius: '5px',
		boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
	},
	quantityInput: {
		width: '4rem',
		padding: '.7rem',
		fontSize: '1.5rem',
		textAlign: 'center',
		border: 0,
		background: lightGrey,
	},
	quantityChange: {
		width: '3rem',
		padding: '.7rem',
		textAlign: 'center',
		textShadow: '0 1px 0 rgba(#fff, .6)',
		fontSize: '1.5rem',
		border: '0 solid #dbdbdb',
		outline: 'none',
		background: lightGrey,
		color: strongGrey,
		cursor: 'pointer',
		'&:hover': {
			background: lightGrey,
			color: strongGrey,
		},
	},
	quantityDecrement: {
		borderRadius: '5px 0 0 5px',
	},
	quantityIncrement: {
		borderRadius: '0 5px 5px 0',
	},
	button: {
		width: '11rem',
		margin: '1.5rem .2rem',
	},
	description: {
		marginTop: '3rem',
	},
	preContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	imageContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		width: 400,
		'& button': {
			margin: '2rem .5rem 0 .5rem',
			padding: 0,
			border: 0,
			outline: 0,
			background: white,
		},
	},
	smallImage: {
		width: '4rem',
		height: '4rem',
		padding: '.5rem 1rem',
		border: '1px solid #efece7',
		'&:hover': {
			border: '1px solid #c4b399',
			cursor: 'pointer',
		},
	},
	image: {
		height: 400,
	},
	brand: {
		color: strongGrey,
	},
});

const Details = props => {
	const { quantity, handleIncrement, handleDecrement, product, handleAddToBasket } = props;

	const classes = useStyles();

	const {
		brand,
		model,
		price,
		status,
		itemNo,
		specifications,
		shortDescription,
		mainDescription,
		image,
	} = product;
	useEffect(() => {
		setImageQ(image[0]);
	}, [image]);

	const [imageQ, setImageQ] = useState();

	return (
		<Container className={classes.container} maxWidth="md">
			<Grid container spacing={3}>
				<Grid item md={5} xs={12}>
					<div className={classes.preContainer}>
						<div className={classes.imageContainer}>
							<img src={imageQ} alt="image1" className={classes.image} />
						</div>
						<div className={classes.imageContainer}>
							{image.map(item => (
								<button key={item} type="button" onClick={() => setImageQ(item)}>
									<img src={item} className={classes.smallImage} alt="coffee" />
								</button>
							))}
						</div>
					</div>
				</Grid>
				<Grid item md={7} xs={12}>
					<Typography variant="h4" component="h2" gutterBottom className={classes.brand}>
						<strong>{`${brand} ${model}`}</strong>
					</Typography>
					<Typography className={classes.price} variant="h5" gutterBottom>
						<span>${price}</span>
					</Typography>
					<Typography variant="subtitle2" gutterBottom>
						{shortDescription}
					</Typography>
					<Typography variant="h6" gutterBottom>
						Availability:&nbsp;
						<Typography className={classes.availability}>
							{status ? 'In Stock' : 'Not available'}
						</Typography>
					</Typography>
					<Typography variant="h6" gutterBottom>
						Article:&nbsp;
						<Typography className={classes.availability}>{itemNo}</Typography>
					</Typography>
					<Typography variant="h6" gutterBottom>
						Blend:&nbsp;
						<Typography className={classes.availability}>
							{specifications.supplement}
						</Typography>
					</Typography>
					<Typography variant="h6" gutterBottom>
						Roasting:&nbsp;
						<Typography className={classes.availability}>
							{specifications.roast}
						</Typography>
					</Typography>
					<Typography variant="h6" gutterBottom>
						Grinding:&nbsp;
						<Typography className={classes.availability}>
							{specifications.grinding}
						</Typography>
					</Typography>
					<Typography variant="h6" gutterBottom>
						Size:&nbsp;
						<Typography className={classes.availability}>
							{specifications.size}
						</Typography>
					</Typography>
					<div>
						<div className={classes.quantity}>
							<button
								type="button"
								className={`${classes.quantityChange} ${classes.quantityDecrement}`}
								onClick={handleDecrement}
							>
								&mdash;
							</button>
							<input
								className={classes.quantityInput}
								type="text"
								value={quantity}
								disabled
							/>
							<button
								type="button"
								className={`${classes.quantityChange} ${classes.quantityIncrement}`}
								onClick={handleIncrement}
							>
								&#xff0b;
							</button>
						</div>
					</div>
					<Button
						variant="contained"
						color="secondary"
						size="large"
						disabled={!status}
						className={classes.button}
						onClick={() => handleAddToBasket(product)}
					>
						Add To Basket
					</Button>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				{mainDescription && (
					<Typography className={classes.description} variant="h5" component="h2">
						Description
						<Typography>{mainDescription}</Typography>
					</Typography>
				)}
			</Grid>
		</Container>
	);
};

Details.propTypes = {
	quantity: PropTypes.number.isRequired,
	handleIncrement: PropTypes.func.isRequired,
	handleDecrement: PropTypes.func.isRequired,
	product: PropTypes.object.isRequired,
};

export default Details;
