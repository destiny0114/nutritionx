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
import {dateFormat, weekDates} from "./common";

type NutrientList = Pick<Food["full_nutrients"][number], "attr_id" | "value">[];

export function findNutrientById(nutrientList: NutrientList, attr_id: number, formatter: (nutrient: {attr_id: number; value: number} | undefined) => string | number) {
	if (typeof nutrientList === undefined || !nutrientList.length) return;

	const nutrient = nutrientList.find((item) => item.attr_id === attr_id);

	return formatter(nutrient);
}

export function filterRecordByWeek(records: RecordCollection, from: string, to: string) {
	const fromStrParts = Array.from(from.split("/"), Number);
	const toStrParts = Array.from(to.split("/"), Number);
	const fromDate = new Date(fromStrParts[2], fromStrParts[1] - 1, fromStrParts[0]);
	const toDate = new Date(toStrParts[2], toStrParts[1] - 1, toStrParts[0]);
	const isSevenDaysOld = function (dates: string) {
		let newDates = Array.from(dates.split("/"), Number);
		let recordDate = new Date(newDates[2], newDates[1] - 1, newDates[0]);
		return recordDate.getTime() >= fromDate.getTime() && recordDate.getTime() <= toDate.getTime();
	};
	return Object.keys(records).filter(isSevenDaysOld);
}

export function getTotalNutrientConsumeByEachDay(weekDates: Date[], records: RecordCollection) {
	return weekDates.map((d) => {
		if (records[dateFormat(d)]) {
			const totalNutrientByDay = getTotalNutrientByDay(records, dateFormat(d));
			console.log(totalNutrientByDay);

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

export function getWeekRecordBetweenDate(records: RecordCollection, datesBetween: string[]) {
	const [from, to] = datesBetween;
	const filteredRecordDates = filterRecordByWeek(records, from, to);
	const weekRecord = filteredRecordDates.reduce((acc, curr) => {
		acc[curr] = records[curr];
		return acc;
	}, {} as RecordCollection);
	const result = weekDates(from, to).map((d) => {
		if (weekRecord[dateFormat(d)]) {
			const totalNutrientByDay = getTotalNutrientByDay(weekRecord, dateFormat(d));

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
	return result as Status[];
}

export function sumAvgNutritionByWeek(weekStatusData: Status[]) {
	let average_calories = 0;
	let average_carbs = 0;
	let average_proteins = 0;
	let average_fats = 0;

	const {nutrient_consume} = weekStatusData.reduce((prev, next) => {
		if (!Object.keys(prev).length || typeof prev === undefined) return next;
		average_calories = prev.nutrient_consume.calories + next.nutrient_consume.calories;
		average_carbs = prev.nutrient_consume.carbs + next.nutrient_consume.carbs;
		average_proteins = prev.nutrient_consume.proteins + next.nutrient_consume.proteins;
		average_fats = prev.nutrient_consume.fats + next.nutrient_consume.fats;

		return {
			nutrient_consume: {
				calories: average_calories,
				carbs: average_carbs,
				proteins: average_fats,
				fats: average_proteins,
			},
		};
	}, {} as Omit<Status, "date">);

	return nutrient_consume;
}

export function getTodayRecord(records: RecordCollection) {
	const todayRecord = records[dateFormat(new Date())] ?? null;

	let average_calories = 0;
	let average_carbs = 0;
	let average_proteins = 0;
	let average_fats = 0;

	if (todayRecord) {
		const {items} = todayRecord;
		const todayStatus = items.reduce((prev, next) => {
			if (!Object.keys(prev).length || typeof prev === undefined) return next;
			average_calories = prev.nutrient.calories + next.nutrient.calories;
			average_carbs = prev.nutrient.carbs + next.nutrient.carbs;
			average_proteins = prev.nutrient.proteins + next.nutrient.proteins;
			average_fats = prev.nutrient.fats + next.nutrient.fats;

			return {
				nutrient: {
					calories: average_calories,
					carbs: average_carbs,
					proteins: average_fats,
					fats: average_proteins,
				},
			};
		}, {} as Omit<FoodRecord, "food_name">);

		return todayStatus.nutrient as FoodRecord["nutrient"];
	}

	return {
		calories: average_calories,
		carbs: average_carbs,
		proteins: average_fats,
		fats: average_proteins,
	};
}
