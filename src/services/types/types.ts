/*
 * Project: nutritionx
 * Created Date: Tuesday January 25th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 25th January 2022 2:01:35 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
export enum ActionTypes {
	FETCH_FOOD_LIST_LOADING = "fetch_food_list_loading",
	FETCH_FOOD_LIST_COMPLETE = "fetch_food_list_complete",
	FETCH_FOOD_LIST_FAIL = "fetch_food_list_fail",
	FETCH_NUTRITION_LOADING = "fetch_nutrition_loading",
	FETCH_NUTRITION_COMPLETE = "fetch_nutrition_complete",
	FETCH_NUTRITION_FAIL = "fetch_nutrition_fail",
	SELECT_FOOD = "select_food",
}
