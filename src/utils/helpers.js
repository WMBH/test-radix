import capitalize from "lodash/capitalize";

export const convertDateToMS = (date, time) => {
  const dateArr = date.split("/");
  const timeArr = time.split(":");
  // if (
  //   parseInt(dateArr[2].charAt(1), 10) === 9 &&
  //   parseInt(dateArr[2].charAt(0), 10) === 1
  // ) {
  //   dateArr[2] = dateArr[2].slice(-2);
  // } else if (parseInt(dateArr[2].charAt(0), 10) === 0) {
  //   dateArr[2] = dateArr[2].slice(-3);
  // }

  const convertedDate = new Date(
    parseInt(dateArr[2], 10),
    parseInt(dateArr[1], 10) - 1,
    parseInt(dateArr[0], 10),
    parseInt(timeArr[0], 10),
    parseInt(timeArr[1], 10),
    parseInt(timeArr[2], 10)
  ).getTime();

  return new Date(convertedDate);
};

export const capitalLetter = (str) => {
  return str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
};

export const convertDateToDateString = (date) => {
  const convertedDate = new Date(date).toLocaleString("ru");
  return convertedDate;
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};
