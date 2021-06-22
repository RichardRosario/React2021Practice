const ADD = "ADD";

const reducer = (state = 0, action) => {
	switch (action.type) {
		case ADD:
			return state + 1;
		default:
			return state;
	}
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// register listener for count
const incrementCount = () => (count += 1);

// subscribe listener to store
store.subscribe(incrementCount);

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
