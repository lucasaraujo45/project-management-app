import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { SideBar } from "../component/dashboard/sidebar/sidebar";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Calendar } from "../component/calendar/calendar";
import { Chat } from "../component/chat";
import { Users } from "../component/existingUsers";
import { Profile } from "../component/profile";
import { Tasks } from "../component/dashboard/tasks/tasks";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { TasksGrid } from "../component/dashboard/tasks/tasksGrid";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex"
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3)
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		padding: theme.spacing(0, 1),
		...theme.mixins.toolbar
	}
}));

export const Dashboard = ({ match }) => {
	const classes = useStyles();
	console.log("match is: ", match);
	return (
		<div className={classes.root}>
			<SideBar />
			<main className={classes.content}>
				<div className={classes.toolbar}>
					<Route exact path={`${match.path}/tasks`} component={TasksGrid} />
					<Route exact path={`${match.path}/calendar`} component={Calendar} />
					<Route exact path={`${match.path}/chat`} component={Chat} />
					<Route exact path={`${match.path}/users`} component={Users} />
					<Route exact path={`${match.path}/profile`} component={Profile} />
					<Route exact path={`${match.path}/`} component={TasksGrid} />
				</div>
			</main>
		</div>
	);
};

Dashboard.propTypes = {
	match: PropTypes.object
};
