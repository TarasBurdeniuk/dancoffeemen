import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
	number: {
		margin: '1rem .3rem',
	},
});

const Pagination = props => {
	const { products, productsTo, quantity, handleChangePage } = props;

	const classes = useStyles();

	const pagination = [];
	for (let i = 1; i <= Math.ceil(products.length / quantity); i++) {
		pagination.push(i);
	}

	const pages = pagination.map(page => {
		return (
			<Fab
				key={page}
				size="small"
				color={page === Math.ceil(productsTo / quantity) ? 'secondary' : 'default'}
				aria-label="Add"
				className={classes.number}
				onClick={handleChangePage}
			>
				{page}
			</Fab>
		);
	});

	return <Fragment>{pages}</Fragment>;
};

Pagination.propTypes = {
	products: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
	productsTo: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	handleChangePage: PropTypes.func.isRequired,
};

export default Pagination;
