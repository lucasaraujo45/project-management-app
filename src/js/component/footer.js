import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	parag: {
		color: "black"
	}
}));
export const Footer = () => {
	const classes = useStyles();
	return (
		<footer className="footer mt-auto py-3 text-center">
			<p className={classes.parag}>
				Re-Made with <i className="fa fa-heart text-danger" /> by{" "}
				<a href="https://github.com/EddyKudo">Eddy Kudo</a>,{" "}
				<a href="https://github.com/lucasaraujo45">Lucas DeAraujo</a>,{" "}
				<a href="https://github.com/joaocodes">Joao Junger</a>
			</p>
		</footer>
	);
};
