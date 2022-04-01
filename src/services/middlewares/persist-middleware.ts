/*
 * Project: nutritionx
 * Created Date: Friday March 18th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Friday, 18th March 2022 1:56:26 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {Dispatch, Middleware} from "redux";
import {ActionTypes} from "../types";
import {UserAction} from "../actions";
import {RootState} from "../reducers";
import {saveRecord, loadFoodRecordByLastWeek} from "../action-creators";

export const persistMiddleware: Middleware<Dispatch<UserAction>, RootState> = ({dispatch, getState}) => {
	return (next: (action: UserAction) => void) => {
		return async (action: UserAction) => {
			next(action);

			if (ActionTypes.LOAD_RECORDS_COMPLETE === action.type) {
				try {
					loadFoodRecordByLastWeek()(dispatch, getState);
				} catch (err) {
					console.log(err);
				}
			}
		};
	};
};
