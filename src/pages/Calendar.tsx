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
import DisplayFoodRecord from "../layout/calendar/DisplayFoodRecord";
import Search from "../layout/calendar/Search";
import FoodList from "../layout/calendar/FoodList";
/* hook */
import useSearch from "../hook/useSearch";
import useFoodRecord from "../hook/useFoodRecord";

const Calendar: React.FC<{}> = () => {
	const [onDateSelect, onAddFoodRecord] = useFoodRecord();
	const [onTermSubmit] = useSearch("", 275);

	return (
		<div className="flex w-full space-x-6 select-none">
			<div className="flex-auto">
				<div className="flex space-y-4 w-full h-full flex-col">
					<div className="flex-none h-4/6">
						<UserCalendar onDateSelect={onDateSelect} />
					</div>
					<div className="flex-auto overflow-hidden p-5 bg-medium-slate-blue shadow-lg rounded-2xl">
						<DisplayFoodRecord />
					</div>
				</div>
			</div>
			<div className="flex-none w-2/5 h-full">
				<div className="flex space-y-4 w-full h-full flex-col">
					<div className="flex-none h-12">
						<Search onTermSubmit={onTermSubmit} />
					</div>
					<div className="flex-auto overflow-hidden">
						<div className="relative w-full h-full bg-light-purple border-medium-slate-blue border-2 shadow-lg rounded-2xl p-5">
							<FoodList onAddFoodRecord={onAddFoodRecord} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
