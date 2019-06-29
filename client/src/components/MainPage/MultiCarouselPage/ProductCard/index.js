import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import StarsRate from '../../../ProductDetails/StarsRate';

const useStyles = makeStyles({
	card: {
		width: 200,
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
					<Typography variant="body2" color="textSecondary" component="p">
						<span>Price: {price}</span>
					</Typography>
					<StarsRate />
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default ImgMediaCard;
