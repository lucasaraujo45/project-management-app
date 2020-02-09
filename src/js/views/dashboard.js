import React from "react";
import { Tasks } from "../component/dashboard/tasks/tasks";
import { SideBar } from "../component/dashboard/sidebar/sidebar";
import Grid from "@material-ui/core/Grid";

export const Dashboard = () => (
	<div className="mt-5">
		<SideBar />
		<Grid container spacing={3}>
			<Tasks />
		</Grid>
	</div>
);
