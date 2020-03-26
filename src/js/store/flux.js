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
			]
		},
		actions: {
			loadUsers: () => {
				fetch("https://3000-ae8400d5-34b8-494a-b953-b85dbd8a431f.ws-ap01.gitpod.io/user") // fetching users from API --- @EddyKudo
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						console.log(data);
						setStore({ users: data });
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
				fetch("https://3000-ae8400d5-34b8-494a-b953-b85dbd8a431f.ws-ap01.gitpod.io/login", {
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
				const { name, last, password, email, phone, todos } = data;
				fetch("https://3000-ae8400d5-34b8-494a-b953-b85dbd8a431f.ws-ap01.gitpod.io/user", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: name,
						last: last,
						password: password,
						email: email,
						phone: phone,
						todos: todos
					})
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
