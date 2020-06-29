import capitalize from "lodash/capitalize";

export const convertDateToMS = (date) => {
  const convertedDate = new Date(date).valueOf();
  return convertedDate;
};

export const capitalLetter = (str) => {
  return str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
};

export const convertDateToDateString = (date) => {
  const convertedDate = new Date(date).toDateString();
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
