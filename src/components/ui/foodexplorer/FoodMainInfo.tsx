/*
 * Project: nutritionx
 * Created Date: Tuesday February 22nd 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 22nd February 2022 2:34:38 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import React, {Fragment} from "react";
/* types */
import {FoodSelect} from "../../../services";

interface FoodMainInfoProps {
	food: FoodSelect;
}

const FoodMainInfo: React.FC<FoodMainInfoProps> = ({food}) => {
	const renderedMainInfo = food.full_nutrients.primary.map((nutrient) => (
		<div className="flex justify-between mx-3 my-3 2xl:my-7" key={nutrient.name}>
			<p className="font-poppins font-medium 2xl:text-3xl capitalize">{nutrient.name}</p>
			<p className="font-poppins font-medium 2xl:text-3xl">
				{Math.round(nutrient.value)} {nutrient.unit}
			</p>
		</div>
	));

	return (
		<Fragment>
			<div className="w-full h-auto inline-flex space-x-5 mb-6 2xl:mb-12">
				<img className="w-28 h-28 2xl:w-32 2xl:h-32 object-cover rounded-full" src={food.photo.highres ?? food.photo.thumb} alt={food.food_name} />
				<div className="self-center">
					<p className="font-poppins font-bold text-2xl 2xl:text-5xl break-words whitespace-pre-wrap mb-1 capitalize">{food.food_name}</p>
					<p className="font-poppins text-xs 2xl:text:3xl opacity-50">
						Serving Size: {food.serving_qty} {food.serving_unit} &middot; {Math.round(food.serving_weight_grams)}g
					</p>
				</div>
			</div>
			{renderedMainInfo}
		</Fragment>
	);
};

export default React.memo(FoodMainInfo);
