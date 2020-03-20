import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	parag: {
		color: "black"
	},
	userIcon: {
		fontSize: "120px",
		float: "right",
		marginLeft: "10px"
	}
}));

export const Users = props => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	return (
		<div className="w-100">
			{store.users.length > 0 ? (
				<ul className="mx-auto list-unstyled">
					{store.users.map((user, index) => (
						<li key={index}>
							<div className={classes.userIcon}>
								<i className="fas fa-user" />
							</div>
							<p className={classes.parag}>
								Name: {user.name} {user.last}
							</p>
							<p className={classes.parag}>
								ID: {user.id} email: {user.email}{" "}
							</p>
							<p className={classes.parag}>Phone: {user.phone}</p>
						</li>
					))}
				</ul>
			) : (
				<p className={classes.parag}>No Users</p>
			)}
		</div>
	);
};
Users.propTypes = {
	data: PropTypes.object
};
