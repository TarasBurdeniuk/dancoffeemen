import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	imageContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		marginRight: '2.4rem'
	},
	smallImage: {
		width: '2.7rem',
		height: '4rem',
		padding: '.5rem 1rem',
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

	const [image, setImage] = useState('./temporaryPictures/coffee-package-1.jpg');

	const images = [
		{src: './temporaryPictures/coffee-package-1.jpg', id: 1},
		{src: './temporaryPictures/coffee-package-2.jpg', id: 2},
		{src: './temporaryPictures/coffee-package-3.jpg', id: 3}
	];

	const smallImages = images.map(img => {
		return (
			<img
				src={require(`${img.src}`)}
				onClick={() => handleChangeImage(img.src)}
				className={classes.smallImage}
				key={img.id}
				alt={`small-img-${img.id}`}
			/>
		)
	});

	const handleChangeImage = (img) => {
		setImage(img);
	};

	return (
		<div>
			<img
				src={require(`${image}`)}
				alt="coffee-package"
			/>
			<div className={classes.imageContainer}>
				{smallImages}
			</div>
		</div>
	);
};

export default ProductImages;
