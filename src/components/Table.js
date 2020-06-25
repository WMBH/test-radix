import React from 'react';

import Table from 'react-bootstrap/Table';
import TableElement from './TableElement';

const TableComponent = (props) => {
	const { list } = props;
	console.log(props);

	return (
		<Table striped bordered hover size="sm">
			<thead>
				<tr>
					<th>Имя</th>
					<th>Дата первого полета</th>
					<th>Количество дней в космосе</th>
					<th>Название миссии</th>
					<th>Наличие повторных полетов</th>
				</tr>
			</thead>
			<tbody>{list.map((dataItem) => <TableElement {...dataItem} />)}</tbody>
		</Table>
	);
};

export default TableComponent;
