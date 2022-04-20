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
/* ui */
import Button from "../../components/ui/Button";
import Dropdown from "../../components/ui/Dropdown";
/* icons */
import {ReactComponent as DropdownIcon} from "../../assets/icons/dropdown.svg";
import {ReactComponent as AddIcon} from "../../assets/icons/add.svg";

interface FeatureBarProps {
	onNavigateTo: (pathname: string) => void;
	onFilterRecord: (dates: string[]) => void;
}

const FeatureBar: React.FC<FeatureBarProps> = ({onNavigateTo, onFilterRecord}) => {
	const handleButtonClicked = () => onNavigateTo("/dashboard");

	const handleFilterButtonClicked = (dates: string[]) => {
		onFilterRecord(dates);
	};

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
			</div>
		</div>
	);
};

export default FeatureBar;
