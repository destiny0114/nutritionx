/*
 * Project: nutritionx
 * Created Date: Wednesday November 10th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th November 2021 2:35:20 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* component */
import VerticalBarChart from "../../components/chart/VerticalBarChart";

interface TodayNutritionsMonitorProps {
	data: any[];
}

const TodayNutritionsMonitor: React.FC<TodayNutritionsMonitorProps> = ({data}) => {
	return (
		<div className="bg-medium-slate-blue shadow-lg rounded-2xl row-span-1 px-5 py-3">
			<div className="barchart-wrapper w-full h-full">
				<p className="font-poppins text-sm text-white w-full h-auto">Overview Analytics for Today</p>
				<VerticalBarChart data={data} />
			</div>
		</div>
	);
};

export default TodayNutritionsMonitor;
