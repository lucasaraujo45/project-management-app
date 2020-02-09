import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Button } from "@material-ui/core";

export const CurrentTodoItem = () => {
	const { store, actions } = useContext(Context);
	const currentTodo = React.createRef();

	return (
		<ul className="list-unstyled">
			{store.list.map((item, index) => {
				return (
					<li className={item.done ? "todoItem done" : "todoItem"} key={index}>
						<div
							className="container"
							onClick={item.done ? () => actions.unsetDone(index) : () => actions.setDone(index)}>
							<input
								type="checkbox"
								value={item.done}
								onChange={item.done ? () => actions.unsetDone(index) : () => actions.setDone(index)}
								checked={item.done}
							/>
							<span
								className="checkmark"
								onClick={item.done ? () => actions.unsetDone(index) : () => actions.setDone(index)}
							/>
						</div>{" "}
						<span
							className="ml-5 itemText"
							onClick={item.done ? () => actions.unsetDone(index) : () => actions.setDone(index)}>
							{item.todo}
						</span>
						<Button
							className="float-right"
							onClick={() => actions.completeTodo(index)}
							data-toggle="tooltip"
							data-placement="bottom"
							variant="outlined"
							color="secondary">
							Complete
						</Button>
					</li>
				);
			})}
		</ul>
	);
};
