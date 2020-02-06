import React from "react";
import { Link } from "react-router-dom";
import "../../styles/login.scss";

export const Login = () => (
	<form className="w-50 mx-auto border border-warning p-4">
		<div className="d-flex mx-auto my-2">
			<img
				src="https://cdn0.iconfinder.com/data/icons/professional-avatar-5/48/Gamer_male_avatar_men_character_professions-512.png"
				alt="Avatar"
				className="mx-auto bg-primary rounded-circle"
				width="25%"
			/>
		</div>

		<div className="container">
			<div className="container">
				<div>
					<label htmlFor="uname">
						<b>Username</b>
					</label>
				</div>
				<div>
					<input type="text" placeholder="Enter Username" className="form-control" required />
				</div>
			</div>

			<div className="container mb-3">
				<div>
					<label htmlFor="psw">
						<b>Password</b>
					</label>
				</div>
				<input type="password" placeholder="Enter Password" className="form-control" required />
			</div>
			<div className="container">
				<Link to="/dashboard">
					<button type="submit">Login</button>
				</Link>
				<label className="float-right">
					<input type="checkbox" name="remember" /> Remember me
				</label>
			</div>
		</div>
		<hr />

		<div className="container">
			<div className="container">
				<Link to="/">
					<button type="button" className="cancelbtn">
						Cancel
					</button>
				</Link>
				<span className="mx-2">
					Forgot <a href="#">password?</a>
				</span>
			</div>
		</div>
	</form>
);
