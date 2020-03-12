import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Users = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			{store.users.length > 0 ? (
				<div className="jumbotron row mx-auto w-100">
					<div data={store.users[0]} />
				</div>
			) : (
				<p>No Users</p>
			)}
		</div>
	);
};
Users.propTypes = {
	data: PropTypes.object
};
