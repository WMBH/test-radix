import { connect } from 'react-redux';

import TableHeader from '../components/TableHeader';
import { setFilter } from '../redux/reducers/main-reducer';

const mapStateToProps = (state) => {
	return {
		sortByIsAsc: state.main.sortByIsAsc
	};
};

export default connect(mapStateToProps, { setFilter })(TableHeader);
