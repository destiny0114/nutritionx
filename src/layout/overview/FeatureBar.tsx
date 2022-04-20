/*
 * Project: nutritionx
 * Created Date: Tuesday November 9th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 9th November 2021 5:17:30 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
<<<<<<< HEAD
=======
import {useEffect, useState} from "react";
>>>>>>> 2253cf96acf3dfd251edefd85c6131a9ee488fc1
/* ui */
import Button from "../../components/ui/Button";
import Dropdown from "../../components/ui/Dropdown";
/* icons */
import {ReactComponent as DropdownIcon} from "../../assets/icons/dropdown.svg";
import {ReactComponent as AddIcon} from "../../assets/icons/add.svg";
import dayjs from "dayjs";

<<<<<<< HEAD
interface FeatureBarProps {
	onNavigateTo: (pathname: string) => void;
	onFilterRecord: (dates: string[]) => void;
}

const FeatureBar: React.FC<FeatureBarProps> = ({onNavigateTo, onFilterRecord}) => {
	const handleButtonClicked = () => onNavigateTo("/dashboard");

	const handleFilterButtonClicked = (dates: string[]) => {
		onFilterRecord(dates);
	};
=======
const FeatureBar: React.FC<{}> = () => {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState<string[]>([])
	const handleDay = (from?: number, to?: number) => {
		const end = dayjs().subtract(Number(from), "day").format("YYYY-MM-DD")
		const start = dayjs().subtract(Number(to), "day").format("YYYY-MM-DD")
		return [end, start]
	}

	const handleClickDay = (date?:string[]) => {
		setActive(date || [])
		if (date?.[0] !== active?.[0]) {
			// onChange?.(date)
			return true
		}
		return false
	}

	useEffect(() => {
		console.log(handleDay(24,14))
	}, [])
>>>>>>> 2253cf96acf3dfd251edefd85c6131a9ee488fc1

	return (
		<div className="flex items-start justify-between">
			<h1 className="font-poppins text-3xl 2xl:text-5xl text-white self-center">Analytics Overview</h1>
			<div className="relative inline-flex items-center space-x-10 w-auto h-auto">
				<Button
					className="add-btn bg-medium-slate-blue hover:bg-purple-500 py-3 px-6 2xl:py-5 2xl:px-10 2xl:text-3xl inline-flex"
					icon={<AddIcon className="mr-3 w-5 h-5 2xl:w-8 2xl:h-8" />}
					text="Add Food"
					onClick={handleButtonClicked}
				/>

				<Dropdown
					icon={<DropdownIcon className="mr-3 w-4 h-4 2xl:w-7 2xl:h-7" />}
					options={[
						{label: "Last Week", daysAgo: 7, daysLater: 0},
						{label: "Last 2 Week", daysAgo: 14, daysLater: 7},
						{label: "Last 3 Week", daysAgo: 21, daysLater: 14},
					]}
					onItemClicked={handleFilterButtonClicked}
				/>
<<<<<<< HEAD
=======
				<Dropdown icon={<DropdownIcon className="mr-3 w-4 h-4 2xl:w-7 2xl:h-7" />} isOpen={open} toggleList={() => setOpen(!open)}>
					<Button className="dropdown-item hover:bg-purple-500 py-3 px-5 2xl:text-3xl"  text="Last 2 Week" onClick={() => {handleClickDay(handleDay(14,7))}} />
					<Button className="dropdown-item hover:bg-purple-500 py-3 px-5 2xl:text-3xl" text="Last 3 Week" onClick={() => {handleClickDay(handleDay(24,14))}}  />
				</Dropdown>
>>>>>>> 2253cf96acf3dfd251edefd85c6131a9ee488fc1
			</div>
		</div>
	);
};

export default FeatureBar;
