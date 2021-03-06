import { connect } from "react-redux";

import TableHeader from "../components/TableHeader";
import { setFilter } from "../store/reducers/mainReducer";

const mapStateToProps = (state) => {
  const { sortByIsAsc } = state.main;

  return {
    sortByIsAsc
  };
};

export default connect(mapStateToProps, { setFilter })(TableHeader);
