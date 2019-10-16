import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import store from './store';
import theme from './styles/rootMaterialStyles';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<App />
		</Provider>
	</ThemeProvider>,
	document.getElementById('root'),
);
