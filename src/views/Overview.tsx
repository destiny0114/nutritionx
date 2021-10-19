/*
 * Project: nutritionx
 * Created Date: Thursday September 2nd 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 2nd September 2021 3:01:08 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import React, {useState, useCallback, useMemo, useEffect} from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, TooltipProps, Legend, ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, LabelList} from "recharts";
/* component */
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
/* UI and Sprites */
import {ReactComponent as AddIcon} from "../assets/icons/add.svg";
import {ReactComponent as DropdownIcon} from "../assets/icons/dropdown.svg";
import {ReactComponent as CaloriesIcon} from "../assets/icons/calories.svg";
import {ReactComponent as CarbIcon} from "../assets/icons/carb.svg";
import {ReactComponent as ProteinIcon} from "../assets/icons/protein.svg";
import {ReactComponent as FatIcon} from "../assets/icons/fat.svg";
import {ReactComponent as EnergyIcon} from "../assets/icons/energy.svg";
import {ReactComponent as EllipseShape} from "../assets/sprites/ellipse.svg";
import {ContentType, Props} from "recharts/types/component/Label";
import {ContentType as TCT} from "recharts/types/component/Tooltip";
/*
header button
4 card
card 
side 2 card
*/
interface DummyData {
	nutritions: {
		carbs: number;
		proteins: number;
		fats: number;
	};
	date: string;
}

const dummyData: DummyData[] = [
	{
		nutritions: {
			carbs: 325,
			proteins: 210,
			fats: 44,
		},
		date: "Mar 23",
	},
	{
		nutritions: {
			carbs: 366,
			proteins: 167,
			fats: 49,
		},
		date: "Mar 24",
	},
	{
		nutritions: {
			carbs: 387,
			proteins: 173,
			fats: 56,
		},
		date: "Mar 25",
	},
	{
		nutritions: {
			carbs: 298,
			proteins: 196,
			fats: 59,
		},
		date: "Mar 26",
	},
	{
		nutritions: {
			carbs: 358,
			proteins: 234,
			fats: 62,
		},
		date: "Mar 27",
	},
	{
		nutritions: {
			carbs: 274,
			proteins: 157,
			fats: 66,
		},
		date: "Mar 28",
	},
	{
		nutritions: {
			carbs: 324,
			proteins: 130,
			fats: 73,
		},
		date: "Mar 29",
	},
];

function calculateCalories(nutritions: {carbs: number; proteins: number; fats: number; [key: string]: any}) {
	const {carbs, proteins, fats} = nutritions;
	const calories = carbs + proteins + fats;
	nutritions["calories"] = calories;
	return nutritions;
}

interface CustomToolTipProps extends TooltipProps<number, string> {
	focus: boolean;
}

interface CustomLabelListProps extends Props {
	name: string;
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

const CustomizedBackground: React.FC<{}> = (props) => {
	return <rect {...props} rx={5} ry={5} style={{opacity: 0.5}} />;
};

const calculateHeight = (y: number, height: number) => y - height;

const CustomizedLabel: React.FC<CustomLabelListProps> = (props) => {
	const {name, y, height, value} = props;

	return (
		<g transform="translate(0, 0)">
			<text x="0" y={calculateHeight(y as number, height as number)} fill="#fff" font-family="poppins" textAnchor="start" dominantBaseline="middle">
				{`${name}`}
			</text>
			<text x="100%" y={calculateHeight(y as number, height as number)} fill="#fff" font-family="poppins" textAnchor="end" dominantBaseline="middle">
				{`${value}`}
			</text>
		</g>
	);
};

type Hook = () => [
	boolean,
	{
		onMouseOver(): void;
		onMouseOut(): void;
	}
];

const useHover: Hook = () => {
	const [focusBar, setFocusBar] = useState(false);
	const eventHandlers = useMemo(
		() => ({
			onMouseOver() {
				setFocusBar(true);
			},
			onMouseOut() {
				setFocusBar(false);
			},
		}),
		[]
	);
	return [focusBar, eventHandlers];
};

const useDebounce = <T extends {}>(value: T, delay: number): T => {
	const [debounceValue, setDebouncedValue] = useState<T>(value);
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debounceValue;
};

const Overview: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [focusBar, eventHandlers] = useHover();

	useEffect(() => {
		calculateCalories(dummyData[0].nutritions);
	}, []);

