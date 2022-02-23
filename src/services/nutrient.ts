/*
 * Project: nutritionx
 * Created Date: Thursday February 17th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 17th February 2022 5:01:10 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
export interface Nutrient {
	attr_id: number | string;
	name: string;
	value: number;
	unit: string;
}

export const baseNutrients: Nutrient[] = [
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
