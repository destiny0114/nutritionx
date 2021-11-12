/*
 * Project: nutritionx
 * Created Date: Wednesday November 3rd 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 3rd November 2021 5:01:58 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, TooltipProps, XAxis, XAxisProps, YAxis, YAxisProps} from "recharts";
import {Props as BarProps} from "recharts/types/cartesian/Bar";
import {CategoricalChartProps} from "recharts/types/chart/generateCategoricalChart";
/* hook */
import {useHover} from "../../hook/useHover";

interface StackBarChartProps {
	data: any[];
}

interface CustomToolTipProps extends TooltipProps<number, string> {
	focus: boolean;
}

const ToolTipTextColors: string[] = ["text-sky-blue", "text-light-pink", "text-naples-yellow"];

const CustomizedToolTip: React.FC<CustomToolTipProps> = ({active, payload, label, focus}) => {
	if (focus && active && payload && payload.length) {
		return (
			<div className="customized-tooltip w-60 bg-purple-900 rounded-2xl shadow-2xl px-5 py-4 grid grid-cols-1 divide-y divide-white divide-opacity-20">
				<p className="date font-poppins text-base text-white mb-2">{label}</p>
				{payload.map((item, index) => {
					return (
						<div className={"tooltip-item flex justify-between py-2"} key={index}>
							<p className={`${item.name} font-poppins text-sm ${ToolTipTextColors[index]}`}>{item.name}</p>
							<p className={`${item.name} font-poppins text-sm ${ToolTipTextColors[index]}`}>{`${item.value}g`}</p>
						</div>
					);
				})}
			</div>
		);
	}
	return null;
};

const StackedBarChart: React.FC<StackBarChartProps> = ({data}) => {
	const [focus, eventHandlers] = useHover();
	let barChartProps: CategoricalChartProps;
	let xAxisProps: XAxisProps;
	let yAxisProps: YAxisProps;
	let stackBarProps: Omit<BarProps, "ref">[];

	barChartProps = {
		data: data,
		layout: "horizontal",
		barSize: 12,
		barCategoryGap: 0,
		margin: {
			top: 20,
		},
	};

	xAxisProps = {
		axisLine: {stroke: "#ffffff"},
		dataKey: "date",
		tick: {fill: "#ffffff", fontFamily: "Poppins"},
	};

	yAxisProps = {
		axisLine: false,
		tick: {fill: "#ffffff", fontFamily: "Poppins"},
	};

	stackBarProps = [
		{
			name: "Carbs",
			dataKey: "nutritions.carbs",
			stackId: "a",
			fill: "url(#carbs-h-gradient)",
			radius: [0, 0, 25, 25],
			legendType: "circle",
		},
		{
			name: "Proteins",
			dataKey: "nutritions.proteins",
			stackId: "a",
			fill: "url(#proteins-h-gradient)",
			radius: undefined,
			legendType: "circle",
		},
		{
			name: "Fats",
			dataKey: "nutritions.fats",
			stackId: "a",
			fill: "url(#fats-h-gradient)",
			radius: [25, 25, 0, 0],
			legendType: "circle",
		},
	];

	return (
		<ResponsiveContainer width={"100%"} height={"90%"}>
			<BarChart {...barChartProps}>
				<defs>
					<linearGradient id="carbs-h-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
						<stop offset="0%" stopColor="#6BE0F1" stopOpacity={1} />
						<stop offset="100%" stopColor="#0286BE" stopOpacity={1} />
					</linearGradient>
					<linearGradient id="proteins-h-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
						<stop offset="0%" stopColor="#FC72FF" stopOpacity={1} />
						<stop offset="100%" stopColor="#E100A2" stopOpacity={1} />
					</linearGradient>
					<linearGradient id="fats-h-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
						<stop offset="0%" stopColor="#FEDE6A" stopOpacity={1} />
						<stop offset="100%" stopColor="#C9AA08" stopOpacity={1} />
					</linearGradient>
				</defs>
				<XAxis {...xAxisProps} />
				<YAxis {...yAxisProps} />
				<CartesianGrid strokeDasharray="1 5" vertical={false} />
				<Tooltip cursor={false} content={<CustomizedToolTip focus={focus} />} />
				<Legend iconSize={8} wrapperStyle={{position: "absolute", top: -25, right: 0, fontFamily: "Poppins", fontSize: 13, color: "white"}} verticalAlign="top" align="right" />
				{stackBarProps.map((props, index) => (
					<Bar key={index} {...props} {...eventHandlers} />
				))}
			</BarChart>
		</ResponsiveContainer>
	);
};

export default StackedBarChart;
