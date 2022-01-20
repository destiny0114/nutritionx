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
import {ReactComponent as AddIcon} from "../../../assets/icons/add.svg";

interface FoodItemProps {
	name: string;
	calories: number;
	serving: number;
	weight: number;
	imageUrl?: string;
}

const FoodItem: React.FC<FoodItemProps> = ({name, calories, serving, weight}) => {
	return (
		<div className="bg-purple-300 shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2">
			<img className="w-16 h-16 2xl:w-24 2xl:h-24 object-cover rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" alt="tomato" />
			<div className="food-data mx-5 space-y-1">
				<p className="food-name font-poppins font-bold text-xl 2xl:text-3xl text-blue-900 truncate max-w-md">{name}</p>
				<p className="food-description font-poppins font-semibold text-xs 2xl:text-lg text-purple-400">
					{calories}kcal &middot; Serving-size: {serving} &middot; {weight}g
				</p>
			</div>
			<button className="food-add-btn bg-medium-slate-blue active:bg-indigo-900 ml-auto p-2 shadow-xl rounded-2xl">
				<AddIcon className="w-8 h-8 2xl:w-12 2xl:h-12" />
			</button>
		</div>
	);
};

export default FoodItem;