	return (
		<div className="overview flex w-full space-x-6">
			<div className="flex-auto">
				<div className="flex space-y-4 w-full h-full flex-col">
					<div className="header flex items-start justify-between">
						<h1 className="font-poppins text-3xl text-white self-center">Analytics Overview</h1>
						<div className="relative inline-flex items-center space-x-10 w-auto h-auto">
							<Button className="add-btn bg-medium-slate-blue hover:bg-purple-500 py-3 px-6 inline-flex" icon={<AddIcon className="mr-3 w-5 h-5" />} text="Add Food" />
							<Dropdown icon={<DropdownIcon className="mr-3 w-4 h-4" />} isOpen={open} toggleList={() => setOpen(!open)}>
								<Button className="dropdown-item hover:bg-purple-500 py-3 px-5 block" text="Last 2 Week" />
								<Button className="dropdown-item hover:bg-purple-500 py-3 px-5 block" text="Last 3 Week" />
							</Dropdown>
						</div>
					</div>
					<div className="flex-none h-2/5 grid grid-cols-4 grid-rows-none gap-4">
						<div className="bg-medium-slate-blue shadow-lg rounded-2xl flex flex-col justify-center items-center">
							<CaloriesIcon className="w-16 h-16" />
							<p className="title font-poppins text-white text-center break-word text-sm mt-6 mb-2">Avg Calories</p>
							<p className="value font-poppins text-white text-center text-4xl">
								3256
								<span className="unit font-poppins text-white text-center text-sm ml-1">kcal</span>
							</p>
						</div>
						<div className="bg-medium-slate-blue shadow-lg rounded-2xl flex flex-col justify-center items-center">
							<CarbIcon className="w-16 h-16" />
							<p className="title font-poppins text-white text-center break-word text-sm mt-6 mb-2">Avg Carbs</p>
							<p className="value font-poppins text-white text-center text-4xl">
								96
								<span className="unit font-poppins text-white text-center text-sm ml-1">g</span>
							</p>
						</div>
						<div className="bg-medium-slate-blue shadow-lg rounded-2xl flex flex-col justify-center items-center">
							<ProteinIcon className="w-16 h-16" />
							<p className="title font-poppins text-white text-center break-word text-sm mt-6 mb-2">Avg Proteins</p>
							<p className="value font-poppins text-white text-center text-4xl">
								53
								<span className="unit font-poppins text-white text-center text-sm ml-1">g</span>
							</p>
						</div>
						<div className="bg-medium-slate-blue shadow-lg rounded-2xl flex flex-col justify-center items-center">
							<FatIcon className="w-16 h-16" />
							<p className="title font-poppins text-white text-center break-word text-sm mt-6 mb-2">Avg Fats</p>
							<p className="value font-poppins text-white text-center text-4xl">
								15
								<span className="unit font-poppins text-white text-center text-sm ml-1">g</span>
							</p>
						</div>
					</div>
					<div className="flex-auto bg-medium-slate-blue shadow-lg rounded-2xl">
						<div className="barchart-wrapper relative py-4 px-8 w-full h-full">
							<h1 className="y-axis-title font-poppins text-white text-base">Calories</h1>
							<ResponsiveContainer width="100%" height="90%">
								<BarChart data={dummyData} barSize={12} barCategoryGap={0} margin={{top: 20}}>
									<defs>
										<linearGradient id="carbs-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
											<stop offset="0%" stopColor="#6BE0F1" stopOpacity={1} />
											<stop offset="100%" stopColor="#0286BE" stopOpacity={1} />
										</linearGradient>
										<linearGradient id="proteins-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
											<stop offset="0%" stopColor="#FC72FF" stopOpacity={1} />
											<stop offset="100%" stopColor="#E100A2" stopOpacity={1} />
										</linearGradient>
										<linearGradient id="fats-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
											<stop offset="0%" stopColor="#FEDE6A" stopOpacity={1} />
											<stop offset="100%" stopColor="#C9AA08" stopOpacity={1} />
										</linearGradient>
									</defs>
									<CartesianGrid strokeDasharray="1 5" vertical={false} />
									<XAxis axisLine={{stroke: "#ffffff"}} dataKey="date" tick={{fill: "#ffffff", fontFamily: "Poppins"}} />
									<YAxis axisLine={false} tick={{fill: "#ffffff", fontFamily: "Poppins"}} />
									<Tooltip cursor={false} content={<CustomizedToolTip focus={focusBar} />} />
									<Legend iconSize={8} wrapperStyle={{position: "absolute", top: -25, right: 0, fontFamily: "Poppins", fontSize: 13, color: "white"}} verticalAlign="top" align="right" />
									<Bar name="Carb" dataKey="nutritions.carbs" stackId="a" fill="url(#carbs-gradient)" radius={[0, 0, 25, 25]} legendType="circle" {...eventHandlers} />
									<Bar name="Protein" dataKey="nutritions.proteins" stackId="a" fill="url(#proteins-gradient)" legendType="circle" {...eventHandlers} />
									<Bar name="Fat" dataKey="nutritions.fats" stackId="a" fill="url(#fats-gradient)" radius={[25, 25, 0, 0]} legendType="circle" {...eventHandlers} />
								</BarChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-none w-1/4 h-auto">
				<div className="grid grid-rows-2 gap-5 w-full h-full">
					<div className="bg-medium-slate-blue shadow-lg rounded-2xl row-span-1 px-5 py-3">
						<div className="inline-flex items-center justify-between w-full h-auto">
							<p className="font-poppins text-sm text-white">Calories for today</p>
							<EnergyIcon className="w-10 h-10" />
						</div>
						<div className="relative w-auto h-auto">
							<div className="absolute w-full h-full">
								<ResponsiveContainer width="100%" height="100%">
									<RadialBarChart innerRadius="72%" outerRadius="85%" data={[{name: "D1", value: 1520}]} startAngle={230} endAngle={-50}>
										<defs>
											<linearGradient id="total-calories-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
												<stop offset="0%" stopColor="#B080FF" stopOpacity={0.8} />
												<stop offset="100%" stopColor="#7165E3" stopOpacity={1} />
											</linearGradient>
										</defs>
										<PolarAngleAxis type="number" domain={[0, 2000]} angleAxisId={0} tick={false} />
										<RadialBar fill="url(#total-calories-gradient)" cornerRadius={50} background={{opacity: 0.5}} dataKey="value" angleAxisId={0} />
									</RadialBarChart>
								</ResponsiveContainer>
								<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-5">
									<p className="calories-value font-poppins text-center text-4xl text-white">1659</p>
									<p className="calories-unit font-poppins text-center text-sm text-white">kcal</p>
								</div>
							</div>
							<EllipseShape className="block" />
						</div>
					</div>
					<div className="bg-medium-slate-blue shadow-lg rounded-2xl row-span-1 px-5 py-4">
						<div className="barchart-wrapper w-full h-full">
							<p className="font-poppins text-sm text-white w-full h-auto">Overview Analytics for Today</p>
							<ResponsiveContainer width="100%" height="90%">
								<BarChart data={[dummyData[0]]} layout="vertical" barSize={8} barGap={35} margin={{top: 20}}>
									<defs>
										<linearGradient id="carbs-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
											<stop offset="0%" stopColor="#6BE0F1" stopOpacity={1} />
											<stop offset="100%" stopColor="#0286BE" stopOpacity={1} />
										</linearGradient>
										<linearGradient id="proteins-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
											<stop offset="0%" stopColor="#FC72FF" stopOpacity={1} />
											<stop offset="100%" stopColor="#E100A2" stopOpacity={1} />
										</linearGradient>
										<linearGradient id="fats-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
											<stop offset="0%" stopColor="#FEDE6A" stopOpacity={1} />
											<stop offset="100%" stopColor="#C9AA08" stopOpacity={1} />
										</linearGradient>
										<linearGradient id="calories-gradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(25)">
											<stop offset="0%" stopColor="#fc7351" stopOpacity={1} />
											<stop offset="100%" stopColor="#c97508" stopOpacity={1} />
										</linearGradient>
									</defs>
									<XAxis type="number" hide />
									<YAxis type="category" dataKey="nutritions" hide />
									<Bar name="Carb" dataKey="nutritions.carbs" fill="url(#carbs-gradient)" radius={25} background={<CustomizedBackground />} {...eventHandlers}>
										<LabelList dataKey="nutritions.carbs" content={<CustomizedLabel name="Carbs" />} />
									</Bar>
									<Bar name="Protein" dataKey="nutritions.proteins" fill="url(#proteins-gradient)" radius={25} background={<CustomizedBackground />} {...eventHandlers}>
										<LabelList dataKey="nutritions.proteins" content={<CustomizedLabel name="Proteins" />} />
									</Bar>
									<Bar name="Fat" dataKey="nutritions.fats" fill="url(#fats-gradient)" radius={25} background={<CustomizedBackground />} {...eventHandlers}>
										<LabelList dataKey="nutritions.fats" content={<CustomizedLabel name="Fats" />} />
									</Bar>
									<Bar name="Calories" dataKey="nutritions.calories" fill="url(#calories-gradient)" radius={25} background={<CustomizedBackground />} {...eventHandlers}>
										<LabelList dataKey="nutritions.calories" content={<CustomizedLabel name="Calories" />} />
									</Bar>
								</BarChart>
							</ResponsiveContainer>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
