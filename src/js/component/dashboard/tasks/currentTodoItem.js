import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Button, IconButton } from "@material-ui/core";
import AlarmIcon from "@material-ui/icons/Alarm";

export const CurrentTodoItem = () => {
	const { store, actions } = useContext(Context);
	const currentTodo = React.createRef();

	return (
		<ul className="list-unstyled">
			{store.list.map((item, index) => {
				return (
					<li className={item.alarm ? "todoItem alarm" : "todoItem"} key={index}>
						<div
							className="container"
							onClick={item.alarm ? () => actions.unsetalarm(index) : () => actions.setalarm(index)}>
							<input
								type="checkbox"
								value={item.alarm}
								onChange={item.alarm ? () => actions.unsetalarm(index) : () => actions.setalarm(index)}
								checked={item.alarm}
							/>
							<IconButton>
								<AlarmIcon
									className="checkmark"
									onClick={
										item.alarm ? () => actions.unsetalarm(index) : () => actions.setalarm(index)
									}
									checked={item.alarm}
								/>
							</IconButton>

							<span
								className="ml-5 itemText"
								onClick={item.alarm ? () => actions.unsetalarm(index) : () => actions.setalarm(index)}>
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
						</div>{" "}
					</li>
				);
			})}
		</ul>
	);
};
