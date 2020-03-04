import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { SideBar } from "../component/dashboard/sidebar/sidebar";
import { Route, Switch } from "react-router-dom";
import { Calendar } from "../component/calendar/calendar";
import { Tasks } from "../component/dashboard/tasks/tasks";
import PropTypes from "prop-types";

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
				<div className={classes.toolbar}>
					<Route exact path={`${match.path}/calendar`} component={Calendar} />
					<Route exact path={`${match.path}/tasks`} component={Tasks} />
				</div>
			</main>
		</div>
	);
};

Dashboard.propTypes = {
	match: PropTypes.object
};
