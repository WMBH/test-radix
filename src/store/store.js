import { createStore, applyMiddleware, combineReducers } from 'redux';
import mainReducer from './reducers/main-reducer';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
	main: mainReducer,
	form: formReducer
});

const store = createStore(reducers, applyMiddleware(logger));

export default store;
