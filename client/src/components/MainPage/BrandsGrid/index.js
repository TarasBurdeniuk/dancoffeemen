import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import brands from './brands';
import grey from '@material-ui/core/colors/grey';

const lightGrey = grey[100];

const useStyles = makeStyles({
	rootBlock: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: lightGrey,
		fontFamily: "'Lato', 'Roboto', sans-serif",
	},
	card: {
		width: 200,
		margin: 10,
	},
	title: {
		fontSize: 16,
		fontWeight: 400,
		textTransform: 'uppercase',
		marginBottom: 15,
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: 1160,
		padding: '10px 0',
	},
	block: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
	},
	'@media screen and (min-width:768px)': {
		title: {
			fontSize: 20,
			fontWeight: 500,
			marginBottom: 15,
		},
	},
	'@media screen and (min-width:1160px)': {
		title: {
			fontSize: 26,
			fontWeight: 600,
			marginBottom: 40,
		},
		container: {
			padding: '30px 0',
		},
	},
});

const ImgMediaCard = () => {
	const classes = useStyles();

	return (
		<div className={classes.rootBlock}>
			<div className={classes.container}>
				<h1 className={classes.title}>only the best coffee</h1>
				<div className={classes.block}>
					{brands.map(item => {
						return (
							<Card key={item.id} className={classes.card}>
								<a rel="noopener noreferrer" target="_blank" href={item.link}>
									<CardActionArea key={item.id}>
										<CardMedia
											key={item.id}
											component="img"
											alt={item.alt}
											height="200"
											image={item.src}
										/>
									</CardActionArea>
								</a>
							</Card>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ImgMediaCard;
