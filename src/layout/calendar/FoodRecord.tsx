/*
 * Project: nutritionx
 * Created Date: Tuesday November 30th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 30th November 2021 3:07:45 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* component */
import FoodRecordTable from "../../components/ui/foodrecord/FoodRecordTable";

const theadData = ["Food", "Calories", "Carbs", "Proteins", "Fat"];

const tbodyData = [
	{
		id: 1,
		food: {
			name: "Burger",
			calories: "150kcal",
			carbs: "50g",
			proteins: "12g",
			fats: "6g",
		},
	},
];

const FoodRecord: React.FC<{}> = () => {
	return (
		<div className="flex flex-col w-full h-full bg-medium-slate-blue shadow-lg rounded-2xl p-5 overflow-hidden">
			<p className="font-poppins text-sm text-white">You had</p>
			<div id="food-record-container" className="w-full h-full overflow-hidden">
				<FoodRecordTable theadData={theadData} tbodyData={tbodyData} />
			</div>
		</div>
	);
};

export default FoodRecord;
