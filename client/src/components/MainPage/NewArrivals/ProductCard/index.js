import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';

const strongPink = pink[500];
const moreStrongPink = pink[800];

const useStyles = makeStyles({
	card: {
		width: 200,
		height: 400,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	price: {
		color: moreStrongPink,
		fontSize: 14,
		textAlign: 'center',
	},
	name: {
		textAlign: 'center',
	},
	button: {
		backgroundColor: '#f50057',
		color: 'white',
		width: '100%',
		'&:hover': {
			backgroundColor: strongPink,
		},
	},
});

const ImgMediaCard = ({ src, price, name, _id, handleClick }) => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<Link to={`/products/${_id}`}>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="200"
						image={src}
					/>
				</Link>
			</CardActionArea>
			<CardContent>
				<Typography className={classes.name} gutterBottom variant="h6" component="h6">
					{name}
				</Typography>
				<Typography
					variant="h6"
					color="textSecondary"
					component="h3"
					className={classes.price}
				>
					Price: ${price}
				</Typography>
			</CardContent>
			<Button variant="contained" className={classes.button} onClick={handleClick}>
				ADD TO BASKET
			</Button>
		</Card>
	);
};

ImgMediaCard.propTypes = {
	src: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	_id: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
};

export default ImgMediaCard;
