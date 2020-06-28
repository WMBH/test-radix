import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid';

import TableHeader from '../containers/TableHeader';
import TableElement from './TableElement';
import Pagination from './Pagination';
import Preloader from './common/Preloader';
import ReduxForm from './Form';
import { convertDateToMS, capitalLetter } from '../utils/helpers';

import './css/Table.css';

const TableComponent = (props) => {
	const { items, isReady, searchQuery, setSearchQuery, toggleEditMode, editModeOn, addItem, removeItem } = props;

	const [ currentPage, setCurrentPage ] = useState(1);
	const [ postsPerPage ] = useState(14);

	const handleFieldChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSubmitForm = (values) => {
		let newValues = {
			...values,
			id: uuidv4(),
			days: parseInt(values.days),
			name: capitalLetter(values.name),
			date: convertDateToMS(values.date),
			mission: capitalLetter(values.mission)
		};
		addItem(newValues);
		props.reset('edit');
	};

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div>
			<div className="editmode">
				<Button variant="light" onClick={toggleEditMode}>
					Режим редактирования
				</Button>
				<input type="text" value={searchQuery} placeholder="Поиск..." onChange={handleFieldChange} />
				{editModeOn && <ReduxForm onSubmit={handleSubmitForm} />}
			</div>

			<Table striped bordered hover size="md">
				<thead>
					<TableHeader />
				</thead>
				<tbody>
					{!isReady ? (
						<Preloader />
					) : (
						currentPosts.map((dataItem) => (
							<TableElement
								{...dataItem}
								key={dataItem.id}
								onRemove={() => removeItem(dataItem.id)}
								editModeOn={editModeOn}
							/>
						))
					)}
				</tbody>
			</Table>
			<Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate} />
		</div>
	);
};

export default TableComponent;
