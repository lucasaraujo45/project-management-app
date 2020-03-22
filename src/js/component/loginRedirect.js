import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	parag: {
		color: "black"
	},
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2)
		}
	}
}));
export const RedirectLogin = () => {
	const classes = useStyles();
	const [toHome, setToHome] = useState(false);

	setTimeout(() => setToHome(true), 1500); /*  wait 1.5 secconds and then redirect */
	return (
		<Container component="main" maxWidth="xs">
			{toHome ? <Redirect to="/dashboard" /> : null}
			<CssBaseline />
			<div className={classes.paper}>
				<p className={classes.parag}>Thank you, Everything is correct!</p>
				<p className={classes.parag}>You will be redirected to Your Dashboard now...</p>
				<div className={classes.root}>
					<LinearProgress />
				</div>
			</div>
		</Container>
	);
};
