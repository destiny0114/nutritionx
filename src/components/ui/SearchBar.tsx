/*
 * Project: nutritionx
 * Created Date: Wednesday December 15th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 15th December 2021 4:54:10 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import {ReactComponent as SearchIcon} from "../../assets/icons/search.svg";

const SearchBar: React.FC<{}> = () => {
	return (
		<div className="w-full h-full flex items-center bg-light-purple border-medium-slate-blue border-2 shadow-lg rounded-full">
			<SearchIcon className="ml-5 w-5 h-5" />
			<input className="w-full h-full font-poppins text-sm bg-transparent outline-none mx-5 py-3" placeholder="Search a Food" />
		</div>
	);
};

export default SearchBar;
