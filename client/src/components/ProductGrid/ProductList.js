import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Pagination from 'material-ui-flat-pagination';

const theme = createMuiTheme();

const ProductList = () => {
	const [offset, setOffset] = useState(0);

	const handleClick = offset => {
		setOffset(offset);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Pagination
				limit={10}
				offset={offset}
				total={100}
				onClick={(e, offset) => handleClick(offset)}
			/>
		</ThemeProvider>
	);
};

export default ProductList;
