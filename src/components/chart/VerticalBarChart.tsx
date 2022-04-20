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
import {Props as BarProps} from "recharts/types/cartesian/Bar";
import {Props as RectangleProps} from "recharts/types/shape/Rectangle";
/* types */
import {FoodRecord} from "../../services";

interface VerticalBarChartProps {
	data: FoodRecord["nutrient"] | undefined;
	desktop: boolean;
}

interface CustomLabelListProps extends LabelProps {
	name: string;
	desktop: boolean;
}

const calculateHeight = (y: number, height: number) => y - height * 1.5;

const CustomizedLabel: React.FC<CustomLabelListProps> = (props) => {
	const {name, y, height, value, desktop} = props;

	return (
		<g transform="translate(0, 0)">
			<text x="0" y={calculateHeight(y as number, height as number)} fill="#fff" fontFamily="poppins" fontSize={desktop ? 23 : 15} textAnchor="start" dominantBaseline="middle">
				{`${name}`}
			</text>
			<text x="100%" y={calculateHeight(y as number, height as number)} fill="#fff" fontFamily="poppins" fontSize={desktop ? 23 : 15} textAnchor="end" dominantBaseline="middle">
				{`${Math.round(value as number)} ${name.toLowerCase() === "calories" ? "kcal" : "g"}`}
			</text>
		</g>
	);
};

const CustomizedBackground: React.FC<RectangleProps> = (props) => {
	const {width, height, x, y} = props;

	return <rect width={width} height={height} x={x} y={y} rx={5} ry={5} opacity={0.8} fill="white" />;
};

const VerticalBarChart: React.FC<VerticalBarChartProps> = ({data, desktop}) => {
	const barChartProps: CategoricalChartProps = {
		data: [data],
		layout: "vertical",
		barSize: desktop ? 12 : 8,
		barGap: desktop ? 70 : 45,
		margin: {
			top: 15,
		},
	};

	const xAxisProps: XAxisProps = {
		type: "number",
		hide: true,
		domain: [0, 2000],
	};

	const yAxisProps: YAxisProps = {
		type: "category",
		dataKey: "data",
		hide: true,
	};

	const verticalBarProps: Omit<BarProps, "ref">[] = [
		{
			name: "Calories",
			dataKey: "calories",
			fill: "url(#calories-v-gradient)",
			radius: 25,
			background: <CustomizedBackground />,
			children: <LabelList dataKey="calories" content={<CustomizedLabel name="Calories" desktop={desktop} />} />,
		},
		{
			name: "Carbs",
			dataKey: "carbs",
			fill: "url(#carbs-v-gradient)",
			radius: 25,
			background: <CustomizedBackground />,
			children: <LabelList dataKey="carbs" content={<CustomizedLabel name="Carbs" desktop={desktop} />} />,
		},
		{
			name: "Proteins",
			dataKey: "proteins",
			fill: "url(#proteins-v-gradient)",
			radius: 25,
			background: <CustomizedBackground />,
			children: <LabelList dataKey="proteins" content={<CustomizedLabel name="Proteins" desktop={desktop} />} />,
		},
		{
			name: "Fats",
			dataKey: "fats",
			fill: "url(#fats-v-gradient)",
			radius: 25,
			background: <CustomizedBackground />,
			children: <LabelList dataKey="fats" content={<CustomizedLabel name="Fats" desktop={desktop} />} />,
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
