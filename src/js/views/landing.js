import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => (
	<div className="text-center mt-5">
		<h1>THIS IS A LANDING PAGE</h1>
		<Link to="/login">Login</Link>
	</div>
);
