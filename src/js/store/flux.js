import { publicDecrypt } from "crypto";

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
				fetch("https://3000-c4de9fdb-9f99-48bd-861e-e57ba5f40b60.ws-us02.gitpod.io/user") // fetching users from API --- @EddyKudo
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
				fetch("https://3000-c4de9fdb-9f99-48bd-861e-e57ba5f40b60.ws-us02.gitpod.io/todo")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(data => {
						//console.log(data);
						setStore({ list: data });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			addTodo: (todoObject, element) => {
				let store = getStore();

				// This should happen in the .then() of the fetch after you have successfully update the database
				let username = store.users.filter(user => user.id === todoObject.user)[0].id;
				todoObject.user = username;

				store.list.push(todoObject);
				setStore({ store });

				// Here , you should requery the database and hydrate the store
			},
			sendTasktoDB: data => {
				const { text, createdDate, dueDate, user } = data;
				return (
					fetch(`https://3000-c4de9fdb-9f99-48bd-861e-e57ba5f40b60.ws-us02.gitpod.io/todo/${user}`, {
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
				fetch(`https://3000-c4de9fdb-9f99-48bd-861e-e57ba5f40b60.ws-us02.gitpod.io/todo/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
						"x-access-token": getStore().token
					}
				})
					.then(() => {
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
			removeItem: index => {
				let store = getStore();
				store.completed.splice(index, 1);
				setStore({ store });
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
				return fetch("https://3000-c4de9fdb-9f99-48bd-861e-e57ba5f40b60.ws-us02.gitpod.io/login", {
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
						// console.log(result);
						localStorage.setItem("project-man-app", JSON.stringify(result));
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			},
			signup: data => {
				const { name, last, password, email, phone, todos } = data;
				return fetch("https://3000-c4de9fdb-9f99-48bd-861e-e57ba5f40b60.ws-us02.gitpod.io/user", {
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
