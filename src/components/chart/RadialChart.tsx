/*
 * Project: nutritionx
 * Created Date: Thursday November 4th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 4th November 2021 2:32:15 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import {ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, PolarAngleAxisProps} from "recharts";
import {CategoricalChartProps} from "recharts/types/chart/generateCategoricalChart";
import {Props as RadialBarProps} from "recharts/types/polar/RadialBar";
/* types */
import {FoodRecord} from "../../services";

interface RadialChartProps {
	data: FoodRecord["nutrient"] | undefined;
}

const RadialChart: React.FC<RadialChartProps> = ({data}) => {
	const radialBarChartProps: CategoricalChartProps = {
		data: [data],
		innerRadius: "72%",
		outerRadius: "85%",
		startAngle: 230,
		endAngle: -50,
	};

	const polarAngleAxisProps: Omit<PolarAngleAxisProps, "ref"> = {
		type: "number",
		domain: [0, 2000],
		angleAxisId: 0,
		tick: false,
	};

	const radialBarProps: Omit<RadialBarProps, "ref"> = {
		fill: "url(#total-calories-gradient)",
		cornerRadius: 50,
		background: {opacity: 0.5},
		dataKey: "calories",
		angleAxisId: 0,
	};

	return (
		<ResponsiveContainer width="100%" height="100%">
			<RadialBarChart {...radialBarChartProps}>
				<defs>
					<linearGradient id="total-calories-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
						<stop offset="0%" stopColor="#B080FF" stopOpacity={0.8} />
						<stop offset="100%" stopColor="#7165E3" stopOpacity={1} />
					</linearGradient>
				</defs>
				<PolarAngleAxis {...polarAngleAxisProps} />
				<RadialBar {...radialBarProps} />
			</RadialBarChart>
		</ResponsiveContainer>
	);
};

export default RadialChart;
