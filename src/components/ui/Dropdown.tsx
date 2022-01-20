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
/* component */
import Button from "./Button";

interface DropdownProps {
	icon?: React.ReactNode;
	isOpen: boolean;
	toggleList: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({children, icon, isOpen, toggleList}) => {
	const handleToggle = () => toggleList();

	return (
		<div className="dropdown relative">
			<Button className="bg-medium-slate-blue hover:bg-purple-500 py-3 px-6 2xl:py-5 2xl:px-10 2xl:text-3xl inline-flex" icon={icon} text="Last Week" onClick={handleToggle} />
			{isOpen && <div className="dropdown-list bg-purple-900 h-auto absolute top-full inset-x-0 flex flex-col space-y-2 2xl:space-y-5 mt-2 rounded-lg p-2.5 shadow-2xl">{children}</div>}
		</div>
	);
};

export default Dropdown;
