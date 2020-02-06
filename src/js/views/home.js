import React, { Link } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>THIS IS A LANDING PAGE</h1>

		<Link to="/login">
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</Link>
	</div>
);
