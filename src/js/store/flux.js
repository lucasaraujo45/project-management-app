const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			users: [],
			list: [
				{
					todo: "add message showing the day of the week",
					alarm: false,
					user: "Lucas"
				},
				{
					todo: "Walk the dog",
					alarm: false,
					user: "Joe"
				}
			],
			completed: [
				{
					todo: "Create bell notificationsooo",
					alarm: false
				}
			],
			users: [
				{
					user: "Lucas"
				},
				{
					user: "Joe"
				},
				{
					user: "Eddy"
				},
				{
					token: null,
					user: null
				}
			]
		},
		actions: {
			// loadTasks: (item, element) => {
			// 	fetch("https://project-management-tue.herokuapp.com/todo")
			// 		.then(response => response.json())
			// 		.then(data => setStore({ list: data.results }));
			// },
			addTodo: (item, element) => {
				let store = getStore();
				store.list.push({
					todo: item,
					alarm: false
				});
				setStore({ store });
			},
			completeTodo: id => {
				let store = getStore();
				store.completed.push(store.list[id]);
				store.list = store.list.filter((el, index) => {
					return id !== index;
				});
				console.log(store.complete);
				setStore({ store });
			},
			setalarm: (index, element) => {
				let store = getStore();
				store.list[index].alarm = true;
				setStore({ store });
			},
			unsetalarm: (index, element) => {
				let store = getStore();
				store.list[index].alarm = false;
				setStore({ store });
			},
			removeItem: index => {
				let store = getStore();
				store.completed.splice(index, 1);
				setStore({ store });
			},
			logout: () => {
				//setStore({ token: null });
				console.log("logout");
			},
			login: (username, password) => {
				fetch("https://project-management-tue.herokuapp.com/login", {
					method: "GET",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						username: username,
						password: password
					})
				})
					.then(response => response.json())
					.then(token => {
						if (typeof token.msg != "undefined") {
							// Notify.error(token.msg);
						} else {
							setStore({ token: token.jwt, currentUser: token.bubu });
							// history.push("/dashboard");
						}
					});
			},
			signup: data => {
				const { firstName, lastName, password, email } = data;
				fetch("https://3000-c51005f3-7a3b-4556-9fd6-71e7fb37057f.ws-us02.gitpod.io/user", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ firstName: firstName, lastName: lastName, password: password, email: email })
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(result => {
						setStore(result);
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};
export default getState;
