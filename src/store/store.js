import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import mainReducer from "./reducers/mainReducer";
import { loadState, saveState } from "../utils/helpers";

const reducers = combineReducers({
  main: mainReducer,
  form: formReducer
});

const persistedState = loadState();

const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState({
    main: store.getState().main
  });
});

window.store = store;

export default store;
