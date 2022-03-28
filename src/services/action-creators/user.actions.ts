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
import {Dispatch} from "redux";
/* types */
import {Food} from "../food";
import {RecordCollection, FoodRecord} from "../record";
import {ActionTypes} from "../types";
/* reducers */
import {RootState} from "../reducers";
/* actions */
import {
	SelectFoodAction,
	SelectFoodRecordByDateAction,
	AddFoodRecordAction,
	SaveRecordCompleteAction,
	SaveRecordFailAction,
	UserAction,
	LoadRecordsCompleteAction,
	LoadRecordsFailAction,
	RecordData,
} from "../actions";
import localDB from "../../utils/localDB";

export function selectFood(food: Food): SelectFoodAction {
	return {
		type: ActionTypes.SELECT_FOOD,
		payload: food,
	};
}

export function selectFoodRecordByDate(date: string): SelectFoodRecordByDateAction {
	return {
		type: ActionTypes.SELECT_FOOD_RECORD_BY_DATE,
		payload: date,
	};
}

export function addFoodRecord(record: FoodRecord, created_at: string): AddFoodRecordAction {
	return {
		type: ActionTypes.ADD_FOOD_RECORD,
		payload: {
			food: record,
			created_at: created_at,
		},
	};
}

export function saveRecordComplete(): SaveRecordCompleteAction {
	return {
		type: ActionTypes.SAVE_RECORD_COMPLETE,
	};
}

export function saveRecordFail(err: string): SaveRecordFailAction {
	return {
		type: ActionTypes.SAVE_RECORD_FAIL,
		payload: err,
	};
}

export function saveRecord(dateSelected: string) {
	return async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
		const {userState} = getState();
		const record = userState.data.records[dateSelected];

		try {
			await localDB.setItem(record.date, record);
			dispatch(saveRecordComplete());
		} catch (err) {
			const {message} = err as Error;
			dispatch(saveRecordFail(message));
		}
	};
}

export function loadRecordsComplete(records: RecordCollection): LoadRecordsCompleteAction {
	return {
		type: ActionTypes.LOAD_RECORDS_COMPLETE,
		payload: {
			records: records,
		},
	};
}

export function loadRecordsFail(err: string): LoadRecordsFailAction {
	return {
		type: ActionTypes.LOAD_RECORDS_FAIL,
		payload: err,
	};
}

export function loadRecords() {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			const keys = await localDB.keys();
			const promises = keys.map(async (key) => {
				const value = (await localDB.getItem(key)) as RecordData;
				return [key, value];
			});
			const entries = await Promise.all(promises);
			const data = Object.assign({}, ...Array.from(entries, ([k, v]) => ({[k as string]: v}))) as RecordCollection;
			dispatch(loadRecordsComplete(data));
		} catch (err) {
			const {message} = err as Error;
			dispatch(loadRecordsFail(message));
		}
	};
}
