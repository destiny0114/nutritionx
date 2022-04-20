/*
 * Project: nutritionx
 * Created Date: Thursday September 2nd 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 2nd September 2021 3:01:08 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import React, {useState, useMemo} from "react";
import {useHistory} from "react-router";
/* layout */
import AverageNutritions from "../layout/overview/AverageNutritions";
import FeatureBar from "../layout/overview/FeatureBar";
import WeekNutritionsMonitor from "../layout/overview/WeekNutritionsMonitor";
import RadialCaloriesMonitor from "../layout/overview/RadialCaloriesMonitor";
import TodayNutritionsMonitor from "../layout/overview/TodayNutritionsMonitor";
/* hook */
import useWindowDimensions from "../hook/useWindowDimensions";
import {useTypedSelector} from "../hook/useTypedSelector";
/* util */
import {getTodayRecord, getWeekRecordBetweenDate, sumAvgNutritionByWeek} from "../utils/nutrient";
import {sameDay, datesBetween} from "../utils/common";

const Overview: React.FC<{}> = () => {
	const [datesSelected, setDatesSelected] = useState<string[]>(datesBetween(7, 0));
	const recordList = useTypedSelector(({userState}) => userState.data.records);

	const weekRecord = useMemo(() => getWeekRecordBetweenDate(recordList, datesSelected), [datesSelected, recordList]);
	const totalAvgNutrition = useMemo(() => sumAvgNutritionByWeek(weekRecord), [weekRecord]);
	const todayRecord = useMemo(() => getTodayRecord(recordList), [recordList]);

	const dimension = useWindowDimensions();
	const history = useHistory();

	const responsive = {
		desktop: dimension.width > 1536,
	};

	const handleNavigateTo = (pathname: string) => history.push(pathname);

	const handleFillerRecordByWeek = (dates: string[]) => {
		if (!Object.keys(recordList).length) return;
		if (datesSelected.length && sameDay(dates[0], datesSelected[0]) && sameDay(dates[1], datesSelected[1])) return;
		setDatesSelected(dates);
	};

	return (
		<div className="overview flex w-full space-x-6 select-none">
			<div className="flex-auto">
				<div className="flex space-y-4 w-full h-full flex-col">
					<FeatureBar onNavigateTo={handleNavigateTo} onFilterRecord={handleFillerRecordByWeek} />
					<AverageNutritions totalAvgNutrition={totalAvgNutrition} />
					<WeekNutritionsMonitor weekStatusData={weekRecord} desktop={responsive.desktop} />
				</div>
			</div>
			<div className="flex-none w-1/4 h-auto">
				<div className="grid grid-rows-2 gap-5 w-full h-full">
					<RadialCaloriesMonitor data={todayRecord} />
					<TodayNutritionsMonitor data={todayRecord} desktop={responsive.desktop} />
				</div>
			</div>
		</div>
	);
};

export default Overview;
