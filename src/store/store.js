import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import mainReducer from './reducers/main-reducer';

const reducers = combineReducers({
	main: mainReducer,
	form: formReducer
});

const store = createStore(reducers);

export default store;
