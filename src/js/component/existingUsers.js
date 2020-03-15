import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
	parag: {
		color: "black"
	}
}));

export const Users = props => {
	const classes = useStyles();
	const { store, actions } = useContext(Context);
	return (
		<div>
			{store.users.length > 0 ? (
				<ul className="mx-auto list-unstyled">
					{store.users.map((user, index) => (
						<li key={index}>
							{user.name}
							{user.last}
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
