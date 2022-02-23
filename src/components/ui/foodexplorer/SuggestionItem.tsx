/*
 * Project: nutritionx
 * Created Date: Wednesday January 12th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 12th January 2022 5:00:48 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import React from "react";
/* hook */
import useAction from "../../../hook/useAction";
/* redux */
import {Food} from "../../../services";
/* utils */
import {findNutrientById} from "../../../utils/nutrient";

interface SuggestionItemProps {
	food: Food;
	onToggleSuggestions: (open: boolean) => void;
}

const SuggestionItem: React.FC<SuggestionItemProps> = ({food, onToggleSuggestions}) => {
	const {food_name, photo, serving_unit, serving_qty, serving_weight_grams, full_nutrients} = food;
	const {selectFood} = useAction();

	if (!food.full_nutrients) return null;

	const onButtonClicked = () => {
		selectFood(food);
		onToggleSuggestions(false);
	};

	const nutrient = findNutrientById(full_nutrients, 208, (data) => {
		if (data) return `${Math.round(data.value).toString()} calories`;
		return "Unknown";
	});

	return (
		<div className="group hover:bg-medium-slate-blue hover:shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2 cursor-pointer" onClick={onButtonClicked}>
			<img className="w-14 h-14 2xl:w-24 2xl:h-24 object-cover rounded-2xl" src={photo.thumb} alt={food_name} />
			<div className="mx-5">
				<p className="font-poppins font-bold text-lg 2xl:text-3xl capitalize group-hover:text-white text-black truncate max-w-md">{food_name}</p>
				<p className="font-poppins font-medium text-xs 2xl:text-lg group-hover:text-purple-300 text-gray-400 truncate max-w-md">
					{serving_qty} {serving_unit} &middot; {Math.round(serving_weight_grams)}g
				</p>
			</div>
			<p className="font-poppins font-medium text-sm 2xl:text-lg group-hover:text-purple-300 text-gray-400 ml-auto">{nutrient}</p>
		</div>
	);
};

export default React.memo(SuggestionItem);
