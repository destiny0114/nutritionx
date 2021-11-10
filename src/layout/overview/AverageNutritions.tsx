/*
 * Project: nutritionx
 * Created Date: Tuesday October 19th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 19th October 2021 2:39:21 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* component */
import Card from "../../components/Card";
/* UI */
import {ReactComponent as CaloriesIcon} from "../../assets/icons/calories.svg";
import {ReactComponent as CarbIcon} from "../../assets/icons/carb.svg";
import {ReactComponent as ProteinIcon} from "../../assets/icons/protein.svg";
import {ReactComponent as FatIcon} from "../../assets/icons/fat.svg";
// future will move to other place
interface AverageNutritionProps {
	title: string;
	value: number;
	unit: string;
	icon: React.ReactNode;
}

const AverageNutritionList: AverageNutritionProps[] = [
	{
		title: "Avg Calories",
		value: 3256,
		unit: "kcal",
		icon: <CaloriesIcon className="w-16 h-16 2xl:w-28 2xl:h-28" />,
	},
	{
		title: "Avg Carbs",
		value: 96,
		unit: "g",
		icon: <CarbIcon className="w-16 h-16 2xl:w-28 2xl:h-28" />,
	},
	{
		title: "Avg Proteins",
		value: 53,
		unit: "g",
		icon: <ProteinIcon className="w-16 h-16 2xl:w-28 2xl:h-28" />,
	},
	{
		title: "Avg Fats",
		value: 15,
		unit: "g",
		icon: <FatIcon className="w-16 h-16 2xl:w-28 2xl:h-28" />,
	},
];

const AverageNutritions: React.FC<{}> = () => {
	return (
		<div className="flex-none h-2/5 grid grid-cols-4 grid-rows-none gap-4">
			{AverageNutritionList.map((props, index) => (
				<Card key={index} {...props} />
			))}
		</div>
	);
};

export default AverageNutritions;
