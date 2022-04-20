/*
 * Project: nutritionx
 * Created Date: Monday February 28th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Monday, 28th February 2022 1:46:36 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
/* types */
import {RecordCollection, FoodRecord} from "../food";
import {ActionTypes} from "../types";

export interface AddFoodRecordAction {
	type: typeof ActionTypes.ADD_FOOD_RECORD;
	payload: {
		food: FoodRecord;
		created_at: string;
	};
}

export interface SaveRecordCompleteAction {
	type: typeof ActionTypes.SAVE_RECORD_COMPLETE;
}

export interface SaveRecordFailAction {
	type: typeof ActionTypes.SAVE_RECORD_FAIL;
	payload: string;
}

export type RecordData = keyof RecordCollection["key"];

export interface LoadRecordsCompleteAction {
	type: typeof ActionTypes.LOAD_RECORDS_COMPLETE;
	payload: {
		records: RecordCollection;
	};
}

export interface LoadRecordsFailAction {
	type: typeof ActionTypes.LOAD_RECORDS_FAIL;
	payload: string;
}

export type UserAction = AddFoodRecordAction | SaveRecordCompleteAction | SaveRecordFailAction | LoadRecordsCompleteAction | LoadRecordsFailAction;
