import capitalize from 'lodash/capitalize';

export const convertDateToMS = (date) => {
	const convertedDate = new Date(date).valueOf();
	return convertedDate;
};

export const capitalLetter = (str) => {
	str = str.split(' ');
	const capStr = str.map((word) => capitalize(word));
	return capStr.join(' ');
};

export const convertDateToDateString = (date) => {
	const convertedDate = new Date(date).toDateString();
	return convertedDate;
};
