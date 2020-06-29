import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import mainReducer from "./reducers/mainReducer";

const reducers = combineReducers({
  main: mainReducer,
  form: formReducer
});

const store = createStore(reducers);

export default store;
