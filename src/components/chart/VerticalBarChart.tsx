/*
 * Project: nutritionx
 * Created Date: Wednesday November 3rd 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 3rd November 2021 5:17:03 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import {Bar, BarChart, LabelList, LabelProps, ResponsiveContainer, XAxis, XAxisProps, YAxis, YAxisProps} from "recharts";
import {CategoricalChartProps} from "recharts/types/chart/generateCategoricalChart";
import {Props} from "recharts/types/cartesian/Bar";

interface VerticalBarChartProps {
	data: any[];
}

interface CustomLabelListProps extends LabelProps {
	name: string;
}

const calculateHeight = (y: number, height: number) => y - height;

const CustomizedLabel: React.FC<CustomLabelListProps> = (props) => {
	const {name, y, height, value} = props;

	return (
		<g transform="translate(0, 0)">
			<text x="0" y={calculateHeight(y as number, height as number)} fill="#fff" fontFamily="poppins" textAnchor="start" dominantBaseline="middle">
				{`${name}`}
			</text>
			<text x="100%" y={calculateHeight(y as number, height as number)} fill="#fff" fontFamily="poppins" textAnchor="end" dominantBaseline="middle">
				{`${value}`}
			</text>
		</g>
	);
};

const VerticalBarChart: React.FC<VerticalBarChartProps> = ({data}) => {
	let barChartProps: CategoricalChartProps;
	let xAxisProps: XAxisProps;
	let yAxisProps: YAxisProps;
	let verticalBarProps: Omit<Props, "ref">[];

	barChartProps = {
		data: data,
		layout: "vertical",
		barSize: 8,
		barGap: 45,
		margin: {
			top: 20,
		},
	};

	xAxisProps = {
		type: "number",
		hide: true,
	};

	yAxisProps = {
		type: "category",
		dataKey: "nutritions",
		hide: true,
	};

	verticalBarProps = [
		{
			name: "Calories",
			dataKey: "nutritions.calories",
			fill: "url(#calories-v-gradient)",
			radius: 25,
			background: <rect rx={5} ry={5} opacity={0.5} />,
			children: <LabelList dataKey="nutritions.calories" content={<CustomizedLabel name="Calories" />} />,
		},
		{
			name: "Carbs",
			dataKey: "nutritions.carbs",
			fill: "url(#carbs-v-gradient)",
			radius: 25,
			background: <rect rx={5} ry={5} opacity={0.5} />,
			children: <LabelList dataKey="nutritions.carbs" content={<CustomizedLabel name="Carbs" />} />,
		},
		{
			name: "Proteins",
			dataKey: "nutritions.proteins",
			fill: "url(#proteins-v-gradient)",
			radius: 25,
			background: <rect rx={5} ry={5} opacity={0.5} />,
			children: <LabelList dataKey="nutritions.proteins" content={<CustomizedLabel name="Proteins" />} />,
		},
		{
			name: "Fats",
			dataKey: "nutritions.fats",
			fill: "url(#fats-v-gradient)",
			radius: 25,
			background: <rect rx={5} ry={5} opacity={0.5} />,
			children: <LabelList dataKey="nutritions.fats" content={<CustomizedLabel name="Fats" />} />,
		},
	];

	return (
		<ResponsiveContainer width={"100%"} height={"90%"}>
			<BarChart {...barChartProps}>
				<defs>
					<linearGradient id="carbs-v-gradient" x1="0" y1="0" x2="100%" y2="1">
						<stop offset="0%" stopColor="#6BE0F1" stopOpacity={1} />
						<stop offset="100%" stopColor="#0286BE" stopOpacity={1} />
					</linearGradient>
					<linearGradient id="proteins-v-gradient" x1="0" y1="0" x2="100%" y2="1">
						<stop offset="0%" stopColor="#FC72FF" stopOpacity={1} />
						<stop offset="100%" stopColor="#E100A2" stopOpacity={1} />
					</linearGradient>
					<linearGradient id="fats-v-gradient" x1="0" y1="0" x2="100%" y2="1">
						<stop offset="0%" stopColor="#FEDE6A" stopOpacity={1} />
						<stop offset="100%" stopColor="#C9AA08" stopOpacity={1} />
					</linearGradient>
					<linearGradient id="calories-v-gradient" x1="0" y1="0" x2="100%" y2="0">
						<stop offset="0%" stopColor="#f12711" stopOpacity={1} />
						<stop offset="100%" stopColor="#f5af19" stopOpacity={1} />
					</linearGradient>
				</defs>
				<XAxis {...xAxisProps} />
				<YAxis {...yAxisProps} />
				{verticalBarProps.map((props, index) => (
					<Bar {...props} key={index} />
				))}
			</BarChart>
		</ResponsiveContainer>
	);
};

export default VerticalBarChart;
