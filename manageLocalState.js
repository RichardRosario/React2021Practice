// REACT
class DisplayMessages extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			messages: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitMessage = this.submitMessage.bind(this);
	}

	handleChange(event) {
		this.setState({
			input: event.target.value,
			messages: this.state.messages
		});
	}

	submitMessage() {
		this.setState({
			input: "",
			messages: [...this.state.messages, this.state.input]
		});
	}

	render() {
		return (
			<div>
				<h2>Type in a new Message:</h2>
				<input onChange={this.handleChange} value={this.state.input} />

				<button onClick={this.submitMessage}>Add message</button>
				{/* map through the messages */}
				<ul>
					{this.state.messages.map((message, index) => {
						return <li key={index}>{message}</li>;
					})}
				</ul>
			</div>
		);
	}
}

// ======================================================
// REDUX
// Define ADD, addMessage(), messageReducer(), redux store

const ADD = "ADD";

const addMessage = message => {
	return {
		type: ADD,
		message
	};
};

const messageReducer = (state = [], action) => {
	switch (action.type) {
		case ADD:
			return [...state, action.message];

		default:
			return state;
	}
};

const store = Redux.createStore(messageReducer);

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<DisplayMessages />
			</Provider>
		);
	}
}
