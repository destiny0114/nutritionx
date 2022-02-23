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
import {Food} from "../services";

type NutrientList = Pick<Food["full_nutrients"][number], "attr_id" | "value">[];

export function findNutrientById(nutrientList: NutrientList, attr_id: number, formatter: (nutrient: {attr_id: number; value: number} | undefined) => string) {
	if (typeof nutrientList === undefined || !nutrientList.length) return;

	const nutrient = nutrientList.find((item) => item.attr_id === attr_id);

	return formatter(nutrient);
}
