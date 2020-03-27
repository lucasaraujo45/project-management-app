import React, { useContext } from "react";
import { CreateTodo } from "./createTaskModal";
import { CurrentTodoItem } from "./currentTodoItem";
import "./tasks.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { Context } from "../../../store/appContext";
import Divider from "@material-ui/core/Divider";
import { spacing } from "@material-ui/system";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
	card: {
		minWidth: 275,
		boxShadow: "0 6px 30px -12px rgba(0,0,0,0.3)",
		"&:hover": {
			boxShadow: "0 10px 60px -12.125px rgba(0,0,0,0.3)"
		},
		Divider: {
			padding: 4
		}
	}
});

export const Tasks = props => {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	const { store, actions } = useContext(Context);

	const pluralize = count => (count > 1 ? `There are ${count} tasks` : `There is ${count} task`);

	return (
		<div>
			<Card borderRadius={16} className={classes.card} variant="outlined">
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>
									<h2>Tasks</h2>
								</TableCell>
								<TableCell />
								<TableCell />
								<TableCell />
								<TableCell />
								<TableCell align="right">
									<h4>
										<span>{pluralize(store.list.length)}</span>
									</h4>
								</TableCell>

								<TableCell align="right">
									<CreateTodo />
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>
									<p> </p>
								</TableCell>
								<TableCell>
									<h3>User</h3>
								</TableCell>
								<TableCell>
									<h3>Task</h3>
								</TableCell>
								<TableCell align="right">
									<h3>Remind</h3>
								</TableCell>
								<TableCell align="right">
									<h3>Added</h3>
								</TableCell>
								<TableCell align="right">
									<h3>Due</h3>
								</TableCell>
								<TableCell align="right">
									<h3> </h3>
								</TableCell>
							</TableRow>{" "}
							<CurrentTodoItem />
						</TableBody>
					</Table>
				</TableContainer>
			</Card>
		</div>
	);
};
