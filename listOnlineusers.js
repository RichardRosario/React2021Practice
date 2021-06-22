// check to see who is online with filter and map functions

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		// set initial state
		this.state = {
			users: [
				{
					username: "Jeff",
					ordered: true,
					paid: false,
					online: true
				},
				{
					username: "Alan",
					online: false
				},
				{
					username: "Mary",
					ordered: false,
					paid: false,
					online: true
				},
				{
					username: "Jim",
					online: false
				},
				{
					username: "Sara",
					ordered: true,
					paid: true,
					online: true
				},
				{
					username: "Laura",
					ordered: true,
					paid: true,
					online: true
				}
			]
		};
	}
	render() {
		// filter through the array data
		const usersOnline = this.state.users.filter(user => user.online === true);
		// map through the filtered data
		const renderOnline = usersOnline.map(user => {
			return (
				<li key={user.username}>
					<p>
						{user.username} :{" "}
						{user.ordered === true && user.paid === true
							? "Order completed"
							: "Order Pending"}
					</p>
				</li>
			);
		});

		return (
			<div>
				<h1>Current Online Users:</h1>
				<ul>{renderOnline}</ul>
			</div>
		);
	}
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));
