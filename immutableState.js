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
