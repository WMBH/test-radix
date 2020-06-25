import React, { useEffect } from 'react';
import { compose } from 'redux';
import { getTableData, setPageIsReady } from '../redux/reducers/main-reducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import TableComponent from '../components/Table';

const TableContainer = (props) => {
	const { getTableData, setPageIsReady } = props;
	useEffect(
		() => {
			axios.get('/data.json').then(({ data }) => {
				getTableData(data);
				setPageIsReady(true);
			});
		},
		[ getTableData, setPageIsReady ]
	);

	return <TableComponent list={props.items} />;
};

const mapStateToProps = ({ items }) => {
	return {
		items
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		getTableData: (items) => dispatch(getTableData(items)),
// 		setPageIsReady: (boolean) => dispatch(setPageIsReady(boolean))
// 	};
// };

export default compose(connect(mapStateToProps, { getTableData, setPageIsReady }))(TableContainer);
