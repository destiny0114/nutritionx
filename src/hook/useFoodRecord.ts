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
import {Food, FoodRecord, RecordCollection} from "../services";
/* utils */
import {filterFoodNutrientList} from "../utils/nutrient";
import {dateFormat} from "../utils/common";

export default function useFoodRecord(
	recordList: RecordCollection
): [onDateSelect: (dateSelected: string) => void, onAddFoodRecord: (foodSelected: Food) => void, foodRecordList: FoodRecord[] | null] {
	const [dateRecordSelected, setDateRecordSelected] = useState(dateFormat(new Date()));
	const [foodRecord, setFoodRecord] = useState<FoodRecord[] | null>(null);
	const {addFoodRecord, saveRecord} = useAction();

	useEffect(() => {
		if (recordList[dateRecordSelected]) {
			setFoodRecord(recordList[dateRecordSelected].items);
		} else {
			setFoodRecord([]);
		}
	}, [dateRecordSelected, recordList]);

	const dateSelectHandler = useCallback((dateSelected: string) => {
		setDateRecordSelected(dateSelected);
	}, []);

	const addFoodHandler = useCallback(
		(foodSelected: Food) => {
			const mainNutrients = filterFoodNutrientList(foodSelected.full_nutrients, [208, 204, 203, 205]);
			console.log(dateRecordSelected);

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

	return [dateSelectHandler, addFoodHandler, foodRecord];
}
