import React from "react";
import Logo from "../../img/maindashboard.jpeg";
import "../../styles/landing.scss";
import Grid from "@material-ui/core/Grid";

export const Landing = () => (
	<div className="backgroundDiv">
		<div className="container landingMainDiv mt-5">
			<Grid container spacing={4}>
				<Grid item xs={12} md={6}>
					<img src={Logo} width="100%" alt="Dashboard" />
				</Grid>
				<Grid item xs={12} md={6}>
					<h2 className="firsthead">
						The best app to increase <br />
						your productivity
					</h2>
					<p>
						A mobile app is a computer program designed to run on a mobile device such as a phone/tablet or
						watch.
					</p>
					<a href="/signup" className="btn btn-primary btn-lg active mr-4" role="button" aria-pressed="true">
						Sign up
					</a>
					<a href="/login" className="loginscreen ml-3">
						Already have an account? Log in
					</a>
				</Grid>
			</Grid>
		</div>
	</div>
);
