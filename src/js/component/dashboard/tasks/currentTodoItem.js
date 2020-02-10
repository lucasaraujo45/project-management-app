import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Button, IconButton } from "@material-ui/core";
import AlarmIcon from "@material-ui/icons/Alarm";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";

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
							<MenuIcon />
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
							<IconButton className="float-right mr-4">
								<AlarmIcon
									className="checkmark mt-2"
									onClick={
										item.alarm ? () => actions.unsetalarm(index) : () => actions.setalarm(index)
									}
									checked={item.alarm}
								/>
							</IconButton>
						</div>{" "}
					</li>
				);
			})}
		</ul>
	);
};
