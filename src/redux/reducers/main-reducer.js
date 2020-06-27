const GET_TABLE_DATA = 'GET_TABLE_DATA';
const SET_PAGE_IS_READY = 'SET_PAGE_IS_READY';
const SET_FILTER = 'SET_FILTER';
const SET_QUERY = 'SET_QUERY';
const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

const initialState = {
	items: [],
	isReady: false,
	searchQuery: '',
	filterBy: 'name',
	sortByIsAsc: true,
	editModeOn: false
};

const mainReducer = (state = initialState, action) => {
	// debugger;
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				...state,
				items: [ ...state.items, action.payload ]
			};
		case 'REMOVE_ITEM':
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload)
			};
		case 'GET_TABLE_DATA':
			return {
				...state,
				items: action.payload
			};
		case 'SET_PAGE_IS_READY':
			return {
				...state,
				isReady: action.payload
			};
		case 'SET_FILTER':
			return {
				...state,
				filterBy: action.payload.filterBy,
				sortByIsAsc: action.payload.sortByIsAsc
			};
		case 'SET_QUERY':
			return {
				...state,
				searchQuery: action.payload
			};
		case 'TOGGLE_EDIT_MODE':
			return {
				...state,
				editModeOn: !state.editModeOn
			};
		default:
			return state;
	}
};

export const getTableData = (items) => ({ type: GET_TABLE_DATA, payload: items });
export const setPageIsReady = (boolean) => ({ type: SET_PAGE_IS_READY, payload: boolean });
export const setFilter = (payload) => ({ type: SET_FILTER, payload });
export const setSearchQuery = (searchQuery) => ({ type: SET_QUERY, payload: searchQuery });
export const toggleEditMode = () => ({ type: TOGGLE_EDIT_MODE });
export const addItem = (obj) => ({ type: ADD_ITEM, payload: obj });
export const removeItem = (id) => ({ type: REMOVE_ITEM, payload: id });

export default mainReducer;
