import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-0">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Project Managment tool</span>
			</Link>
			<div className="ml-auto d-flex">
				<Dropdown alignRight>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Sign in
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="/login">Log In</Dropdown.Item>
						<Dropdown.Item href="/signup">Sign Up</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item href="/">Home Page</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</nav>
	);
};
