import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

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
			<ul className="list-unstyled">
				{store.completed.map((item, index) => {
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
							</div>
							<span
								className="ml-5 itemText"
								onClick={item.done ? () => actions.unsetDone(index) : () => actions.setDone(index)}>
								{item.todo}
							</span>
						</li>
					);
				})}
			</ul>
		</Card>
	);
};
