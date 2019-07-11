import React, { useState, useEffect } from 'react';
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
import Spinner from '../Loading';

const useStyles = makeStyles(theme => ({
	container: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

const Brands = ({ loadBrands, brands }) => {
	useEffect(() => {
		loadBrands();
	}, [loadBrands]);

	const classes = useStyles();
	const [checked, setChecked] = useState([]);

	const handleToggle = value => {
		const currentIndex = checked.indexOf(value);
		const newChecked = [...checked];

		if (currentIndex === -1) {
			newChecked.push(value);
			console.log(`aad ${value}`);
		} else {
			newChecked.splice(currentIndex, 1);
			console.log(`delete ${value}`);
		}
		console.log(newChecked);
		setChecked(newChecked);
	};

	return brands === null ? (
		<Spinner />
	) : (
		<List className={classes.container}>
			{brands.map(brand => {
				const labelId = brand;
				return (
					<ListItem key={brand} dense button onClick={() => handleToggle(brand)}>
						<ListItemIcon>
							<Checkbox
								edge="start"
								color="secondary"
								checked={checked.indexOf(brand) !== -1}
								inputProps={{ 'aria-labelledby': labelId }}
							/>
						</ListItemIcon>
						<ListItemText id={labelId} primary={brand} />
						{/*<ListItemSecondaryAction>*/}
						{/*	<Chip label={brand.goodsQuantity} />*/}
						{/*</ListItemSecondaryAction>*/}
					</ListItem>
				);
			})}
		</List>
	);
};

const mapStateToProps = state => ({
	brands: state.product.brands,
});

const mapDispatchToProps = {
	loadBrands,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Brands);
