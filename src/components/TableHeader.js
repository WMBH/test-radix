import React from 'react';

const TableHeader = (props) => {
	const handleItemClick = (e) => {
		const { setFilter, sortByIsAsc } = props;
		const abbr = e.target.abbr;
		console.log(abbr);
		sortByIsAsc
			? setFilter({ filterBy: abbr, sortByIsAsc: false })
			: setFilter({ filterBy: abbr, sortByIsAsc: true });
	};

	return (
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
	);
};

export default TableHeader;
