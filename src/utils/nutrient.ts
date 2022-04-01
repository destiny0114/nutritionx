/*
 * Project: nutritionx
 * Created Date: Saturday February 5th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Saturday, 5th February 2022 1:02:49 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {Food, FoodRecord, RecordCollection} from "../services";
import {dateFormat} from "./common";

type NutrientList = Pick<Food["full_nutrients"][number], "attr_id" | "value">[];

export function findNutrientById(nutrientList: NutrientList, attr_id: number, formatter: (nutrient: {attr_id: number; value: number} | undefined) => string | number) {
	if (typeof nutrientList === undefined || !nutrientList.length) return;

	const nutrient = nutrientList.find((item) => item.attr_id === attr_id);

	return formatter(nutrient);
}

export function filterRecordByWeek(records: RecordCollection, from: Date, to: Date) {
	const isSevenDaysOld = function (obj: string) {
		let myDate = Array.from(obj.split("/"), Number);
		let recordDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
		return recordDate.getTime() >= from.getTime() && recordDate.getTime() <= to.getTime();
	};
	return Object.keys(records).filter(isSevenDaysOld);
}

export function getAverageNutrientByRecord(records: RecordCollection, dateIndex: string) {
	const recordItems = records[dateIndex].items;
	const result = recordItems.reduce((prev, next) => {
		if (!Object.keys(prev).length) return next;

		const average_calories = Math.round(prev.nutrient.calories + next.nutrient.calories);
		const average_carbs = Math.round(prev.nutrient.carbs + next.nutrient.carbs);
		const average_proteins = Math.round(prev.nutrient.proteins + next.nutrient.proteins);
		const average_fats = Math.round(prev.nutrient.fats + next.nutrient.fats);

		return {
			nutrient: {
				calories: average_calories,
				carbs: average_carbs,
				proteins: average_proteins,
				fats: average_fats,
			},
		};
	}, {} as Omit<FoodRecord, "food_name">);

	return result;
}
