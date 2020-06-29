import mainReducer, {
  addItem,
  removeItem,
  setPageIsReady,
  setFilter,
  setSearchQuery,
  toggleEditMode
} from "./mainReducer";

const initialState = {
  items: [
    {
      name: "sad",
      date: 272926800,
      days: 8,
      mission: "sadjk",
      isMultiple: true,
      id: "sadsad=-123d-dsad"
    }
  ],
  isReady: false,
  searchQuery: "",
  filterBy: "name",
  sortByIsAsc: true,
  editModeOn: false
};

const incrementLength = initialState.items.length + 1;
const decrementLength = initialState.items.length - 1;

it("new item should be added", () => {
  const action = addItem({ test: "pass" });

  const newState = mainReducer(initialState, action);

  expect(newState.items.length).toBe(incrementLength);
});

it("item should be removed", () => {
  const action = removeItem("sadsad=-123d-dsad");

  const newState = mainReducer(initialState, action);
  expect(newState.items.length).toBe(decrementLength);
});

it("values that go to store are vaild types", () => {
  const action = addItem({
    name: "sad",
    date: 272926800,
    days: 8,
    mission: "sadjk",
    isMultiple: true,
    id: "sadsad=-123d-dsad"
  });
  const newState = mainReducer(initialState, action);

  expect(typeof newState.items[1].name).toBe("string");
  expect(typeof newState.items[1].date).toBe("number");
  expect(typeof newState.items[1].days).toBe("number");
  expect(typeof newState.items[1].mission).toBe("string");
  expect(typeof newState.items[1].isMultiple).toBe("boolean");
  expect(typeof newState.items[1].id).toBe("string");
});

it("is ready is updated", () => {
  const action = setPageIsReady(true);
  const newState = mainReducer(initialState, action);

  expect(typeof action.payload).toBe("boolean");
  expect(newState.isReady).toBe(true);
});

it("set filter is working properly", () => {
  const action = setFilter({ filterBy: "name", sortByIsAsc: true });
  const newState = mainReducer(initialState, action);

  expect(newState.filterBy).toBe(action.payload.filterBy);
  expect(newState.sortByIsAsc).toBe(action.payload.sortByIsAsc);
});

it("set query is working properly", () => {
  const action = setSearchQuery("asx");
  const newState = mainReducer(initialState, action);

  expect(typeof newState.searchQuery).toBe("string");
  expect(newState.searchQuery).toBe(action.payload);
});

it("set query is working properly", () => {
  const action = toggleEditMode();
  const newState = mainReducer(initialState, action);

  expect(typeof newState.editModeOn).toBe("boolean");
  expect(newState.editModeOn).toBe(!initialState.editModeOn);
});
