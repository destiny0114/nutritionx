/*
 * Project: nutritionx
 * Created Date: Tuesday February 8th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 8th February 2022 2:57:45 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
/* types */
import {Food} from "../food";
import {ActionTypes} from "../types";
/* actions */
import {SelectFoodAction} from "../actions";

export function selectFood(food: Food): SelectFoodAction {
	return {
		type: ActionTypes.SELECT_FOOD,
		payload: food,
	};
}
