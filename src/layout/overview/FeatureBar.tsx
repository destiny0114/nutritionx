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
import {useCallback, useEffect, useState} from "react";
/* ui */
import Button from "../../components/ui/Button";
import Dropdown from "../../components/ui/Dropdown";
/* icons */
import {ReactComponent as DropdownIcon} from "../../assets/icons/dropdown.svg";
import {ReactComponent as AddIcon} from "../../assets/icons/add.svg";
/* util */
import {datesBetween, sameDay} from "../../utils/common";

interface FeatureBarProps {
	onNavigateTo: (pathname: string) => void;
	onFilterRecord: (dates: Date[]) => void;
}

const FeatureBar: React.FC<FeatureBarProps> = ({onNavigateTo, onFilterRecord}) => {
	const [datesSelected, setDatesSelected] = useState<Date[]>([]);
	const [toggleDropdown, setToggleDropdown] = useState(false);

	useEffect(() => {
		if (!datesSelected.length) return;
		onFilterRecord(datesSelected);
	}, [datesSelected, onFilterRecord]);

	const onButtonClicked = () => onNavigateTo("/dashboard");

	const onFilterButtonClicked = useCallback(
		(dates: Date[]) => {
			if (datesSelected.length && sameDay(dates[0], datesSelected[0]) && sameDay(dates[1], datesSelected[1])) return;

			setDatesSelected(dates);
			setToggleDropdown(false);
		},
		[datesSelected]
	);

	// const handleClickDay = (date?: Date[]) => {
	// 	if (date?.[0] && active?.[0] && sameDay(date[0], active[0])) return;
	// 	console.log("not same");

	// 	setActive(date || []);
	// 	onToggleDropdown(false);
	// };

	return (
		<div className="flex items-start justify-between">
			<h1 className="font-poppins text-3xl 2xl:text-5xl text-white self-center">Analytics Overview</h1>
			<div className="relative inline-flex items-center space-x-10 w-auto h-auto">
				<Button
					className="add-btn bg-medium-slate-blue hover:bg-purple-500 py-3 px-6 2xl:py-5 2xl:px-10 2xl:text-3xl inline-flex"
					icon={<AddIcon className="mr-3 w-5 h-5 2xl:w-8 2xl:h-8" />}
					text="Add Food"
					onClick={onButtonClicked}
				/>
				<Dropdown icon={<DropdownIcon className="mr-3 w-4 h-4 2xl:w-7 2xl:h-7" />} isDropdownActive={toggleDropdown} onToggleDropdown={() => setToggleDropdown(!toggleDropdown)}>
					<Button className="dropdown-item hover:bg-purple-500 py-3 px-5 2xl:text-3xl" text="Last Week" onClick={() => onFilterButtonClicked(datesBetween(7, 0))} />
					<Button className="dropdown-item hover:bg-purple-500 py-3 px-5 2xl:text-3xl" text="Last 2 Week" onClick={() => onFilterButtonClicked(datesBetween(14, 7))} />
					<Button className="dropdown-item hover:bg-purple-500 py-3 px-5 2xl:text-3xl" text="Last 3 Week" onClick={() => onFilterButtonClicked(datesBetween(21, 14))} />
				</Dropdown>
			</div>
		</div>
	);
};

export default FeatureBar;
