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
	SELECT_FOOD = "select_food",
	SELECT_FOOD_RECORD_BY_DATE = "select_food_record_by_date",
	SELECT_FOOD_RECORD_BY_WEEK = "select_food_record_by_week",
	ADD_FOOD_RECORD = "add_food_record",
	SAVE_RECORD_COMPLETE = "save_record_complete",
	SAVE_RECORD_FAIL = "save_record_fail",
	LOAD_RECORDS_COMPLETE = "load_records_complete",
	LOAD_RECORDS_FAIL = "load_records_fail",
}
