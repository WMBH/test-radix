import React from 'react';

const TableElement = (props) => {
	const { name, date, days, mission, isMultiple } = props;

	const convertDate = (date) => {
		let convertedDate = new Date(date).toLocaleString();
		return convertedDate;
	};

	return (
		<tr>
			<td>{name}</td>
			<td>{convertDate(date)}</td>
			<td>{days}</td>
			<td>{mission}</td>
			<td>{isMultiple ? 'есть' : 'нет'}</td>
		</tr>
	);
};

export default TableElement;
