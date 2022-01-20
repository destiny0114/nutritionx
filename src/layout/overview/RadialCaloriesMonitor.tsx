/*
 * Project: nutritionx
 * Created Date: Wednesday November 10th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 10th November 2021 2:23:34 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* component */
import RadialChart from "../../components/chart/RadialChart";
/* ui */
import {ReactComponent as EnergyIcon} from "../../assets/icons/energy.svg";
import {ReactComponent as EllipseShape} from "../../assets/sprites/ellipse.svg";

interface RadialCaloriesMonitorProps {
	data: any;
}

const RadialCaloriesMonitor: React.FC<RadialCaloriesMonitorProps> = ({data}) => {
	return (
		<div className="bg-medium-slate-blue shadow-lg rounded-2xl row-span-1 px-5 2xl:px-7 py-3">
			<div className="inline-flex items-center justify-between w-full h-auto">
				<p className="font-poppins text-sm 2xl:text-lg text-white">Calories for today</p>
				<EnergyIcon className="w-10 h-10 2xl:w-14 2xl:h-14" />
			</div>
			<div className="relative w-auto h-auto">
				<div className="absolute w-full h-full">
					<RadialChart data={data} />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-5">
						<p className="calories-value font-poppins text-center text-4xl 2xl:text-6xl text-white">1659</p>
						<p className="calories-unit font-poppins text-center text-sm 2xl:text-lg text-white">kcal</p>
					</div>
				</div>
				<EllipseShape className="block" />
			</div>
		</div>
	);
};

export default RadialCaloriesMonitor;
