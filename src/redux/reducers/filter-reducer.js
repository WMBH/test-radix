const SET_FILTER = 'SET_FILTER';
const SET_QUERY = 'SET_QUERY';

const initialState = {
	searchQuery: 'dasdas',
	filterBy: 'name'
};

const filterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_FILTER':
			return {
				...state,
				filterBy: action.payload
			};
		case 'SET_QUERY':
			return {
				...state,
				searchQuery: action.payload
			};
		default:
			return state;
	}
};

export const setFilter = (filterBy) => ({ type: SET_FILTER, payload: filterBy });
export const setSearchQuery = (searchQuery) => ({ type: SET_QUERY, payload: searchQuery });

export default filterReducer;
