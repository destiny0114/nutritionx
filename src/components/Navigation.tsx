/*
 * Project: nutritionx
 * Created Date: Wednesday August 25th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 25th August 2021 5:05:27 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
/* UI */
import {ReactComponent as LogoIcon} from "../assets/icons/logo.svg";
import {ReactComponent as OverviewIcon} from "../assets/icons/overview.svg";
import {ReactComponent as CalenderIcon} from "../assets/icons/calender.svg";
import {ReactComponent as FoodIcon} from "../assets/icons/food.svg";
import useAction from "../hook/useAction";

const Navigation: React.FC = () => {
	const {loadRecords} = useAction();

	useEffect(() => {
		loadRecords();
	}, [loadRecords]);

	return (
		<nav className="navigation w-20 shadow-2xl flex-none">
			<div className="w-full h-full py-7 bg-lavender rounded-xl flex flex-col items-center">
				<div className="logo flex-none">
					<LogoIcon className="w-10 h-10 2xl:w-12 2xl:h-12" />
				</div>
				<div className="link-buttons flex-grow w-full h-auto flex justify-center items-center">
					<ul className="space-y-8 2xl:space-y-16">
						<li>
							<NavLink className="w-auto h-auto" to="/overview" exact activeClassName="selected">
								<OverviewIcon className="w-14 h-14 p-2" />
							</NavLink>
						</li>
						<li>
							<NavLink className="w-auto h-auto" to="/dashboard" exact activeClassName="selected">
								<CalenderIcon className="w-14 h-14 p-2" />
							</NavLink>
						</li>
						<li>
							<NavLink className="w-auto h-auto" to="/explorer" exact activeClassName="selected">
								<FoodIcon className="w-14 h-14 p-2" />
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
