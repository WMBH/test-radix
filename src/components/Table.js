import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { v4 as uuidv4 } from 'uuid';

import './Table.css';
import TableHeader from '../containers/TableHeader';

import TableElement from './TableElement';
import ReduxForm from './Form';

const TableComponent = (props) => {
	const { items, isReady, searchQuery, setSearchQuery, toggleEditMode, editModeOn, addItem, removeItem } = props;

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

	const convertDateToMS = (date) => {
		let convertedDate = new Date(date).toDateString();
		let millDate = Date.parse(convertedDate);
		console.log(millDate);
		return millDate;
	};

	const capitalLetter = (str) => {
		str = str.split(' ');

		for (let i = 0, x = str.length; i < x; i++) {
			str[i] = str[i][0].toUpperCase() + str[i].substr(1);
		}

		return str.join(' ');
	};

	const handleSubmit = (values) => {
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

	return (
		<div>
			<div className="editmode">
				<Button variant="light" onClick={toggleEditMode}>
					Режим редактирования
				</Button>
				<input type="text" value={searchQuery} placeholder="Поиск..." onChange={handleFieldChange} />
				{editModeOn && <ReduxForm onSubmit={handleSubmit} />}
			</div>

			<Table striped bordered hover size="md">
				<thead>
					<TableHeader />
					{/* <tr>
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
					</tr> */}
				</thead>
				<tbody>
					{!isReady ? (
						'Загрузка...'
					) : (
						items.map((dataItem) => (
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
		</div>
	);
};

export default TableComponent;
