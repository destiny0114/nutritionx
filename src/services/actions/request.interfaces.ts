/*
 * Project: nutritionx
 * Created Date: Tuesday January 25th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 25th January 2022 3:19:20 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
/* types */
import {Food} from "../food";
import {ActionTypes} from "../types";

export interface FetchFoodListLoadingAction {
	type: typeof ActionTypes.FETCH_FOOD_LIST_LOADING;
}

export interface FetchFoodListCompleteAction {
	type: typeof ActionTypes.FETCH_FOOD_LIST_COMPLETE;
	payload: Food[];
}

export interface FetchFoodListFailAction {
	type: typeof ActionTypes.FETCH_FOOD_LIST_FAIL;
	payload: string;
}

export type RequestApiAction = FetchFoodListLoadingAction | FetchFoodListCompleteAction | FetchFoodListFailAction;
