const JSX = props => {
	return (
		<div className='childComponent'>
			<h2>This is JSX child component</h2>
			<p>Today is: {props.date}</p>
		</div>
	);
};

class JSXDemo extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Hello World</h1>
				<JSX date={Date()} />
				<img src='https://images.unsplash.com/photo-1523676060187-f55189a71f5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80' />
				<Tasks todo={["something", "anything"]} />
				<ControlledInput />
				<MyForm />
			</div>
		);
	}
}

const Tasks = props => {
	return <h3>Tasks: {props.todo.join(", ")}</h3>;
};

//handling change in inputs
class ControlledInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ""
		};
		// this.handleChange = this.handleChange.bind(this);
	}

	handleChange = event => {
		this.setState({
			input: event.target.value
		});
	};

	render() {
		return (
			<div>
				<label>Input: </label>
				<input
					onChange={this.handleChange}
					value={this.state.input}
					type='text'
				/>
				<p>{this.state.input}</p>
			</div>
		);
	}
}

// handling submitted input
class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			submit: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({
			input: event.target.value
		});
	}
	handleSubmit(event) {
		// Change code below this line
		event.preventDefault();
		this.setState({
			submit: this.state.input
		});
		// Change code above this line
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					{/* Change code below this line */}
					<input onChange={this.handleChange} value={this.state.input} />
					{/* Change code above this line */}
					<button type='submit'>Submit!</button>
				</form>
				{/* Change code below this line */}
				<h1>{this.state.submit}</h1>
				{/* Change code above this line */}
			</div>
		);
	}
}

// passing state as props
class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "CamperBot"
		};
	}
	render() {
		return (
			<div>
				{/* Change code below this line */}
				<Navbar name={this.state.name} />
				{/* Change code above this line */}
			</div>
		);
	}
}

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{/* Change code below this line */}
				<h1>Hello, my name is: {this.props.name}</h1>
				{/* Change code above this line */}
			</div>
		);
	}
}

//passing callbacks
class MyCallbacks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: ""
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			inputValue: event.target.value
		});
	}
	render() {
		return (
			<div>
				{/* Change code below this line */}
				<GetInput
					input={this.state.inputValue}
					handleChange={this.handleChange}
				/>
				<RenderInput input={this.state.inputValue} />
				{/* Change code above this line */}
			</div>
		);
	}
}

class GetInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Get Input:</h3>
				<input value={this.props.input} onChange={this.props.handleChange} />
			</div>
		);
	}
}

class RenderInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Input Render:</h3>
				<p>{this.props.input}</p>
			</div>
		);
	}
}

// ReactDOM.render(<JSXDemo />, document.getElementById("root"));
