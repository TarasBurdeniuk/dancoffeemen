import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';
import Images from './Images';
import StarsRate from './StarsRate';

const useStyles = makeStyles({
	container: {
		marginTop: '2rem',
	},
	price: {
		margin: '1rem 0',
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
		background: '#fff',
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
			color: '#636363',
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
});

const Details = props => {
	const {
		quantity,
		size,
		availability,
		handleIncrement,
		handleDecrement,
		handleChangeSize,
	} = props;

	const classes = useStyles();

	const inputLabel = useRef(null);
	const [labelWidth, setLabelWidth] = useState(0);
	useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	return (
		<Container className={classes.container} maxWidth="md">
			<Grid container spacing={3}>
				<Grid item md={5} xs={12}>
					<Images />
				</Grid>
				<Grid item md={7} xs={12}>
					<Typography variant="h4" component="h2" gutterBottom>
						Lavazza Pienaroma
					</Typography>
					<StarsRate />
					<Typography className={classes.price} variant="h5" gutterBottom>
						$18
					</Typography>
					<Typography variant="subtitle2" gutterBottom>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci atque
						consequatur consequuntur, corporis cupiditate distinctio dolore enim fugit
						iusto labore laborum magni maiores molestiae, odit quisquam sapiente
						tempora. Impedit!
					</Typography>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
							Size
						</InputLabel>
						<Select
							className={classes.size}
							value={size}
							onChange={handleChangeSize}
							input={
								<OutlinedInput
									labelWidth={labelWidth}
									name="size"
									id="outlined-age-simple"
								/>
							}
						>
							<MenuItem value={100}>100g</MenuItem>
							<MenuItem value={250}>250g</MenuItem>
							<MenuItem value={500}>500g</MenuItem>
							<MenuItem value={1000}>1000g</MenuItem>
						</Select>
					</FormControl>
					<Typography variant="h6" gutterBottom>
						Availability:&nbsp;
						<Typography className={classes.availability}>
							{availability ? 'In Stock' : 'Not available'}
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
						className={classes.button}
					>
						Buy
					</Button>
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Typography className={classes.description} variant="h5" component="h2">
					Description
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores
						aspernatur autem consequuntur cupiditate, delectus esse illum iste itaque
						maxime odio pariatur praesentium, quae, quas quisquam soluta totam unde
						vitae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
						assumenda distinctio ducimus excepturi ipsa iste laborum magni maxime minima
						nisi odit officiis perspiciatis quis, recusandae repudiandae, totam ullam,
						voluptas voluptatum!
					</Typography>
				</Typography>
			</Grid>
		</Container>
	);
};

Details.propTypes = {
	quantity: PropTypes.number.isRequired,
	size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	availability: PropTypes.bool.isRequired,
	handleIncrement: PropTypes.func.isRequired,
	handleDecrement: PropTypes.func.isRequired,
	handleChangeSize: PropTypes.func.isRequired,
};

export default Details;
