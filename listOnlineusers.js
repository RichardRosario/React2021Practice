// check to see who is online with filter and map functions

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		// set initial state
		this.state = {
			users: [
				{
					username: "Jeff",
					online: true
				},
				{
					username: "Alan",
					online: false
				},
				{
					username: "Mary",
					online: true
				},
				{
					username: "Jim",
					online: false
				},
				{
					username: "Sara",
					online: true
				},
				{
					username: "Laura",
					online: true
				}
			]
		};
	}
	render() {
		// filter through the array data
		const usersOnline = this.state.users.filter(user => user.online === true);
		// map through the filtered data
		const renderOnline = usersOnline.map(user => (
			<li key={user.username}>{user.username}</li>
		));
		return (
			<div>
				<h1>Current Online Users:</h1>
				<ul>{renderOnline}</ul>
			</div>
		);
	}
}
