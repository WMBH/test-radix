export const convertDateToMS = (date) => {
	const convertedDate = new Date(date).valueOf();
	return convertedDate;
};

export const capitalLetter = (str) => {
	str = str.split(' ');
	for (let i = 0, x = str.length; i < x; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].substr(1);
	}
	return str.join(' ');
};

export const convertDateToDateString = (date) => {
	const convertedDate = new Date(date).toDateString();
	return convertedDate;
};
