/*
 * Project: nutritionx
 * Created Date: Friday December 24th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Friday, 24th December 2021 3:10:07 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* component */
import AutoComplete from "../../components/ui/foodexplorer/AutoComplete";
import FoodView from "../../components/ui/foodexplorer/FoodView";

const FoodExplorer: React.FC<{}> = () => {
	return (
		<div className="flex space-y-4 w-full h-full flex-col">
			<div className="flex-none h-12 2xl:h-16">
				<AutoComplete />
			</div>
			<div className="flex-auto">
				<FoodView />
			</div>
		</div>
	);
};

export default FoodExplorer;
