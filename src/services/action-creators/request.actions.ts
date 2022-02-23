/*
 * Project: nutritionx
 * Created Date: Tuesday January 25th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 25th January 2022 3:24:25 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {Dispatch} from "redux";
/* types */
import {Food} from "../food";
import {ActionTypes} from "../types";
/* actions */
import {RequestApiAction, FetchFoodListLoadingAction, FetchFoodListCompleteAction, FetchFoodListFailAction} from "../actions";
/* api controller */
import {searchFoodItem} from "../../api/Food";
/* common */
import {getErrorMessage} from "../../utils/common";

function fetchingFoodList(): FetchFoodListLoadingAction {
	return {
		type: ActionTypes.FETCH_FOOD_LIST_LOADING,
	};
}

function fetchFoodListComplete(foodList: Food[]): FetchFoodListCompleteAction {
	return {
		type: ActionTypes.FETCH_FOOD_LIST_COMPLETE,
		payload: foodList,
	};
}

function fetchFoodListFail(err: unknown): FetchFoodListFailAction {
	return {
		type: ActionTypes.FETCH_FOOD_LIST_FAIL,
		payload: getErrorMessage(err),
	};
}

export function fetchFoodList(term: string) {
	return async (dispatch: Dispatch<RequestApiAction>) => {
		dispatch(fetchingFoodList());

		try {
			const response = await searchFoodItem(term);
			const {common} = response.data;

			dispatch(fetchFoodListComplete(common));
		} catch (err) {
			dispatch(fetchFoodListFail(err));
		}
	};
}
