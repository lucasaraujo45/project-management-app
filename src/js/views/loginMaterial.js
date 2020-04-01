import React, { useContext, useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://github.com/EddyKudo">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export const LoginMaterial = () => {
	const form = React.createRef();
	let history = useHistory();
	const classes = useStyles();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// let tokenCheck = JSON.parse(localStorage.getItem)("project-man-app");
		// if (tokenCheck !== null) {
		// 	actions.saveToken(tokenCheck); // token is present, so do something (set loggedIn, maybe?)
		// }
	}, []);

	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
		remember: false
	});
	const handleSubmit = e => {
		e.preventDefault();

		let validity = form.current.reportValidity();
		// console.log(validity);
		if (validity) {
			let runSignup = actions.loginMat(formValues);
			runSignup.then(res => {
				if (store.token !== null) history.push("/loginsuccess");
			});
		}
	};
	const handleChange = e => {
		let key = e.target.name;
		let value;
		if (key !== "remember") {
			value = e.target.value;
		} else {
			value = e.target.checked;
		}
		setFormValues({
			...formValues,
			[key]: value
		});
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Login to Account
				</Typography>
				<form className={classes.form} ref={form} noValidate onSubmit={e => handleSubmit(e)}>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						type="email"
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={e => handleChange(e)}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={e => handleChange(e)}
					/>
					<FormControlLabel
						control={
							<Checkbox
								value={formValues.remember}
								name="remember"
								color="primary"
								onChange={e => handleChange(e)}
							/>
						}
						label="Remember me"
					/>
					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						Login
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="/signup" variant="body2">
								{"Don't have an account? Sign Up now!"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
};
