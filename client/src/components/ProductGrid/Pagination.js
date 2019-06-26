import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';

import PropTypes from 'prop-types';

const useStyles = makeStyles({
	button: {
		margin: '1rem .3rem 1rem',
	},
	hiddenButton: {
		display: 'none',
	},
});

const Pagination = props => {
	const {
		products,
		productsTo,
		quantity,
		handleChangePage,
		handleChangeFirstPage,
		handleChangePrevPage,
		handleChangeNextPage,
		handleChangeLastPage,
	} = props;

	const classes = useStyles();

	const pagination = [];
	for (let i = 1; i <= Math.ceil(products.length / quantity); i++) {
		pagination.push(i);
	}

	const pages = pagination.map(page => {
		const prevButton = Math.ceil(productsTo / quantity) - 1;
		const currentButton = Math.ceil(productsTo / quantity);
		const nextButton = Math.ceil(productsTo / quantity) + 1;
		const buttons = prevButton === page || currentButton === page || nextButton === page;
		return (
			<Fab
				key={page}
				className={buttons ? classes.button : classes.hiddenButton}
				onClick={handleChangePage}
				size="medium"
				color={page === Math.ceil(productsTo / quantity) ? 'secondary' : 'default'}
			>
				{page}
			</Fab>
		);
	});

	return (
		<Fragment>
			<Fab
				className={pagination.length > 2 ? classes.button : classes.hiddenButton}
				onClick={handleChangeFirstPage}
				size="medium"
			>
				˂˂
			</Fab>
			<Fab
				className={pagination.length > 2 ? classes.button : classes.hiddenButton}
				onClick={handleChangePrevPage}
				size="medium"
			>
				˂
			</Fab>
			{pages}
			<Fab
				className={pagination.length > 2 ? classes.button : classes.hiddenButton}
				onClick={handleChangeNextPage}
				size="medium"
			>
				˃
			</Fab>
			<Fab
				className={pagination.length > 2 ? classes.button : classes.hiddenButton}
				onClick={handleChangeLastPage}
				size="medium"
			>
				˃˃
			</Fab>
		</Fragment>
	);
};

Pagination.propTypes = {
	products: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired,
	productsTo: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	handleChangePage: PropTypes.func.isRequired,
	handleChangeFirstPage: PropTypes.func.isRequired,
	handleChangePrevPage: PropTypes.func.isRequired,
	handleChangeNextPage: PropTypes.func.isRequired,
	handleChangeLastPage: PropTypes.func.isRequired,
};

export default Pagination;
