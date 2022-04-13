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
/* UI */
import {ReactComponent as CaloriesIcon} from "../../assets/icons/calories.svg";
import {ReactComponent as CarbIcon} from "../../assets/icons/carb.svg";
import {ReactComponent as ProteinIcon} from "../../assets/icons/protein.svg";
import {ReactComponent as FatIcon} from "../../assets/icons/fat.svg";
/* types */
import {Status} from "../../services";

interface AverageNutritionsProps {
	totalAvgNutrition: Status["nutrient_consume"];
}

const AverageNutritions: React.FC<AverageNutritionsProps> = ({totalAvgNutrition}) => {
	const icons: React.ReactNode[] = [
		<CaloriesIcon className="w-16 h-16 2xl:w-28 2xl:h-28" />,
		<CarbIcon className="w-16 h-16 2xl:w-28 2xl:h-28" />,
		<ProteinIcon className="w-16 h-16 2xl:w-28 2xl:h-28" />,
		<FatIcon className="w-16 h-16 2xl:w-28 2xl:h-28" />,
	];

	return (
		<div className="flex-none h-2/5 grid grid-cols-4 grid-rows-none gap-4">
			<div className="bg-medium-slate-blue shadow-lg rounded-2xl flex flex-col justify-center items-center">
				{icons[0]}
				<p className="title font-poppins text-white text-center break-word text-sm mt-6 mb-2 2xl:text-xl">Avg Calories</p>
				<p className="value font-poppins text-white text-center text-4xl 2xl:text-5xl">
					{Math.round(totalAvgNutrition.calories / 7) ?? 0}
					<span className="unit font-poppins text-white text-center text-sm 2xl:text-lg ml-1">g</span>
				</p>
			</div>
			<div className="bg-medium-slate-blue shadow-lg rounded-2xl flex flex-col justify-center items-center">
				{icons[1]}
				<p className="title font-poppins text-white text-center break-word text-sm mt-6 mb-2 2xl:text-xl">Avg Carbs</p>
				<p className="value font-poppins text-white text-center text-4xl 2xl:text-5xl">
					{Math.round(totalAvgNutrition.carbs / 7) ?? 0}
					<span className="unit font-poppins text-white text-center text-sm 2xl:text-lg ml-1">g</span>
				</p>
			</div>
			<div className="bg-medium-slate-blue shadow-lg rounded-2xl flex flex-col justify-center items-center">
				{icons[2]}
				<p className="title font-poppins text-white text-center break-word text-sm mt-6 mb-2 2xl:text-xl">Avg Proteins</p>
				<p className="value font-poppins text-white text-center text-4xl 2xl:text-5xl">
					{Math.round(totalAvgNutrition.proteins / 7) ?? 0}
					<span className="unit font-poppins text-white text-center text-sm 2xl:text-lg ml-1">g</span>
				</p>
			</div>
			<div className="bg-medium-slate-blue shadow-lg rounded-2xl flex flex-col justify-center items-center">
				{icons[3]}
				<p className="title font-poppins text-white text-center break-word text-sm mt-6 mb-2 2xl:text-xl">Avg Fats</p>
				<p className="value font-poppins text-white text-center text-4xl 2xl:text-5xl">
					{Math.round(totalAvgNutrition.fats / 7) ?? 0}
					<span className="unit font-poppins text-white text-center text-sm 2xl:text-lg ml-1">g</span>
				</p>
			</div>
		</div>
	);
};

export default AverageNutritions;
