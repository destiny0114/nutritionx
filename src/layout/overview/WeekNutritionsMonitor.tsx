/*
 * Project: nutritionx
 * Created Date: Tuesday November 9th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 9th November 2021 5:34:21 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* component */
import StackedBarChart from "../../components/chart/StackedBarChart";

interface WeekNutritionsMonitorProps {
	data: any;
	desktop: boolean;
}

const WeekNutritionsMonitor: React.FC<WeekNutritionsMonitorProps> = ({data, desktop}) => {
	return (
		<div className="flex-auto bg-medium-slate-blue shadow-lg rounded-2xl">
			<div className="barchart-wrapper relative py-4 px-8 w-full h-full">
				<h1 className="y-axis-title font-poppins text-white 2xl:text-2xl">Calories</h1>
				<StackedBarChart data={data} desktop={desktop} />
			</div>
		</div>
	);
};

export default WeekNutritionsMonitor;
