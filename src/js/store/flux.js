import { publicDecrypt } from "crypto";

const apiHost = "https://proj-man-app-backend.herokuapp.com/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			users: [],
			list: [
				{
					text: "add message showing the day of the week",
					alarm: false,
					user: "Lucas",
					createdDate: "04/01/2020",
					dueDate: "04/11/2020"
				},
				{
					text: "Walk the dog",
					alarm: false,
					user: "Joe",
					createdDate: "04/01/2020",
					dueDate: "04/12/2020"
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
				fetch(apiHost + "/user") // fetching users from API --- @EddyKudo
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						//console.log(data);
						setStore({ users: data });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			loadTodos: () => {
				fetch(apiHost + "/todo")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						console.log(data);
						setStore({ list: data });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			// addTodo: (todoObject, element) => {
			// 	let store = getStore();

			// 	// This should happen in the .then() of the fetch after you have successfully update the database

			// 	todoObject.user = getActions().getUsername(todoObject.user);
			// 	console.log("added todo for user: ", todoObject.user);

			// 	store.list.push(todoObject);
			// 	setStore({ store });

			// 	// Here , you should requery the database and hydrate the store
			// },
			getUsername: userId => {
				let store = getStore();
				let username = "";

				if (store.users.length > 0 && store.users !== undefined) {
					username = store.users.filter(user => user.id === userId)[0].name;
				} else {
					username = "Unknown";
				}

				return username;
			},
			sendTasktoDB: data => {
				const { text, createdDate, dueDate, user } = data;
				alert("userid is " + user);
				return (
					fetch(`${apiHost}/todo/${user}`, {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({
							text: text,
							createdDate: createdDate,
							dueDate: dueDate
						})
					})
						// .then(function(response) {
						// 	if (!response.ok) {
						// 		throw Error(response.statusText);
						// 	}
						// 	return response.json();
						// })
						// .then(result => {
						// 	setStore(result);
						// })
						.then(() => getActions().loadTodos())
						.catch(function(error) {
							console.log("Looks like there was a problem: \n", error);
						})
				);
			},
			completeTodo: id => {
				console.log("token", getStore().token);
				console.log("id", id);
				fetch(`${apiHost}/todo/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						"x-access-token": getStore().token
					}
				})
					.then(() => {
						console.log("completed successfully");
						getActions().loadTodos();
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
				// let store = getStore();
				// store.completed.push(store.list[id]);
				// store.list = store.list.filter((el, index) => {
				// 	return id !== index;
				// });

				// console.log(store.complete);
				// setStore({ store });
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
			removeItem: id => {
				fetch(`${apiHost}/todo/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						"x-access-token": getStore().token
					}
				})
					.then(() => {
						console.log("deleted successfully");
						getActions().loadTodos();
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			logout: () => {
				setStore({ token: null });
				console.log("logout");
			},
			saveToken: data => {
				setStore(data);
			},
			loginMat: data => {
				const { email, password } = data;
				return fetch(apiHost + "/login", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Basic " + window.btoa(email + ":" + password)
					}
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(result => {
						setStore(result);
						console.log("token " + result);
						localStorage.setItem("project-man-app", JSON.stringify(result));
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			signup: data => {
				const { name, last, password, email, phone, todos } = data;
				return fetch(apiHost + "/user", {
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
			},
			checkForToken: () => {
				let tokenCheck = JSON.parse(localStorage.getItem("project-man-app"));

				if (tokenCheck !== null) {
					// set current user data to store
					setStore(tokenCheck);
				}
			}
		}
	};
};

export default getState;
