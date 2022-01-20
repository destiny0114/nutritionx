/*
 * Project: nutritionx
 * Created Date: Monday January 10th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Monday, 10th January 2022 2:52:08 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {ReactComponent as SearchIcon} from "../../../assets/icons/search.svg";
import AutoCompleteItem from "./AutoCompleteItem";

const AutoComplete: React.FC<{}> = () => {
	return (
		<div className="w-full h-full relative flex items-center bg-light-purple border-medium-slate-blue border-2 shadow-lg rounded-full focus-within:ring-4 focus-within:ring-indigo-400">
			<SearchIcon className="ml-5 w-5 h-5 2xl:w-7 2xl:h-7" />
			<input className="w-full h-full font-poppins text-sm 2xl:text-lg bg-transparent outline-none mx-5 py-3" placeholder="Search a Food" />
			<div id="autocomplete-list" className="absolute z-50 h-auto top-full inset-x-0 flex flex-col space-y-3 mt-2 p-3 bg-gray-100 border-gray-300 border-2 shadow-lg rounded-lg">
				<AutoCompleteItem />
				<AutoCompleteItem />
			</div>
		</div>
	);
};

export default AutoComplete;
