/*
 * Project: nutritionx
 * Created Date: Tuesday December 28th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 28th December 2021 4:58:59 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import React from "react";
/* components */
import FoodMainInfo from "./FoodMainInfo";
import FoodCommonNutrient from "./FoodCommonNutrient";
import LottieEmptyFood from "../LottieEmptyFood";
/* types */
import {FoodSelect} from "../../../services";

interface FoodViewProps {
	foodSelected: FoodSelect | null;
}

const FoodView: React.FC<FoodViewProps> = ({foodSelected}) => {
	if (!foodSelected) return <LottieEmptyFood />;

	return (
		<div className="flex w-full p-5 space-x-4">
			<div className="w-1/3 flex flex-col gap-4">
				<FoodMainInfo food={foodSelected} />
			</div>
			<div className="flex-grow-0 w-full h-full justify-center items-center">
				<FoodCommonNutrient nutrients={foodSelected.full_nutrients} />
			</div>
		</div>
	);
};

function arePropsEqual(prevProps: Readonly<FoodViewProps>, nextProps: Readonly<FoodViewProps>): boolean {
	if (!(nextProps.foodSelected && prevProps.foodSelected)) return false;

	return prevProps.foodSelected.food_name === nextProps.foodSelected.food_name;
}

export default React.memo(FoodView, arePropsEqual);
