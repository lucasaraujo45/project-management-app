import React from "react";
import { SideBar } from "../component/dashboard/sidebar/sidebar";
import { Route, Switch } from "react-router-dom";
import { Calendar } from "../component/calendar/calendar";
import { Tasks } from "../component/dashboard/tasks/tasks";
import PropTypes from "prop-types";

export const Dashboard = ({ match }) => (
	<div className="mt-2">
		<SideBar />
		<Route exact path={`${match.path}/calendar`} component={Calendar} />
		<Route exact path={`${match.path}/tasks`} component={Tasks} />

		<Route render={() => <h1>Not found!</h1>} />
	</div>
);

Dashboard.propTypes = {
	match: PropTypes.object
};
