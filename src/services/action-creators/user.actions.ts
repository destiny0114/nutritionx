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
	SelectFoodRecordByWeekAction,
} from "../actions";
/* util */
import localDB from "../../utils/localDB";
import {dateFormat, getDaysAgo} from "../../utils/common";
import {filterRecordByWeek} from "../../utils/nutrient";

export function selectFood(food: Food): SelectFoodAction {
	return {
		type: ActionTypes.SELECT_FOOD,
		payload: food,
	};
}

export function selectFoodRecordByDate(dateSelected: Date): SelectFoodRecordByDateAction {
	return {
		type: ActionTypes.SELECT_FOOD_RECORD_BY_DATE,
		payload: dateFormat(dateSelected),
	};
}

export function selectFoodRecordByWeek(from: Date, to: Date, weekRecord: RecordCollection): SelectFoodRecordByWeekAction {
	return {
		type: ActionTypes.SELECT_FOOD_RECORD_BY_WEEK,
		payload: {
			from: from,
			to: to,
			data: weekRecord,
		},
	};
}

export function loadFoodRecordByLastWeek() {
	return (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
		const {userState} = getState();
		const {records} = userState.data;
		const from = getDaysAgo(7);
		const to = getDaysAgo(0);

		const filteredrRecordDates = filterRecordByWeek(records, from, to);
		const result = filteredrRecordDates.reduce((acc, curr) => {
			acc[curr] = records[curr];
			return acc;
		}, {} as RecordCollection);

		dispatch(selectFoodRecordByWeek(from, to, result));
	};
}

export function addFoodRecord(record: FoodRecord, created_at: Date): AddFoodRecordAction {
	return {
		type: ActionTypes.ADD_FOOD_RECORD,
		payload: {
			food: record,
			created_at: dateFormat(created_at),
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

export function saveRecord(dateSelected: Date) {
	return async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
		const {userState} = getState();
		const record = userState.data.records[dateFormat(dateSelected)];

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
