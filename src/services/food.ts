/*
 * Project: nutritionx
 * Created Date: Tuesday January 25th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 25th January 2022 3:27:03 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {Model} from "./model";
/* util */
import {Modify} from "../utils/common";

export interface FoodNutrient {
	attr_id: number | string;
	name: string;
	value: number;
	unit: string;
}

export type Food = Model;

export type FoodSelect = Modify<
	Food,
	{
		full_nutrients: {
			primary: FoodNutrient[];
			common: FoodNutrient[];
		};
	}
>;

export interface FoodRecord extends Pick<Model, "food_name"> {
	nutrient: Nutrient;
}

export interface Nutrient {
	calories: number;
	carbs: number;
	proteins: number;
	fats: number;
}

export interface Status {
	date: string;
	nutrient_consume: FoodRecord["nutrient"];
}

export interface RecordCollection {
	[key: string]: {
		date: string;
		items: FoodRecord[];
	};
}

export const MAIN_NUTRIENTS: FoodNutrient[] = [
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
