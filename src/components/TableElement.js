import React, { useCallback } from 'react';
import Button from 'react-bootstrap/Button';

import { convertDateToDateString } from '../utils/helpers';
import './css/TableElement.css';

const TableElement = (props) => {
	const { name, date, days, mission, isMultiple, onRemove, id, editModeOn } = props;

	const formDate = useCallback(
		() => {
			return convertDateToDateString(date);
		},
		[ date ]
	);

	const onClickRemove = useCallback(
		() => {
			onRemove(id);
		},
		[ id, onRemove ]
	);

	return (
		<tr>
			<td>{name}</td>
			<td>{formDate(date)}</td>
			<td>{days}</td>
			<td>{mission}</td>
			<td className="tdparent">
				<div> {isMultiple ? 'есть' : 'нет'}</div>
				<div>
					{editModeOn && (
						<Button variant="danger" onClick={onClickRemove} size="sm">
							x
						</Button>
					)}
				</div>
			</td>
		</tr>
	);
};

export default TableElement;
