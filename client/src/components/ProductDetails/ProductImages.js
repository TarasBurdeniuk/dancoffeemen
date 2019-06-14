import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	imageContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginRight: '1rem'
	},
	smallImage: {
		border: '1px solid #efece7',
		marginTop: '2rem',
		marginRight: '1rem',
		'&:hover': {
			border: '1px solid #c4b399',
			cursor: 'pointer'
		}
	}
});

const ProductImages = () => {
	const classes = useStyles();

	return (
		<div>
			<img
				src={require("./temporaryPictures/coffee-package-1.jpg")}
				alt="coffee-package"
			/>
			<div className={classes.imageContainer}>
				<img
					className={classes.smallImage}
					src={require('./temporaryPictures/coffee-package-mini-1.jpg')}
					alt="coffee-package-mini-1"
				/>
				<img
					className={classes.smallImage}
					src={require("./temporaryPictures/coffee-package-mini-2.jpg")}
					alt="coffee-package-mini-2"
				/>
				<img
					className={classes.smallImage}
					src={require("./temporaryPictures/coffee-package-mini-3.jpg")}
					alt="coffee-package-mini-3"
				/>
			</div>
		</div>
	);
};

export default ProductImages;
