const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			users: [
				// {
				// 	name: "Eddy",
				// 	height: "172",
				// 	mass: "77"
				// }
			],
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
			]
		},
		actions: {
			// loadTasks: (item, element) => {
			// 	fetch("https://project-management-tue.herokuapp.com/todo")
			// 		.then(response => response.json())
			// 		.then(data => setStore({ list: data.results }));
			// },
			loadUsers: () => {
				fetch("https://3000-a7dcade3-e613-4cfb-b98e-da01f98461a5.ws-us02.gitpod.io/user") // fetching users from API --- @EddyKudo
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						console.log(data);
						setStore({ users: data.users });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
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
			loginMat: data => {
				const { email, password } = data;
				fetch("https://8080-c6b9f0b4-17a5-4e54-a0d3-e913566cb79b.ws-us02.gitpod.io/login", {
					method: "GET",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ email: email, password: password })
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
			},
			signup: data => {
				const { firstName, lastName, password, email } = data;
				fetch("https://project-management-tue.herokuapp.com/user", {
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
