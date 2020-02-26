const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list: [
				{
					todo: "add message showing the day of the week",
					alarm: false
				},
				{
					todo: "Walk the dog",
					alarm: false
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
			}
		}
	};
};
export default getState;
