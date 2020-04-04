import React, { useContext, useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import history from "./history";

// import { Home } from "./views/home";
import { Landing } from "./views/landing";
import { LoginMaterial } from "./views/loginMaterial";
import { SignUp } from "./views/signup";
import { Dashboard } from "./views/dashboard";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { RedirectNewuser } from "./component/newUserRedirect";
import { RedirectLogin } from "./component/loginRedirect";
import { Footer } from "./component/footer";
import { Calendar } from "./component/calendar/calendar";

import PropTypes from "prop-types";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter history={history}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/signup" component={SignUp} />
						<Route path="/login" component={LoginMaterial} />
						<Route path="/usercreated" component={RedirectNewuser} />
						<Route path="/loginsuccess" component={RedirectLogin} />
						<ProtectedRoute path="/dashboard" component={Dashboard} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { store, actions } = useContext(Context);
	return (
		<Route
			{...rest}
			render={props =>
				store.token !== null ? (
					<Component {...rest} {...props} />
				) : (
					<Redirect to="/login" {...rest} {...props} />
				)
			}
		/>
	);
};

ProtectedRoute.propTypes = {
	component: PropTypes.component
};

export default injectContext(Layout);
