import { createStore, applyMiddleware, combineReducers } from 'redux';
import mainReducer from './reducers/main-reducer';
import filterReducer from './reducers/main-reducer';
import logger from 'redux-logger';

let reducers = combineReducers({
	filter: filterReducer,
	main: mainReducer
});

let store = createStore(mainReducer, applyMiddleware(logger));

window.store = store;

export default store;
