/*
 * Project: nutritionx
 * Created Date: Thursday September 2nd 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 2nd September 2021 3:01:23 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* layout */
import UserCalendar from "../layout/calendar/UserCalendar";
import FoodRecord from "../layout/calendar/FoodRecord";
import Search from "../layout/calendar/Search";
import FoodList from "../layout/calendar/FoodList";

const Calendar: React.FC<{}> = () => {
	return (
		<div className="flex w-full space-x-6 select-none">
			<div className="flex-auto">
				<div className="flex space-y-4 w-full h-full flex-col">
					<div className="flex-none h-4/6">
						<UserCalendar />
					</div>
					<div className="flex-auto overflow-hidden">
						<FoodRecord />
					</div>
				</div>
			</div>
			<div className="flex-none w-2/5 h-full">
				<div className="flex space-y-4 w-full h-full flex-col">
					<div className="flex-none h-12">
						<Search />
					</div>
					<div className="flex-auto overflow-hidden">
						<FoodList />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
