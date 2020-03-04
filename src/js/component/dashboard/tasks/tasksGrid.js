import React, { Component } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Tasks } from "./tasks";
import { CompletedTasks } from "./completedTask";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar
	}
}));

export const TasksGrid = () => {
	const classes = useStyles();
	return (
		<div className={classes.toolbar}>
			<Grid container spacing={3}>
				<Grid item md={12}>
					<Tasks />
				</Grid>
				<Grid item md={12}>
					<CompletedTasks />
				</Grid>
			</Grid>
		</div>
	);
};
