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
/* components */
import FoodItem from "../../components/ui/foodlist/FoodItem";

const FoodList: React.FC<{}> = () => {
	return (
		<div className="w-full h-full bg-light-purple border-medium-slate-blue border-2 shadow-lg rounded-2xl p-5">
			<div id="food-list-container" className="w-full h-full flex flex-col space-y-4 overflow-y-scroll px-1 rounded-2xl">
				<FoodItem name="Tomato" calories={150} weight={45} serving={1} />
			</div>
		</div>
	);
};

export default FoodList;
