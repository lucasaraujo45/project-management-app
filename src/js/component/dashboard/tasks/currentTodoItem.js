import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Button, IconButton } from "@material-ui/core";
import AlarmIcon from "@material-ui/icons/Alarm";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";

export const CurrentTodoItem = () => {
	const { store, actions } = useContext(Context);
	const currentTodo = React.createRef();

	return (
		<ul className="list-unstyled">
			{store.list.map((item, index) => {
				return (
					<li key={index}>
						<div className="container">
							<MenuIcon />
							<Grid container spacing={3}>
								<Grid md={6}>
									<span
										className="ml-5 itemText"
										onClick={
											item.alarm ? () => actions.unsetalarm(index) : () => actions.setalarm(index)
										}>
										{item.todo}
									</span>
								</Grid>
								<Grid md={3}>
									<IconButton className="checkmark float-right mr-4">
										<AlarmIcon
											className={item.alarm ? "todoItem alarm" : "todoItem"}
											onClick={
												item.alarm
													? () => actions.unsetalarm(index)
													: () => actions.setalarm(index)
											}
											checked={item.alarm}
										/>
									</IconButton>
								</Grid>
								<Grid md={3}>
									<Button
										className="float-right"
										onClick={() => actions.completeTodo(index)}
										data-toggle="tooltip"
										data-placement="bottom"
										variant="outlined"
										color="secondary">
										Complete
									</Button>
								</Grid>
							</Grid>
						</div>{" "}
					</li>
				);
			})}
		</ul>
	);
};
