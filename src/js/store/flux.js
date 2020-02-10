const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list: [
				{
					todo: "Brush your teeth",
					done: false
				},
				{
					todo: "Walk the dog",
					done: false
				}
			],
			completed: []
		},
		actions: {
			addTodo: (item, element) => {
				let store = getStore();
				store.list.push({
					todo: item,
					done: false
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
			setDone: (index, element) => {
				let store = getStore();
				store.list[index].done = true;
				setStore({ store });
			},
			unsetDone: (index, element) => {
				let store = getStore();
				store.list[index].done = false;
				setStore({ store });
			}
		}
	};
};
export default getState;
