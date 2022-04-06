/*
 * Project: nutritionx
 * Created Date: Tuesday April 5th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 5th April 2022 12:59:05 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {RootState} from "../reducers";
import {dateFormat} from "../../utils/common";

export function selectFoodRecordByWeekSelectors(state: RootState, dates: Date[]) {
	// const result = weekDates.map((d) => {
	// 	if (records[dateFormat(d)]) {
	// 		const totalAverageByDay = getAverageNutrientByRecord(records, dateFormat(d));
	// 		return {
	// 			date: d.toLocaleString("en-us", {month: "short", day: "numeric"}),
	// 			average_nutrient: totalAverageByDay.nutrient,
	// 		};
	// 	}
	// 	return {
	// 		date: d.toLocaleString("en-us", {month: "short", day: "numeric"}),
	// 		average_nutrient: {},
	// 	};
	// });
}
