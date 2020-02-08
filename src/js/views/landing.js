import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/maindashboard.jpeg";
import "../../styles/landing.scss";

export const Landing = () => (
	<div className="container landingMainDiv mt-4">
		<div className="row mt-5">
			<div className="col-5">
				<img src={Logo} width="100%" alt="Dashboard" />
			</div>
			<div className="col-7">
				<h2>
					The best app to increase <br />
					your productivity
				</h2>
				<p>
					A mobile app is a computer program designed to run on a mobile device such as a phone/tablet or
					watch.
				</p>
				<a href="#" className="btn btn-primary btn-lg active mr-3" role="button" aria-pressed="true">
					Sign up
				</a>
				<a href="#" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">
					Login
				</a>
			</div>
		</div>
	</div>
);
