const ADD_TO_DO = "ADD_TO_DO";

// A list of strings representing tasks to do:
const todos = [
	"Go to the store",
	"Clean the house",
	"Cook dinner",
	"Learn to code"
];

const immutableReducer = (state = todos, action) => {
	switch (action.type) {
		case ADD_TO_DO:
			// using concat to make a copy of state
			return state.concat(action.todo);
		// using spread operator to make a shallow copy of state use only in one-dimensional array
		// return [...todos, action.todo];

		default:
			return state;
	}
};

const addToDo = todo => {
	return {
		type: ADD_TO_DO,
		todo
	};
};

const store = Redux.createStore(immutableReducer);

const immReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
	switch (action.type) {
		case "REMOVE_ITEM":
			// Don't mutate state here or the tests will fail
			return state
				.slice(0, action.index)
				.concat(state.slice(action.index + 1, state.length));
		//   ...state.slice(0,action.index),
		// ...state.slice(action.index + 1, state.length)

		default:
			return state;
	}
};

const removeItem = index => {
	return {
		type: "REMOVE_ITEM",
		index
	};
};

const store = Redux.createStore(immReducer);
