import React, { useEffect } from 'react';
import { compose } from 'redux';
import orderBy from 'lodash/orderBy';
import { connect } from 'react-redux';
import * as axios from 'axios';

import TableComponent from '../components/Table';
import {
	getTableData,
	setPageIsReady,
	toggleEditMode,
	setFilter,
	setSearchQuery
} from '../redux/reducers/main-reducer';

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

const sortedBooks = (items, searchQuery) => {
	return items.filter(
		(item) =>
			item.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
			item.mission.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
	);
};

const searchBooks = (items, filterBy, searchQuery, sortByIsAsc) => {
	return sortBy(sortedBooks(items, searchQuery), filterBy, sortByIsAsc);
};

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

	return <TableComponent {...props} />;
};

let mapStateToProps = (state) => {
	return {
		// items: sortBy(state.items, state.filterBy, state.sortByIsAsc),
		items: state.items && searchBooks(state.items, state.filterBy, state.searchQuery, state.sortByIsAsc),
		isReady: state.isReady,
		filterBy: state.filterBy,
		sortByIsAsc: state.sortByIsAsc,
		searchQuery: state.searchQuery,
		editModeOn: state.editModeOn
	};
};

export default compose(
	connect(mapStateToProps, { getTableData, setPageIsReady, setFilter, setSearchQuery, toggleEditMode })
)(TableContainer);
