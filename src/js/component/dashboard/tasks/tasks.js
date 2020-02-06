import React from "react";
import { CreateTodo } from "./createdTodo";
import { CurrentTodoItem } from "./currentTodoItem";
import "./tasks.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";

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

	return (
		<div className="container mt-5">
			<Card borderRadius={16} className={classes.card} variant="outlined">
				<div className="m-4">
					<CreateTodo />
					<CurrentTodoItem />
				</div>
			</Card>
		</div>
	);
};
