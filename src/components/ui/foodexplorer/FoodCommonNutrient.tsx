/*
 * Project: nutritionx
 * Created Date: Tuesday February 22nd 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 22nd February 2022 3:05:27 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import React from "react";
/* types */
import {FoodSelect} from "../../../services";

interface FoodCommonNutrientProps {
	nutrients: FoodSelect["full_nutrients"];
}

const FoodCommonNutrient: React.FC<FoodCommonNutrientProps> = ({nutrients}) => {
	const renderedCommonNutrients = nutrients.common.map((nutrient) => (
		<div className="flex justify-between items-center mx-3 2xl:my-2.5" key={nutrient.name}>
			<p className="font-poppins 2xl:text-2xl capitalize">{nutrient.name}</p>
			<p className="font-poppins 2xl:text-2xl">
				{Math.round(nutrient.value)} {nutrient.unit}
			</p>
		</div>
	));

	return <div id="grid-container">{renderedCommonNutrients}</div>;
};

export default React.memo(FoodCommonNutrient);
