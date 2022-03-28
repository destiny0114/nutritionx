/*
 * Project: nutritionx
 * Created Date: Tuesday December 7th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 7th December 2021 3:21:57 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import React, {useCallback, useEffect, useMemo} from "react";
/* components */
import FoodItem from "../../components/ui/foodlist/FoodItem";
/* types */
import {Food} from "../../services";
/* hook */
import {useTypedSelector} from "../../hook/useTypedSelector";
import useAction from "../../hook/useAction";

interface FoodListProps {
	onAddFoodRecord: (food: Food) => void;
}

const FoodList: React.FC<FoodListProps> = ({onAddFoodRecord}) => {
	const foodList = useTypedSelector(({foodState: {data}}) => data.items);

	if (typeof foodList === undefined || !foodList.length) return <p className="absolute inset-0 flex items-center justify-center font-poppins font-medium text-2xl opacity-40">Try Search a Food</p>;

	const renderedFoodList = foodList.map((food, index) => <FoodItem food={food} key={index} onAddFoodRecord={onAddFoodRecord} />);

	return (
		<div id="food-list-container" className="w-full h-full flex flex-col space-y-4 overflow-y-scroll overflow-x-hidden px-1 rounded-2xl">
			{renderedFoodList}
		</div>
	);
};

const MemoizeFoodList = React.memo(FoodList);

export default MemoizeFoodList;
