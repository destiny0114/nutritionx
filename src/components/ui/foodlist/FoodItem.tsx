/*
 * Project: nutritionx
 * Created Date: Wednesday December 22nd 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 22nd December 2021 2:34:12 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* UI */
import React from "react";
import {ReactComponent as AddIcon} from "../../../assets/icons/add.svg";
/* types */
import {Food} from "../../../services";
/* utils */
import {findNutrientById} from "../../../utils/nutrient";

interface FoodItemProps {
	food: Food;
	onAddFoodRecord: (food: Food) => void;
}

const FoodItem: React.FC<FoodItemProps> = ({food, onAddFoodRecord}) => {
	const {food_name, photo, serving_qty, serving_weight_grams, full_nutrients} = food;

	if (!full_nutrients) return null;

	const calories = findNutrientById(full_nutrients, 208, (data) => {
		if (data) return `${Math.round(data.value).toString()} kcal`;
		return "Unknown";
	});

	console.log(food_name);

	const onButtonClicked = () => {
		onAddFoodRecord(food);
	};

	return (
		<div className="bg-purple-300 shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2">
			<img className="w-16 h-16 2xl:w-24 2xl:h-24 object-cover rounded-full" src={photo.thumb} alt={food_name} />
			<div className="food-data mx-5 space-y-1">
				<p className="food-name font-poppins font-bold text-xl 2xl:text-3xl text-blue-900 capitalize truncate w-52 2xl:w-full 2xl:max-w-sm">{food_name}</p>
				<p className="food-description font-poppins font-semibold text-xs 2xl:text-lg text-purple-400">
					{calories} &middot; Serving-size: {serving_qty} &middot; {Math.round(serving_weight_grams)}g
				</p>
			</div>
			<button className="food-add-btn bg-medium-slate-blue active:bg-indigo-900 ml-auto p-2 shadow-xl rounded-2xl" onClick={onButtonClicked}>
				<AddIcon className="w-8 h-8 2xl:w-12 2xl:h-12" />
			</button>
		</div>
	);
};

export default React.memo(FoodItem);
