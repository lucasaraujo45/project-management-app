import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
	card: {
		minWidth: 275,
		boxShadow: "0 6px 30px -12px rgba(0,0,0,0.3)",
		"&:hover": {
			boxShadow: "0 10px 60px -12.125px rgba(0,0,0,0.3)"
		}
	}
});

export const CompletedTasks = () => {
	const { store, actions } = useContext(Context);
	const currentTodo = React.createRef();
	const classes = useStyles();

	return (
		<Card borderRadius={16} className={classes.card} variant="outlined">
			<div className="m-4">
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<h2>Completed Tasks</h2>
					</Grid>
					<Grid item xs={6} />
				</Grid>
				<ul className="list-unstyled">
					{store.completed.map((item, index) => {
						return (
							<li className={item.done ? "todoItem done" : "todoItem"} key={index}>
								<span className="ml-5 itemText">{item.todo}</span>
							</li>
						);
					})}
				</ul>
			</div>
		</Card>
	);
};
