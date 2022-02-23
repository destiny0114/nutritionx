/*
 * Project: nutritionx
 * Created Date: Tuesday February 8th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 8th February 2022 2:50:21 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
/* types */
import {Food} from "../food";
import {ActionTypes} from "../types";

export interface SelectFoodAction {
	type: typeof ActionTypes.SELECT_FOOD;
	payload: Food;
}

export type FoodAction = SelectFoodAction;
