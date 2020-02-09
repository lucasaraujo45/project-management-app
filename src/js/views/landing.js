import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/maindashboard.jpeg";
import "../../styles/landing.scss";
import Grid from "@material-ui/core/Grid";

export const Landing = () => (
	<div className="backgroundDiv">
		<div className="container landingMainDiv mt-5">
			<Grid container spacing={4}>
				<Grid item xs={6}>
					<img src={Logo} width="100%" alt="Dashboard" />
				</Grid>
				<Grid item xs={6}>
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
				</Grid>
			</Grid>
		</div>
	</div>
);
