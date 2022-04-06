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
import React, {useState, useEffect, useRef, useCallback, useMemo} from "react";
import {useHistory} from "react-router";
/* layout */
import AverageNutritions from "../layout/overview/AverageNutritions";
import FeatureBar from "../layout/overview/FeatureBar";
import WeekNutritionsMonitor from "../layout/overview/WeekNutritionsMonitor";
import RadialCaloriesMonitor from "../layout/overview/RadialCaloriesMonitor";
import TodayNutritionsMonitor from "../layout/overview/TodayNutritionsMonitor";

import useWindowDimensions from "../hook/useWindowDimensions";
import useAction from "../hook/useAction";
import {useTypedSelector} from "../hook/useTypedSelector";
import {filterRecordByWeek, getTotalNutrientConsumeByEachDay} from "../utils/nutrient";
import {RecordCollection, Status} from "../services";
import {sameDay, weekDates, datesBetween} from "../utils/common";

interface DummyData {
	nutritions: {
		carbs: number;
		proteins: number;
		fats: number;
	};
	date: string;
}

const dummyData: DummyData[] = [
	{
		nutritions: {
			carbs: 325,
			proteins: 210,
			fats: 44,
		},
		date: "Mar 23",
	},
	{
		nutritions: {
			carbs: 366,
			proteins: 167,
			fats: 49,
		},
		date: "Mar 24",
	},
	{
		nutritions: {
			carbs: 387,
			proteins: 173,
			fats: 56,
		},
		date: "Mar 25",
	},
	{
		nutritions: {
			carbs: 298,
			proteins: 196,
			fats: 59,
		},
		date: "Mar 26",
	},
	{
		nutritions: {
			carbs: 358,
			proteins: 234,
			fats: 62,
		},
		date: "Mar 27",
	},
	{
		nutritions: {
			carbs: 274,
			proteins: 157,
			fats: 66,
		},
		date: "Mar 28",
	},
	{
		nutritions: {
			carbs: 324,
			proteins: 130,
			fats: 73,
		},
		date: "Mar 29",
	},
];

function calculateCalories(nutritions: {carbs: number; proteins: number; fats: number; [key: string]: any}) {
	const {carbs, proteins, fats} = nutritions;
	const calories = carbs + proteins + fats;
	nutritions["calories"] = calories;
	return nutritions;
}

const usePrevious = <T extends unknown>(value: T): T | undefined => {
	const ref = useRef<T>();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};

const Overview: React.FC<{}> = () => {
	const [weekRecord, setWeekRecord] = useState<Status[]>([]);
	const dimension = useWindowDimensions();
	const history = useHistory();

	const recordList = useTypedSelector(({userState}) => userState.data.records);

	const responsive = {
		desktop: dimension.width > 1536,
	};

	const computeWeekRecord = useMemo(
		() => (datesSelected: Date[]) => {
			const [from, to] = datesSelected;
			const filteredrRecordDates = filterRecordByWeek(recordList, from, to);
			const weekRecord = filteredrRecordDates.reduce((acc, curr) => {
				acc[curr] = recordList[curr];
				return acc;
			}, {} as RecordCollection);
			const weekRecordWithTotalNutrient = getTotalNutrientConsumeByEachDay(weekDates(from, to), weekRecord);

			return weekRecordWithTotalNutrient as Status[];
		},
		[recordList]
	);

	useEffect(() => {
		calculateCalories(dummyData[0].nutritions);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const weekRecord = computeWeekRecord(datesBetween(7, 0));
		setWeekRecord(weekRecord);
	}, [computeWeekRecord, recordList]);

	const handleNavigateTo = (pathname: string) => history.push(pathname);

	const handleFillerRecordByWeek = useCallback(
		(datesSelected: Date[]) => {
			console.log(datesSelected);

			const weekRecord = computeWeekRecord(datesSelected);
			setWeekRecord(weekRecord);
		},
		[computeWeekRecord]
	);

	return (
		<div className="overview flex w-full space-x-6 select-none">
			<div className="flex-auto">
				<div className="flex space-y-4 w-full h-full flex-col">
					<FeatureBar onNavigateTo={handleNavigateTo} onFilterRecord={handleFillerRecordByWeek} />
					<AverageNutritions weekStatusData={weekRecord} />
					<WeekNutritionsMonitor data={dummyData} desktop={responsive.desktop} />
				</div>
			</div>
			<div className="flex-none w-1/4 h-auto">
				<div className="grid grid-rows-2 gap-5 w-full h-full">
					<RadialCaloriesMonitor data={[{name: "D1", value: 1520}]} />
					<TodayNutritionsMonitor data={[dummyData[0]]} desktop={responsive.desktop} />
				</div>
			</div>
		</div>
	);
};

export default Overview;
function daysBetween(arg0: number, arg1: number): Date[] {
	throw new Error("Function not implemented.");
}
