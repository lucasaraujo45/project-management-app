import React, { useContext } from "react";
import { CreateTodo } from "./createdTodo";
import { CurrentTodoItem } from "./currentTodoItem";
import "./tasks.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { Context } from "../../../store/appContext";

const useStyles = makeStyles({
	card: {
		minWidth: 275,
		boxShadow: "0 6px 30px -12px rgba(0,0,0,0.3)",
		"&:hover": {
			boxShadow: "0 10px 60px -12.125px rgba(0,0,0,0.3)"
		}
	}
});

export const Tasks = props => {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	const { store, actions } = useContext(Context);

	const pluralize = count => (count > 1 ? `There are ${count} todos.` : `There is ${count} todo.`);

	return (
		<div className="container mt-5">
			<Card borderRadius={16} className={classes.card} variant="outlined">
				<div className="m-4">
					<Grid container spacing={3}>
						<Grid item xs={4}>
							<h2>Tasks</h2>
						</Grid>
						<Grid item xs={4}>
							<span className="float-right">{pluralize(store.list.length)}</span>
						</Grid>

						<Grid item xs={4}>
							<CreateTodo />
						</Grid>
					</Grid>
					<CurrentTodoItem />
				</div>
			</Card>
		</div>
	);
};
