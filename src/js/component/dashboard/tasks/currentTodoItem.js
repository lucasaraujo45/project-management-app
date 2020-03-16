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

const useStyles = makeStyles({
	ul: {
		paddingLeft: "1rem",
		paddingRight: "1rem"
	}
});

export const CurrentTodoItem = () => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	const currentTodo = React.createRef();
	let todayDate = startOfToday();
	format(todayDate, "MMMM do yyyy");
	console.log(todayDate);

	return (
		<ul className={classes.ul + " list-unstyled"}>
			{store.list.map((item, index) => {
				return (
					<li key={index}>
						<div className="container-fluid pb-2">
							<Grid container spacing={3}>
								<Grid xs={1}>
									<MenuIcon />
								</Grid>
								<Grid xs={3}>
									<span
										className="ml-5 itemText"
										onClick={
											item.alarm ? () => actions.unsetalarm(index) : () => actions.setalarm(index)
										}>
										{item.user}
									</span>
								</Grid>
								<Grid xs={5}>
									<span
										className="ml-5 itemText"
										onClick={
											item.alarm ? () => actions.unsetalarm(index) : () => actions.setalarm(index)
										}>
										{item.todo}
									</span>
								</Grid>
								<Grid xs={1}>
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
								<Grid xs={1}>{format(todayDate, "MMM do yyyy")}</Grid>
								<Grid xs={1}>
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
