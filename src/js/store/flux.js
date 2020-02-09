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
			completeTodo: (item, index, element) => {
				let store = getStore();
				store.list.splice(index, 1);
				store.completed.push((store.list.done = true));
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
