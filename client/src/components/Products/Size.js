import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Spinner from '../Loading';
import { loadFilteredProducts } from '../../actions/products';

const useStyles = makeStyles(theme => ({
	container: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

const Size = ({ sizes, loadFilteredProducts, chosenFilter }) => {
	useEffect(() => {
		setChecked(chosenFilter.size);
	}, [chosenFilter.size]);
	const [checked, setChecked] = useState([]);
	const classes = useStyles();

	const handleToggle = value => () => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
			loadFilteredProducts({
				brands: chosenFilter.brands,
				price: chosenFilter.price,
				size: [...chosenFilter.size, value],
				startPage: 0,
			});
		} else {
			newChecked.splice(currentIndex, 1);
			loadFilteredProducts({
				brands: chosenFilter.brands,
				price: chosenFilter.price,
				size: chosenFilter.size.filter(size => size !== value),
				startPage: 0,
			});
		}
		setChecked(newChecked);
	};

	return sizes === null ? (
		<Spinner />
	) : (
		<List className={classes.container}>
			{sizes.map(size => {
				const labelId = size;
				return (
					<ListItem key={size} dense button onClick={handleToggle(size)}>
						<ListItemIcon>
							<Checkbox
								edge="start"
								color="secondary"
								checked={checked.indexOf(size) !== -1}
								inputProps={{ 'aria-labelledby': labelId }}
							/>
						</ListItemIcon>
						<ListItemText id={labelId} primary={size} />
					</ListItem>
				);
			})}
		</List>
	);
};

const mapStateToProps = state => ({
	sizes: state.product.sizes,
	chosenFilter: state.product.chosenFilter,
});

const mapDispatchToProps = {
	loadFilteredProducts,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Size);
