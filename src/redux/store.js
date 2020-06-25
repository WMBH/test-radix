import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import mainReducer from './reducers/main-reducer';

let reducer = mainReducer;

let store = createStore(reducer, applyMiddleware(logger));

export default store;
