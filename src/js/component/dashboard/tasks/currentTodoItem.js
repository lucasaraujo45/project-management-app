import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { Button, IconButton } from "@material-ui/core";
import AlarmIcon from "@material-ui/icons/Alarm";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { startOfToday } from "date-fns";
import { format } from "date-fns";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export const CurrentTodoItem = () => {
	const { store, actions } = useContext(Context);
	const currentTodo = React.createRef();
	let todayDate = startOfToday();
	format(todayDate, "MMMM do yyyy");
	console.log(todayDate);

	return (
		<>
			{store.list.map((item, index) => {
				return (
					<TableRow key={index}>
						<TableCell>
							<MenuIcon />
						</TableCell>
						<TableCell>
							<span
								className="itemText"
								onClick={item.alarm ? () => actions.unsetalarm(index) : () => actions.setalarm(index)}>
								{item.user}
							</span>
						</TableCell>
						<TableCell>
							<span
								className="itemText"
								onClick={item.alarm ? () => actions.unsetalarm(index) : () => actions.setalarm(index)}>
								{item.text}
							</span>
						</TableCell>
						<TableCell align="right">
							<IconButton>
								<AlarmIcon
									className={item.alarm ? "todoItem alarm" : "todoItem"}
									onClick={
										item.alarm ? () => actions.unsetalarm(index) : () => actions.setalarm(index)
									}
									checked={item.alarm}
								/>
							</IconButton>
						</TableCell>
						<TableCell align="right">{item.createdDate}</TableCell>
						<TableCell align="right">{item.dueDate}</TableCell>
						<TableCell align="right">
							<Button
								className="ml-1 mr-1"
								onClick={() => actions.completeTodo(index)}
								data-toggle="tooltip"
								data-placement="bottom"
								variant="outlined"
								color="secondary">
								Complete
							</Button>
						</TableCell>
					</TableRow>
				);
			})}
		</>
	);
};
