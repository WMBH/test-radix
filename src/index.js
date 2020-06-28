import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import TableContainer from './containers/Table';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Provider store={store}>
		<TableContainer />;
	</Provider>,
	document.getElementById('root')
);
