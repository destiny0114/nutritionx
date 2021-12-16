/*
 * Project: nutritionx
 * Created Date: Wednesday September 1st 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 1st September 2021 4:33:29 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import Overview from "./views//Overview";
import Calendar from "./views/Calendar";

interface Route {
	path: string;
	exact?: boolean;
	children?: () => React.ReactElement;
}

function Home() {
	return (
		<div>
			<h2>Home</h2>
		</div>
	);
}

function About() {
	return (
		<div>
			<h2>About</h2>
		</div>
	);
}

function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
		</div>
	);
}

const routes: Route[] = [
	{
		path: "/overview",
		exact: true,
		children: () => <Overview />,
	},
	{
		path: "/dashboard",
		exact: true,
		children: () => <Calendar />,
	},
	{
		path: "/s",
		exact: true,
		children: () => <About />,
	},
];

export default routes;
