import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { loadFilteredProducts } from '../../actions/products';
import Spinner from '../Loading';

const useStyles = makeStyles(theme => ({
	container: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

const Brands = ({ brands, chosenFilter, loadFilteredProducts }) => {
	const classes = useStyles();
	const [checked, setChecked] = useState([]);
	useEffect(() => {
		setChecked(chosenFilter.brands);
	}, [chosenFilter.brands]);

	const handleToggle = value => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
			loadFilteredProducts({
				brands: [...chosenFilter.brands, value],
				price: chosenFilter.price,
				size: chosenFilter.size,
				startPage: 0,
			});
		} else {
			newChecked.splice(currentIndex, 1);
			loadFilteredProducts({
				brands: chosenFilter.brands.filter(item => item !== value),
				price: chosenFilter.price,
				size: chosenFilter.size,
				startPage: 0,
			});
		}
		setChecked(newChecked);
	};

	return brands === null ? (
		<Spinner />
	) : (
		<List className={classes.container}>
			{brands.map(brand => {
				const labelId = brand.name;
				return (
					<ListItem
						key={brand.name}
						dense
						button
						onClick={() => handleToggle(brand.name)}
					>
						<ListItemIcon>
							<Checkbox
								edge="start"
								color="secondary"
								checked={checked.indexOf(brand.name) !== -1}
								inputProps={{ 'aria-labelledby': labelId }}
							/>
						</ListItemIcon>
						<ListItemText id={labelId} primary={brand.name} />
					</ListItem>
				);
			})}
		</List>
	);
};

const mapStateToProps = state => ({
	brands: state.product.brands,
	chosenFilter: state.product.chosenFilter,
});

const mapDispatchToProps = {
	loadFilteredProducts,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Brands);
