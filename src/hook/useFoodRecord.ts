/*
 * Project: nutritionx
 * Created Date: Wednesday March 16th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 16th March 2022 2:25:42 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {useCallback, useEffect, useState} from "react";
/* hook */
import useAction from "./useAction";
/* types */
import {Food, FoodRecord} from "../services";
/* util */
import {getToday} from "../utils/common";

export default function useFoodRecord(): [onDateSelect: (dateSelected: string) => void, onAddFoodRecord: (foodSelected: Food) => void] {
	const [dateRecordSelected, setDateRecordSelected] = useState(getToday(new Date()));
	const {addFoodRecord, selectFoodRecordByDate, saveRecord} = useAction();

	useEffect(() => {
		selectFoodRecordByDate(dateRecordSelected);
	}, [dateRecordSelected, selectFoodRecordByDate]);

	const dateSelectHandler = useCallback((dateSelected: string) => {
		setDateRecordSelected(dateSelected);
	}, []);

	const addFoodHandler = useCallback(
		(foodSelected: Food) => {
			const mainNutrients = computeFoodNutrientList(foodSelected.full_nutrients);

			const newFoodRecord: FoodRecord = {
				food_name: foodSelected.food_name,
				nutrient: {
					calories: mainNutrients[208].value ?? 0,
					carbs: mainNutrients[205].value ?? 0,
					proteins: mainNutrients[203].value ?? 0,
					fats: mainNutrients[204].value ?? 0,
				},
			};

			addFoodRecord(newFoodRecord, dateRecordSelected);
			saveRecord(dateRecordSelected);
		},
		[addFoodRecord, dateRecordSelected, saveRecord]
	);

	return [dateSelectHandler, addFoodHandler];
}

function computeFoodNutrientList(
	full_nutrients: {
		attr_id: number;
		value: number;
	}[]
) {
	const nutrientIds = [208, 204, 203, 205];

	const result = full_nutrients
		.filter((item) => nutrientIds.indexOf(item.attr_id) !== -1)
		.reduce(
			(acc, item) => {
				acc[item.attr_id] = item;
				return acc;
			},
			{} as {
				[key: number]: {attr_id: number; value: number};
			}
		);

	return result;
}
