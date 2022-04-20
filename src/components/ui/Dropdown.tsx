/*
 * Project: nutritionx
 * Created Date: Thursday September 9th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 9th September 2021 3:16:07 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import {useState} from "react";
/* component */
import Button from "./Button";
/* hook */
import useOuterClick from "../../hook/useOuterClick";
/* util */
import {datesBetween} from "../../utils/common";

interface DropdownProps {
	icon?: React.ReactNode;
	options: any[];
	onItemClicked: (dates: string[]) => void;
}

const Dropdown: React.FC<DropdownProps> = ({options, icon, onItemClicked}) => {
	const [label, setLabel] = useState("Last Week");
	const [toggleDropdown, setToggleDropdown] = useState(false);

	const ref = useOuterClick<HTMLDivElement>(() => setToggleDropdown(false));

	const handleToggle = () => setToggleDropdown(!toggleDropdown);

	const handleDropdownItemClicked = (label: string, dates: string[]) => {
		onItemClicked(dates);
		setLabel(label);
		setToggleDropdown(false);
	};

	const renderedDropdownItem = options.map((item, index) => (
		<DropdownItem key={index} label={item.label} onClick={() => handleDropdownItemClicked(item.label, datesBetween(item.daysAgo, item.daysLater))} />
	));

	return (
		<div ref={ref} className="dropdown relative">
			<Button className="bg-medium-slate-blue hover:bg-purple-500 py-3 px-6 2xl:py-5 2xl:px-10 2xl:text-3xl inline-flex" icon={icon} text={label} onClick={handleToggle} />
			{toggleDropdown && (
				<div className="dropdown-list bg-purple-900 h-auto absolute top-full inset-x-0 flex flex-col space-y-2 2xl:space-y-5 mt-2 rounded-lg p-2.5 shadow-2xl">{renderedDropdownItem}</div>
			)}
		</div>
	);
};

interface DropdownItemProps {
	label: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const DropdownItem: React.FC<DropdownItemProps> = ({label, onClick}) => {
	return (
		<button className="hover:bg-purple-500 py-3 px-5 2xl:text-3xl font-poppins text-white rounded-2xl items-center" onClick={onClick}>
			{label}
		</button>
	);
};

export default Dropdown;
