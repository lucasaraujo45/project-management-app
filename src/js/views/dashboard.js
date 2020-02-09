import React from "react";
import { Tasks } from "../component/dashboard/tasks/tasks";
import { SideBar } from "../component/dashboard/sidebar/sidebar";
import Grid from "@material-ui/core/Grid";
import { CompletedTasks } from "../component/dashboard/tasks/completedTask";

export const Dashboard = () => (
	<div className="mt-2">
		<SideBar />
		<Grid container spacing={3}>
			<Grid item xs={6}>
				<Tasks />
			</Grid>
			<Grid item xs={6}>
				<CompletedTasks />
			</Grid>
		</Grid>
	</div>
);
