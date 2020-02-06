import React from "react";
import { Link } from "react-router-dom";

export const Login = () => (
	<div className="text-center mt-5">
		<h1>THIS one is A Login Page</h1>
		<Link to={"/dashbord"}>Dashbord</Link>
	</div>
);
