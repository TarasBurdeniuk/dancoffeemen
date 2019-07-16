import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import pink from '@material-ui/core/colors/pink';

const lightPink = pink[400];
const strongPink = pink[500];

const useStyles = makeStyles({
	card: {
		width: 200,
	},
	button: {
		backgroundColor: lightPink,
		width: '100%',
		'&:hover': {
			backgroundColor: strongPink,
		},
	},
});

const ImgMediaCard = ({ src, price, name }) => {
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardMedia component="img" alt="Contemplative Reptile" height="200" image={src} />
				<CardContent>
					<Typography gutterBottom variant="h6" component="h6">
						{name}
					</Typography>
					<Typography variant="h6" color="textSecondary" component="h3">
						Price: {price}
					</Typography>
				</CardContent>
			</CardActionArea>
			<Button variant="contained" className={classes.button}>
				ADD TO BASKET
			</Button>
		</Card>
	);
};

export default ImgMediaCard;
