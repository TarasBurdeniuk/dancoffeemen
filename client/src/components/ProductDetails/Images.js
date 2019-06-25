import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image1 from './temporaryImages/image1.jpg';
import image2 from './temporaryImages/image2.jpg';
import image3 from './temporaryImages/image3.jpg';

const useStyles = makeStyles({
	imageContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		'& button': {
			margin: '2rem .5rem 0 .5rem',
			padding: 0,
			border: 0,
			outline: 0,
			background: '#fff',
		},
	},
	smallImage: {
		width: '2.7rem',
		height: '4rem',
		padding: '.5rem 1rem',
		border: '1px solid #efece7',
		'&:hover': {
			border: '1px solid #c4b399',
			cursor: 'pointer',
		},
	},
});

const Images = () => {
	const classes = useStyles();

	const [image, setImage] = useState(image1);

	const handleChangeImage = img => {
		setImage(img);
	};

	return (
		<div>
			<div className={classes.imageContainer}>
				<img src={image} alt="image1" />
			</div>
			<div className={classes.imageContainer}>
				<button type="button" onClick={() => handleChangeImage(image1)}>
					<img src={image1} className={classes.smallImage} alt="image1" />
				</button>
				<button type="button" onClick={() => handleChangeImage(image2)}>
					<img src={image2} className={classes.smallImage} alt="image2" />
				</button>
				<button type="button" onClick={() => handleChangeImage(image3)}>
					<img src={image3} className={classes.smallImage} alt="image3" />
				</button>
			</div>
		</div>
	);
};

export default Images;
