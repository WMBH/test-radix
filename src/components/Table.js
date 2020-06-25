import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import TableElement from './TableElement';

const TableComponent = (props) => {
	const { items, isReady, searchQuery, setSearchQuery, toggleEditMode, editModeOn } = props;

	console.log(props);

	const handleItemClick = (e) => {
		const { setFilter, sortByIsAsc } = props;
		const abbr = e.target.abbr;
		console.log(abbr);
		sortByIsAsc
			? setFilter({ filterBy: abbr, sortByIsAsc: false })
			: setFilter({ filterBy: abbr, sortByIsAsc: true });
	};

	const handleFieldChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<Table striped bordered hover size="sm">
			<thead>
				<tr>
					<th onClick={handleItemClick} abbr="name">
						Имя
					</th>
					<th onClick={handleItemClick} abbr="date">
						Дата первого полета
					</th>
					<th onClick={handleItemClick} abbr="timeInSpace">
						Количество дней в космосе
					</th>
					<th onClick={handleItemClick} abbr="mission">
						Название миссии
					</th>
					<th onClick={handleItemClick} abbr="isMultiple">
						Наличие повторных полетов
					</th>
				</tr>
			</thead>
			<tbody>
				{!isReady ? 'Загрузка...' : items.map((dataItem) => <TableElement {...dataItem} key={dataItem.name} />)}
			</tbody>
			{editModeOn && <input type="text" placeholder="input" />}
			<input type="text" value={searchQuery} placeholder="Search..." onChange={handleFieldChange} />
			<Button variant="light" onClick={toggleEditMode}>
				Light
			</Button>
		</Table>
	);
};

export default TableComponent;
