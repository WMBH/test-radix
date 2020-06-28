import React, { useCallback } from 'react';

const TableHeader = (props) => {
	const { setFilter, sortByIsAsc } = props;

	const onClickItem = useCallback(
		(event) => {
			const abbr = event.target.abbr;
			setFilter({ filterBy: abbr, sortByIsAsc: !sortByIsAsc });
		},
		[ setFilter, sortByIsAsc ]
	);

	return (
		<tr>
			<th className="clickable" onClick={onClickItem} abbr="name">
				Имя
			</th>
			<th className="clickable" onClick={onClickItem} abbr="date">
				Дата первого полета
			</th>
			<th className="clickable" onClick={onClickItem} abbr="timeInSpace">
				Количество дней в космосе
			</th>
			<th className="clickable" onClick={onClickItem} abbr="mission">
				Название миссии
			</th>
			<th className="clickable" onClick={onClickItem} abbr="isMultiple">
				Наличие повторных полетов
			</th>
		</tr>
	);
};

export default TableHeader;
