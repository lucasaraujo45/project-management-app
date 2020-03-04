import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { SideBar } from "../component/dashboard/sidebar/sidebar";
import { Route, Switch } from "react-router-dom";
import { Calendar } from "../component/calendar/calendar";
import { Tasks } from "../component/dashboard/tasks/tasks";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { TasksGrid } from "../component/dashboard/tasks/tasksGrid";

const useStyles = makeStyles(theme => ({
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	}
}));

export const Dashboard = ({ match }) => {
	const classes = useStyles();
	return (
		<div className="mt-2">
			<SideBar />
			<main className={classes.content}>
				<Route exact path={`${match.path}/tasks`} component={TasksGrid} />

				<Route exact path={`${match.path}/calendar`} component={Calendar} />

				<Route exact path={`${match.path}/`} component={Tasks} />
			</main>
		</div>
	);
};

Dashboard.propTypes = {
	match: PropTypes.object
};
