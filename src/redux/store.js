import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './reducers/main-reducer';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
	main: mainReducer,
	form: formReducer
});

let store = createStore(reducers, applyMiddleware(logger));

window.store = store;

export default store;
