/*
 * Project: nutritionx
 * Created Date: Monday February 28th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Monday, 28th February 2022 1:54:17 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {produce} from "immer";
/* action */
import {ActionTypes} from "../types";
import {UserAction} from "../actions";
/* types */
import {Nutrient} from "../nutrient";
import {FoodSelect} from "../foodselect";
import {RecordCollection, FoodRecord} from "../record";
import {Status} from "../status";
/* utils */
import {splitArray, dateFormat, getDaysbyWeek, getDates} from "../../utils/common";
import {getAverageNutrientByRecord} from "../../utils/nutrient";

const BASE_NUTRIENTS: Nutrient[] = [
	{
		attr_id: 208,
		name: "calories",
		value: 0,
		unit: "kcal",
	},
	{
		attr_id: 205,
		name: "carbohydrates",
		value: 0,
		unit: "g",
	},
	{
		attr_id: 203,
		name: "proteins",
		value: 0,
		unit: "g",
	},
	{
		attr_id: 204,
		name: "fat",
		value: 0,
		unit: "g",
	},
	{
		attr_id: 606,
		name: "total saturated",
		value: 0,
		unit: "g",
	},
	{
		attr_id: 601,
		name: "cholesterol",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 307,
		name: "sodium",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 291,
		name: "fiber",
		value: 0,
		unit: "g",
	},
	{
		attr_id: 269,
		name: "sugars",
		value: 0,
		unit: "g",
	},
	{
		attr_id: 306,
		name: "potassium",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 305,
		name: "phosphorus",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 318,
		name: "vitamin A",
		value: 0,
		unit: "IU",
	},
	{
		attr_id: 404,
		name: "thiamin",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 405,
		name: "riboflavin",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 406,
		name: "niacin",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 410,
		name: "pantothenic acid",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 415,
		name: "pyridoxine",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 435,
		name: "folate",
		value: 0,
		unit: "Âµg",
	},
	{
		attr_id: 578,
		name: "cobalamin",
		value: 0,
		unit: "Âµg",
	},
	{
		attr_id: 401,
		name: "vitamin C",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 328,
		name: "vitamin D",
		value: 0,
		unit: "Âµg",
	},
	{
		attr_id: 430,
		name: "vitamin K",
		value: 0,
		unit: "Âµg",
	},

	{
		attr_id: 301,
		name: "calcium",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 312,
		name: "copper",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 303,
		name: "iron",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 304,
		name: "magnesium",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 315,
		name: "manganese",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 317,
		name: "selenium",
		value: 0,
		unit: "Âµg",
	},
	{
		attr_id: 317,
		name: "sodium",
		value: 0,
		unit: "mg",
	},
	{
		attr_id: 309,
		name: "zinc",
		value: 0,
		unit: "mg",
	},
];

interface UserState {
	foodSelected: FoodSelect | null;
	foodRecordSelected: FoodRecord[];
	weekNutritionalStatus: Status[] | null;
	data: {
		records: RecordCollection;
	};
	error: string | null;
}

const initialState: UserState = {
	foodSelected: null,
	foodRecordSelected: [],
	weekNutritionalStatus: null,
	data: {
		records: {},
	},
	error: null,
};

const userReducer = (state: UserState = initialState, action: UserAction) =>
	produce(state, (draft) => {
		switch (action.type) {
			case ActionTypes.SELECT_FOOD:
				const {food_name, serving_unit, serving_qty, serving_weight_grams, full_nutrients, photo} = action.payload;
				const filteredNutrients = full_nutrients.filter((nutrient) => BASE_NUTRIENTS.some((match) => match.attr_id === nutrient.attr_id));
				const nutrients = BASE_NUTRIENTS.map((item) => ({...item, ...filteredNutrients.find((nutrient) => nutrient.attr_id === item.attr_id)}));
				const [primary, common] = splitArray(nutrients, (index) => index < 11);

				const foodChoosed: FoodSelect = {
					food_name,
					serving_unit,
					serving_qty,
					serving_weight_grams,
					photo,
					full_nutrients: {
						primary,
						common,
					},
				};

				draft.foodSelected = foodChoosed;
				return draft;
			case ActionTypes.SELECT_FOOD_RECORD_BY_DATE:
				if (draft.data.records.hasOwnProperty(action.payload)) {
					draft.foodRecordSelected = draft.data.records[action.payload].items;
				} else {
					draft.foodRecordSelected = [];
				}
				return draft;
			case ActionTypes.SELECT_FOOD_RECORD_BY_WEEK:
				const {from, to, data} = action.payload;
				const weekRecord = data;
				const weekDates = getDates(from, to);
				const result = weekDates.map((d) => {
					if (weekRecord[dateFormat(d)]) {
						const totalAverageByDay = getAverageNutrientByRecord(weekRecord, dateFormat(d));

						return {
							date: d.toLocaleString("en-us", {month: "short", day: "numeric"}),
							average_nutrient: totalAverageByDay.nutrient,
						};
					}
					return {
						date: d.toLocaleString("en-us", {month: "short", day: "numeric"}),
						average_nutrient: {},
					};
				});
				draft.weekNutritionalStatus = result as Status[];
				return draft;
			case ActionTypes.ADD_FOOD_RECORD:
				const {food, created_at} = action.payload;
				const foundRecord = draft.data.records[created_at];

				if (foundRecord) {
					foundRecord.items.unshift(food);
				} else {
					draft.data.records[created_at] = {date: created_at, items: [...[food]]};
				}
				draft.foodRecordSelected.unshift(food);
				return draft;
			case ActionTypes.SAVE_RECORD_COMPLETE:
				return draft;
			case ActionTypes.SAVE_RECORD_FAIL:
				draft.error = action.payload;
				return draft;
			case ActionTypes.LOAD_RECORDS_COMPLETE:
				const currentDate = dateFormat(new Date());
				const todayRecord = action.payload.records[currentDate];
				draft.data = action.payload;
				if (!todayRecord) return draft;
				draft.foodRecordSelected = action.payload.records[currentDate].items;
				return draft;
			case ActionTypes.LOAD_RECORDS_FAIL:
				draft.error = action.payload;
				return draft;
			default:
				return draft;
		}
	});

export default userReducer;
