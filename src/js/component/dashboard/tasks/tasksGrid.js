import React, { Component } from "react";
import { Tasks } from "./tasks";
import { CompletedTasks } from "./completedTask";

export const TasksGrid = () => {
	return (
		<div>
			<Tasks />
			<CompletedTasks />
		</div>
	);
};
