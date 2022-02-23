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
import "./index.css";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Provider} from "react-redux";
/* redux store */
import {store} from "./services";
/* routes */
import routes from "./routes";

/* components */
import Navigation from "./components/Navigation";

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<div className="app absolute inset-0 flex max-h-full max-w-full m-5 space-x-10">
				<Router>
					<Navigation />

					<Switch>
						{routes.map((entry, index) => {
							return <Route key={index} {...entry} />;
						})}
						<Redirect to="/overview" />
					</Switch>
				</Router>
			</div>
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
