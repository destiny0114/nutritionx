/*
 * Project: nutritionx
 * Created Date: Monday February 28th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Monday, 28th February 2022 1:54:17 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {produce} from "immer";
/* action */
import {ActionTypes} from "../types";
import {UserAction} from "../actions";
/* types */
import {RecordCollection} from "../food";

interface UserState {
	data: {
		records: RecordCollection;
	};
	error: string | null;
}

const initialState: UserState = {
	data: {
		records: {},
	},
	error: null,
};

const userReducer = (state: UserState = initialState, action: UserAction) =>
	produce(state, (draft) => {
		switch (action.type) {
			case ActionTypes.ADD_FOOD_RECORD:
				const {food, created_at} = action.payload;
				const foundRecord = draft.data.records[created_at];

				if (foundRecord) {
					foundRecord.items.unshift(food);
				} else {
					draft.data.records[created_at] = {date: created_at, items: [...[food]]};
				}
				return draft;
			case ActionTypes.SAVE_RECORD_COMPLETE:
				return draft;
			case ActionTypes.SAVE_RECORD_FAIL:
				draft.error = action.payload;
				return draft;
			case ActionTypes.LOAD_RECORDS_COMPLETE:
				draft.data = action.payload;
				return draft;
			case ActionTypes.LOAD_RECORDS_FAIL:
				draft.error = action.payload;
				return draft;
			default:
				return draft;
		}
	});

export default userReducer;
