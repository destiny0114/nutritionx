/*
 * Project: nutritionx
 * Created Date: Friday January 28th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Friday, 28th January 2022 2:57:20 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {produce} from "immer";
/* action */
import {ActionTypes} from "../types";
import {RequestApiAction} from "../actions";
/* types */
import {Food} from "../food";

interface FoodState {
	loading: boolean;
	error: string | null;
	data: {
		items: Food[];
	};
}

const initialState: FoodState = {
	loading: false,
	error: null,
	data: {
		items: [],
	},
};

const foodReducer = (state: FoodState = initialState, action: RequestApiAction) =>
	produce(state, (draft) => {
		switch (action.type) {
			case ActionTypes.FETCH_FOOD_LIST_LOADING:
				draft.loading = true;
				draft.error = null;
				return draft;
			case ActionTypes.FETCH_FOOD_LIST_COMPLETE:
				draft.loading = false;
				draft.error = null;
				draft.data.items = action.payload;
				return draft;
			case ActionTypes.FETCH_FOOD_LIST_FAIL:
				draft.loading = false;
				draft.error = action.payload;
				draft.data.items = [];
				return draft;
			default:
				return draft;
		}
	});

export default foodReducer;
