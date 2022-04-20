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
import {Food, FoodNutrient, FoodRecord, FoodSelect, MAIN_NUTRIENTS, RecordCollection, Status} from "../services";
/* types */
import {dateFormat, splitArray, weekDates} from "./common";

type NutrientInfo = Pick<FoodNutrient, "attr_id" | "value">;

export function findNutrientById(nutrientList: NutrientInfo[], attr_id: number, formatter: (nutrient: NutrientInfo | undefined) => string | number) {
	if (typeof nutrientList === undefined || !nutrientList.length) return;

	const nutrient = nutrientList.find((item) => item.attr_id === attr_id);

	return formatter(nutrient);
}

export function fillterFoodInfo(food: Food) {
	const {food_name, serving_unit, serving_qty, serving_weight_grams, full_nutrients, photo} = food;
	const filteredNutrients = full_nutrients.filter((nutrient) => MAIN_NUTRIENTS.some((match) => match.attr_id === nutrient.attr_id));
	const nutrients = MAIN_NUTRIENTS.map((item) => ({...item, ...filteredNutrients.find((nutrient) => nutrient.attr_id === item.attr_id)}));
	const [primary, common] = splitArray(nutrients, (index) => index < 11);

	return {
		food_name,
		serving_unit,
		serving_qty,
		serving_weight_grams,
		photo,
		full_nutrients: {
			primary,
			common,
		},
	} as FoodSelect;
}

export function filterFoodNutrientList(full_nutrients: NutrientInfo[], targetIds: number[]) {
	const result = full_nutrients
		.filter((item) => targetIds.indexOf(Number(item.attr_id)) !== -1)
		.reduce(
			(acc, item) => {
				acc[Number(item.attr_id)] = item;
				return acc;
			},
			{} as {
				[key: number]: NutrientInfo;
			}
		);

	return result;
}

export function getTotalNutrientByDay(foodRecordList: FoodRecord[]) {
	const sumRecordNutrient = foodRecordList.reduce((prev, next) => {
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

export function filterRecordByWeek(records: RecordCollection, from: string, to: string) {
	const fromDate = new Date(from);
	const toDate = new Date(to);

	const isSevenDaysOld = (day: string) => {
		let recordDate = new Date(day);
		return recordDate.getTime() >= fromDate.getTime() && recordDate.getTime() <= toDate.getTime();
	};
	return Object.keys(records).filter(isSevenDaysOld);
}

export function getTotaNutrientConsumeByEachDay(weekDates: Date[], weekRecords: RecordCollection) {
	return weekDates.map((dayDate) => {
		if (weekRecords[dateFormat(dayDate)]) {
			const totalNutrientByDay = getTotalNutrientByDay(weekRecords[dateFormat(dayDate)].items);

			return {
				date: dayDate.toLocaleString("en-us", {month: "short", day: "numeric"}),
				nutrient_consume: totalNutrientByDay,
			};
		}
		return {
			date: dayDate.toLocaleString("en-us", {month: "short", day: "numeric"}),
			nutrient_consume: {
				calories: 0,
				carbs: 0,
				proteins: 0,
				fats: 0,
			},
		};
	});
}

export function getWeekRecordBetweenDate(records: RecordCollection, datesBetween: string[]) {
	const [from, to] = datesBetween;
	const filteredRecordDates = filterRecordByWeek(records, from, to);
	const weekRecord = filteredRecordDates.reduce((acc, curr) => {
		acc[curr] = records[curr];
		return acc;
	}, {} as RecordCollection);

	const result = getTotaNutrientConsumeByEachDay(weekDates(from, to), weekRecord);
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
