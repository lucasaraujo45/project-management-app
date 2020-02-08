import React from "react";
import { Tasks } from "../component/dashboard/tasks/tasks";
import { SideBar } from "../component/dashboard/sidebar/sidebar";

export const Dashboard = () => (
	<div className="mt-5">
		<SideBar />
		<Tasks />
	</div>
);
