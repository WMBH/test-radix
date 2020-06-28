export const convertDateToMS = (date) => {
	let convertedDate = new Date(date).toDateString();
	let millDate = Date.parse(convertedDate);
	console.log(millDate);
	return millDate;
};

export const capitalLetter = (str) => {
	str = str.split(' ');
	for (let i = 0, x = str.length; i < x; i++) {
		str[i] = str[i][0].toUpperCase() + str[i].substr(1);
	}
	return str.join(' ');
};

export const convertDateToDateString = (date) => {
	let convertedDate = new Date(date).toDateString();
	return convertedDate;
};
