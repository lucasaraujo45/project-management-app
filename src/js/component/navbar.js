import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Project Managment tool</span>
			</Link>
			<div className="ml-auto d-flex">
				<Link to="/dashboard">
					<button className="btn btn-info mr-3">dashboard</button>
				</Link>

				<Dropdown alignRight>
					<Dropdown.Toggle variant="success" id="dropdown-basic">
						Sign in
					</Dropdown.Toggle>

					<Dropdown.Menu>
						<Dropdown.Item href="/login">Log In</Dropdown.Item>
						<Dropdown.Item href="/signup">Sign Up</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item href="/">Home</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>

				{/* <button type="button" className="btn btn-primary mr-1" data-toggle="modal" data-target="#exampleModal">
					Launch demo modal
				</button>

				<div
					className="modal fade"
					id="exampleModal"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Already a User?
								</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<Link to="/login">
									<button type="button" className="btn btn-primary">
										Login
									</button>
								</Link>
								<Link to="/signup">
									<button type="button" className="btn btn-primary">
										Sing Up
									</button>
								</Link>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">
									Close
								</button>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</nav>
	);
};
