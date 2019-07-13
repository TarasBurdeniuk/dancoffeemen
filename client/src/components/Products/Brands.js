import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import { loadBrands } from '../../actions/products';
import { loadFilteredProducts } from '../../actions/products';
import Spinner from '../Loading';

const useStyles = makeStyles(theme => ({
	container: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

const Brands = ({ brands, chosenFilter, loadFilteredProducts, filteredProducts }) => {
	const classes = useStyles();
	const [checked, setChecked] = useState([]);

	const handleToggle = value => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
			loadFilteredProducts({
				brands: [...chosenFilter.brands, value],
				price: chosenFilter.price,
				size: chosenFilter.size,
			});
		} else {
			newChecked.splice(currentIndex, 1);
			loadFilteredProducts({
				brands: chosenFilter.brands.filter(item => item !== value),
				price: chosenFilter.price,
				size: chosenFilter.size,
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
						<ListItemSecondaryAction>
							<Chip
								label={
									filteredProducts.length &&
									filteredProducts.filter(product => product.brand === brand.name)
										.length
								}
							/>
						</ListItemSecondaryAction>
					</ListItem>
				);
			})}
		</List>
	);
};

const mapStateToProps = state => ({
	brands: state.product.brands,
	chosenFilter: state.product.chosenFilter,
	filteredProducts: state.product.filteredProducts,
});

const mapDispatchToProps = {
	loadBrands,
	loadFilteredProducts,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Brands);
