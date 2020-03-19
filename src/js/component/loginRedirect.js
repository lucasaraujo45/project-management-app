import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";

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
export const RedirectLogin = () => {
	const classes = useStyles();
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<p className={classes.parag}>Thank you, Everything is correct!</p>
				<p className={classes.parag}>You will be redirected to Your Dashboard now...</p>
				<Link href="/dashboard">Click to go to Dashboard</Link>
			</div>
		</Container>
	);
};
