/*
 * Project: nutritionx
 * Created Date: Thursday November 18th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 18th November 2021 2:47:54 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* component */
import MonthCalendar from "../../components/calendar/MonthCalendar";

interface UserCalendarProps {
	onDateSelect: (date: Date) => void;
}

const UserCalendar: React.FC<UserCalendarProps> = ({onDateSelect}) => {
	return (
		<div className="w-full h-full bg-medium-slate-blue shadow-lg rounded-2xl px-8 py-5">
			<MonthCalendar onDateSelect={onDateSelect} />
		</div>
	);
};

export default UserCalendar;
