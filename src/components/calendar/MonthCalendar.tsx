/*
 * Project: nutritionx
 * Created Date: Thursday November 18th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 18th November 2021 2:49:19 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import {useRef, useState} from "react";
import FullCalendar, {CalendarOptions} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {DateClickArg} from "@fullcalendar/interaction";
/* icon */
import {ReactComponent as LeftArrowIcon} from "../../assets/icons/left-arrow.svg";
import {ReactComponent as RightArrowIcon} from "../../assets/icons/right-arrow.svg";

interface MonthCalendarProps {
	onDateSelect: (dateSelected: string) => void;
}

const MonthCalendar: React.FC<MonthCalendarProps> = ({onDateSelect}) => {
	const calendarRef = useRef<FullCalendar>(null);
	const [prevDayEl, setPrevDayEl] = useState<HTMLElement | null>();

	const fullCalendarProps: CalendarOptions = {
		plugins: [dayGridPlugin, interactionPlugin],
		initialView: "dayGridMonth",
		height: "100%",
		fixedWeekCount: true,
		showNonCurrentDates: true,
		headerToolbar: {
			start: "title",
			center: "",
			end: "",
		},
	};

	const dateClickHandler = (info: DateClickArg) => {
		if (prevDayEl) {
			prevDayEl.classList.remove("day-select");
		}
		info.dayEl.classList.add("day-select");
		setPrevDayEl(info.dayEl);
		onDateSelect(info.date.toLocaleDateString());
	};

	const nextMonthHandler = () => {
		if (!calendarRef.current) return;

		const calendarApi = calendarRef.current.getApi();
		calendarApi.next();
	};

	const prevMonthHandler = () => {
		if (!calendarRef.current) return;

		const calendarApi = calendarRef.current.getApi();
		calendarApi.prev();
	};

	return (
		<div className="w-full h-full relative">
			<FullCalendar ref={calendarRef} {...fullCalendarProps} dateClick={dateClickHandler} />
			<div className="calendar-btns absolute top-0 right-0 inline-block space-x-6">
				<button className="prev-month-btn p-3 bg-white rounded-full shadow-xl" onClick={prevMonthHandler}>
					<RightArrowIcon className="w-6 h-6" />
				</button>
				<button className="next-month-btn p-3 bg-white rounded-full shadow-xl" onClick={nextMonthHandler}>
					<LeftArrowIcon className="w-6 h-6" />
				</button>
			</div>
		</div>
	);
};
export default MonthCalendar;
