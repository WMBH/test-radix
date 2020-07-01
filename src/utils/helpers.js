import capitalize from "lodash/capitalize";

export const convertDateToMS = (date, time) => {
  const dateArr = date.split("/");
  const timeArr = time.split(":");
  return new Date(
    parseInt(dateArr[2], 10),
    parseInt(dateArr[1], 10) - 1,
    parseInt(dateArr[0], 10),
    parseInt(timeArr[0], 10),
    parseInt(timeArr[1], 10),
    parseInt(timeArr[2], 10)
  ).getTime();
};

export const capitalLetter = (str) => {
  return str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
};

export const convertDateToDateString = (date) => {
  return new Date(date).toLocaleString("ru");
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

export const validateTime = (value) => {
  if (
    value &&
    value.charAt(0) < 3 &&
    value.charAt(1) < 7 &&
    value.charAt(3) < 7 &&
    value.charAt(6) < 7
  ) {
    return undefined;
  }
  return "Value is invalid";
};
