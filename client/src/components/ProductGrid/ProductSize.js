import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
	container: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

const ProductSize = () => {
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

	const sizes = [
		{ value: '100g', id: 0 },
		{ value: '250g', id: 1 },
		{ value: '500g', id: 2 },
		{ value: '1000g', id: 3 },
	];

	return (
		<List className={classes.container}>
			{sizes.map(size => {
				const labelId = size.value;
				return (
					<ListItem key={size.id} dense button onClick={handleToggle(size.id)}>
						<ListItemIcon>
							<Checkbox
								edge="start"
								color="primary"
								checked={checked.indexOf(size.id) !== -1}
								inputProps={{ 'aria-labelledby': labelId }}
							/>
						</ListItemIcon>
						<ListItemText id={labelId} primary={size.value} />
					</ListItem>
				);
			})}
		</List>
	);
};

export default ProductSize;
