import React from "react";
import { Provider } from "react-redux";

import store from "./store/store";
import TableContainer from "./containers/Table";

const App = () => {
  return (
    <Provider store={store}>
      <TableContainer />
    </Provider>
  );
};

export default App;
