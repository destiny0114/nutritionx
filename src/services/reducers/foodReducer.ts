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
import {RequestApiAction, FoodAction} from "../actions";
/* types */
import {Food} from "../food";
import {baseNutrients} from "../nutrient";
import {FoodSelect} from "../foodselect";
/* utils */
import {splitArray} from "../../utils/common";

interface FoodState {
	loading: boolean;
	error: string | null;
	data: {
		items: Food[];
	};
	selectedFood: FoodSelect | null;
}

const initialState: FoodState = {
	loading: false,
	error: null,
	data: {
		items: [],
	},
	selectedFood: null,
};

const foodReducer = (state: FoodState = initialState, action: RequestApiAction | FoodAction) =>
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
			case ActionTypes.SELECT_FOOD:
				const {food_name, serving_unit, serving_qty, serving_weight_grams, full_nutrients, photo} = action.payload;
				const filteredNutrients = full_nutrients.filter((nutrient) => baseNutrients.some((match) => match.attr_id === nutrient.attr_id));
				const nutrients = baseNutrients.map((item) => ({...item, ...filteredNutrients.find((nutrient) => nutrient.attr_id === item.attr_id)}));
				const [primary, common] = splitArray(nutrients, (index) => index < 11);

				const foodChoosed: FoodSelect = {
					food_name,
					serving_unit,
					serving_qty,
					serving_weight_grams,
					photo,
					full_nutrients: {
						primary,
						common,
					},
				};

				draft.selectedFood = foodChoosed;
				return draft;
			default:
				return draft;
		}
	});

export default foodReducer;
