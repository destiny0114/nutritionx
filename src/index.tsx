/*
 * Project: nutritionx
 * Created Date: Wednesday August 25th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 25th August 2021 2:50:23 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import React, {Suspense} from "react";
import {Provider} from "react-redux";
import "./index.css";
/* redux store */
import {store} from "./services";

/* components */
import Navigation from "./components/Navigation";
import LottieSpinner from "./components/ui/LottieSpinner";

const Overview = React.lazy(() => import("./pages/Overview"));
const Calendar = React.lazy(() => import("./pages/Calendar"));
const Explorer = React.lazy(() => import("./pages/Explorer"));

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<div className="app absolute inset-0 flex max-h-full max-w-full m-5 space-x-10">
				<Router>
					<Navigation />

					<Suspense fallback={<LottieSpinner />}>
						<Switch>
							<Route exact path="/overview" component={Overview} />
							<Route exact path="/dashboard" component={Calendar} />
							<Route exact path="/explorer" component={Explorer} />

							<Redirect exact from="/" to="/overview" />
						</Switch>
					</Suspense>
				</Router>
			</div>
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
