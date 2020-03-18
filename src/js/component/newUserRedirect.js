import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	parag: {
		color: "black"
	}
}));
export const RedirectNewuser = () => {
	const classes = useStyles();
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<p className={classes.parag}>Thank you, New User has been created!</p>
				<p className={classes.parag}>You will be redirected to Login Page now...</p>
			</div>
		</Container>
	);
};
