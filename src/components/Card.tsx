/*
 * Project: nutritionx
 * Created Date: Tuesday October 19th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 19th October 2021 2:51:53 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
interface CardProps {
	title: string;
	value: number;
	unit: string;
	icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({title, value, unit, icon}) => {
	return (
		<div className="bg-medium-slate-blue shadow-lg rounded-2xl flex flex-col justify-center items-center">
			{icon}
			<p className="title font-poppins text-white text-center break-word text-sm mt-6 mb-2 2xl:text-xl">{title}</p>
			<p className="value font-poppins text-white text-center text-4xl 2xl:text-5xl">
				{value.toString()}
				<span className="unit font-poppins text-white text-center text-sm 2xl:text-lg ml-1">{unit}</span>
			</p>
		</div>
	);
};

export default Card;
