import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import TableContainer from "./containers/Table";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Provider store={store}>
      <TableContainer />
    </Provider>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
