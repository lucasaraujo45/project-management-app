import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
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
			<Link color="inherit" to="https://github.com/EddyKudo">
				Website
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
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));

export const SignUp = props => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	let history = useHistory();
	const form = React.createRef();

	const [formValues, setFormValues] = useState({
		name: "",
		last: "",
		email: "",
		password: "",
		phone: "",
		marketing: false,
		todos: []
	});

	const handleSubmit = e => {
		e.preventDefault();
		let validity = form.current.reportValidity();
		if (validity) {
			let runSignup = actions.signup(formValues);
			runSignup.then(res => {
				if (store.message === "New User Created!") history.push("/usercreated");
			});
		}
	};

	const handleChange = e => {
		let key = e.target.name;
		let value;
		if (key !== "marketing") {
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
					Sign up
				</Typography>
				<form className={classes.form} ref={form} noValidate onSubmit={e => handleSubmit(e)}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete="fname"
								type="text"
								name="name"
								variant="outlined"
								required
								fullWidth
								id="firsName"
								label="First Name"
								onChange={e => handleChange(e)}
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant="outlined"
								required
								type="text"
								fullWidth
								id="lastName"
								label="Last Name"
								name="last"
								onChange={e => handleChange(e)}
								autoComplete="lname"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								type="email"
								id="email"
								label="Email Address"
								name="email"
								onChange={e => handleChange(e)}
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								onChange={e => handleChange(e)}
								autoComplete="current-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								type="tel"
								pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
								id="phone"
								label="Phone"
								name="phone"
								onChange={e => handleChange(e)}
								autoComplete="phone"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										value={formValues.marketing}
										name="marketing"
										onChange={e => handleChange(e)}
										color="primary"
									/>
								}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid>
					</Grid>
					<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
						Sign Up
					</Button>

					<Grid container justify="flex-end">
						<Grid item>
							<Link to="/login" variant="body2">
								Already have an account? Log in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
};
