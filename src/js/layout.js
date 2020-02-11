import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

// import { Home } from "./views/home";
import { Landing } from "./views/landing";
// import { Login } from "./views/login";
import { LoginMaterial } from "./views/loginMaterial";
import { SignUp } from "./views/signup";
import { Dashboard } from "./views/dashboard";

// import { Demo } from "./views/demo";
// import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Calendar } from "./component/calendar/calendar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route path="/signup" component={SignUp} />
						<Route path="/login" component={LoginMaterial} />
						<Route path="/dashboard" component={Dashboard} />
						<Switch>
							<Route path="/calendar" component={Calendar} />
						</Switch>
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
