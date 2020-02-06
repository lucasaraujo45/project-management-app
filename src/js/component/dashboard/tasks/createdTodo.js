import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

export const CreateTodo = () => {
	const { store, actions } = useContext(Context);
	const newTodo = React.createRef();

	const createNewTodo = e => {
		e.preventDefault();
		actions.addTodo(newTodo.current.value);
		newTodo.current.value = "";
	};

	return (
		<div>
			<form onSubmit={createNewTodo} className="mb-5">
				<input className="form-control" type="text" ref={newTodo} />
			</form>
		</div>
	);
};
