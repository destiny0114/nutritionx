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
	icon?: React.ReactElement;
	isOpen: boolean;
	toggleList: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({children, icon, isOpen, toggleList}) => {
	const handleToggle = () => toggleList();

	return (
		<>
			<Button className="dropdown bg-medium-slate-blue hover:bg-purple-500 py-3 px-6 inline-flex" icon={icon} text="Last Week" onClick={handleToggle} />
			{isOpen && <div className="dropdown-list bg-purple-900 w-auto h-auto absolute top-14 right-0 rounded-lg origin-top-right p-2.5 shadow-2xl">{children}</div>}
		</>
	);
};

export default Dropdown;
