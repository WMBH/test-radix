const GET_TABLE_DATA = 'GET_TABLE_DATA';
const SET_PAGE_IS_READY = 'SET_PAGE_IS_READY';

const initialState = {
	items: [],
	isReady: false
};

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
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
		default:
			return state;
	}
};

export const getTableData = (items) => ({ type: GET_TABLE_DATA, payload: items });
export const setPageIsReady = (boolean) => ({ type: SET_PAGE_IS_READY, payload: boolean });

export default mainReducer;
