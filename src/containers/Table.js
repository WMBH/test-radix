import React, { useEffect } from 'react';
import orderBy from 'lodash/orderBy';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { reset } from 'redux-form';

import TableComponent from '../components/Table';
import {
	getTableData,
	setPageIsReady,
	toggleEditMode,
	setFilter,
	setSearchQuery,
	addItem,
	removeItem
} from '../store/reducers/main-reducer';

const sortBy = (items, filterBy, sortByIsAsc) => {
	switch (filterBy) {
		case 'name':
			return sortByIsAsc ? orderBy(items, 'name', 'asc') : orderBy(items, 'name', 'desc');
		case 'date':
			return sortByIsAsc ? orderBy(items, 'date', 'asc') : orderBy(items, 'date', 'desc');
		case 'timeInSpace':
			return sortByIsAsc ? orderBy(items, 'days', 'desc') : orderBy(items, 'days', 'asc');
		case 'mission':
			return sortByIsAsc ? orderBy(items, 'mission', 'asc') : orderBy(items, 'mission', 'desc');
		case 'isMultiple':
			return sortByIsAsc ? orderBy(items, 'isMultiple', 'desc') : orderBy(items, 'isMultiple', 'asc');
		default:
			return items;
	}
};

const sortedItems = (items, searchQuery) => {
	return items.filter(
		(item) =>
			item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
			item.mission.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
	);
};

const searchItems = (items, filterBy, searchQuery, sortByIsAsc) => {
	return sortBy(sortedItems(items, searchQuery), filterBy, sortByIsAsc);
};

const TableContainer = (props) => {
	const { getTableData, setPageIsReady } = props;
	useEffect(() => {
		axios.get('/data.json').then(({ data }) => {
			const dataWithIDs = data.map((item) => ({ ...item, id: uuidv4() }));
			getTableData(dataWithIDs);
			setPageIsReady(true);
		});
	}, []);
	return <TableComponent {...props} />;
};

const mapStateToProps = (state) => {
	const { items, isReady, filterBy, sortByIsAsc, searchQuery, editModeOn } = state.main;

	return {
		items:
			items && searchItems(state.main.items, state.main.filterBy, state.main.searchQuery, state.main.sortByIsAsc),
		isReady,
		filterBy,
		sortByIsAsc,
		searchQuery,
		editModeOn
	};
};

export default connect(mapStateToProps, {
	getTableData,
	setPageIsReady,
	setFilter,
	addItem,
	setSearchQuery,
	toggleEditMode,
	removeItem,
	reset
})(TableContainer);
