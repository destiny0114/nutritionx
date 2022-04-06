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
import {Food, FoodRecord, RecordCollection, Status} from "../services";
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

export function getTotalNutrientConsumeByEachDay(weekDates: Date[], records: RecordCollection) {
	return weekDates.map((d) => {
		if (records[dateFormat(d)]) {
			const totalNutrientByDay = getTotalNutrientByDay(records, dateFormat(d));

			return {
				date: d.toLocaleString("en-us", {month: "short", day: "numeric"}),
				nutrient_consume: totalNutrientByDay,
			};
		}
		return {
			date: d.toLocaleString("en-us", {month: "short", day: "numeric"}),
			nutrient_consume: {
				calories: 0,
				carbs: 0,
				proteins: 0,
				fats: 0,
			},
		};
	});
}

export function getTotalNutrientByDay(records: RecordCollection, dateIndex: string) {
	const recordItems = records[dateIndex].items;
	const sumRecordNutrient = recordItems.reduce((prev, next) => {
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
	}, {} as Pick<FoodRecord, "nutrient">);

	return sumRecordNutrient.nutrient;
}

export function sumAvgNutritionByWeek(weekStatusData: Status[] | null) {
	if (!weekStatusData || typeof weekStatusData === undefined) return;

	return weekStatusData
		.map((item) => item.nutrient_consume)
		.reduce((prev, next) => {
			if (!Object.keys(prev).length || typeof prev === undefined) return next;

			const average_calories = prev.calories + (next.calories ?? 0);
			// const average_carbs = prev.average_nutrient.carbs + next.average_nutrient.carbs;
			// const average_proteins = prev.average_nutrient.proteins + next.average_nutrient.proteins;
			// const average_fats = prev.average_nutrient.fats + next.average_nutrient.fats;
			//console.log(average_calories);

			return {
				calories: average_calories,
				carbs: 0,
				proteins: 0,
				fats: 0,
			};
		}, {} as Status["nutrient_consume"]);
}
