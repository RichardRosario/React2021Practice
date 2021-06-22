// define action constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// define the reduce
const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return ++state;
			break;

		case DECREMENT:
			return state - 1;
			break;

		default:
			return state;
	}
};

// define action types
const incAction = () => {
	return { type: INCREMENT };
};

const decAction = () => {
	return { type: DECREMENT };
};

// create the redux store
const store = Redux.createStore(counterReducer);
