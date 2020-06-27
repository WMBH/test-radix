import React from 'react';
import Button from 'react-bootstrap/Button';
import './TableElement.css';

const TableElement = (props) => {
	const { name, date, days, mission, isMultiple, onRemove, id, editModeOn } = props;

	const convertDate = (date) => {
		let convertedDate = new Date(date).toDateString();
		return convertedDate;
	};

	const handleOnRemove = () => {
		onRemove(id);
	};

	return (
		<tr>
			<td>{name}</td>
			<td>{convertDate(date)}</td>
			<td>{days}</td>
			<td>{mission}</td>
			<td className="tdparent">
				<div> {isMultiple ? 'есть' : 'нет'}</div>
				<div>
					{editModeOn && (
						<Button variant="danger" onClick={handleOnRemove} size="sm">
							x
						</Button>
					)}
				</div>
			</td>
		</tr>
	);
};

export default TableElement;
