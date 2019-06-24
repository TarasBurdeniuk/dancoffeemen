import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
	container: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

const ProductBrands = () => {
	const classes = useStyles();
	const [checked, setChecked] = useState([]);

	const handleToggle = value => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];
		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}
		setChecked(newChecked);
	};

	const brands = [
		{ name: 'Lavazza', goodsQuantity: 17, id: 0 },
		{ name: 'Kimbo', goodsQuantity: 9, id: 1 },
		{ name: 'Illy', goodsQuantity: 11, id: 2 },
		{ name: 'Fineberry', goodsQuantity: 5, id: 3 },
		{ name: 'Lucaffee', goodsQuantity: 1, id: 4 },
		{ name: 'Alvorada', goodsQuantity: 19, id: 5 },
		{ name: 'Trevi', goodsQuantity: 3, id: 6 },
		{ name: 'Gemini', goodsQuantity: 10, id: 7 },
		{ name: 'Cornella', goodsQuantity: 7, id: 8 },
		{ name: 'Melitta', goodsQuantity: 5, id: 9 },
	];

	return (
		<List className={classes.container}>
			{brands.map(brand => {
				const labelId = brand.name;
				return (
					<ListItem key={brand.id} dense button onClick={handleToggle(brand.id)}>
						<ListItemIcon>
							<Checkbox
								edge="start"
								color="secondary"
								checked={checked.indexOf(brand.id) !== -1}
								inputProps={{ 'aria-labelledby': labelId }}
							/>
						</ListItemIcon>
						<ListItemText id={labelId} primary={brand.name} />
						<ListItemSecondaryAction>
							<Chip label={brand.goodsQuantity} />
						</ListItemSecondaryAction>
					</ListItem>
				);
			})}
		</List>
	);
};

export default ProductBrands;
