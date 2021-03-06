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
import {ChangeEvent} from "react";
/* icon */
import {ReactComponent as SearchIcon} from "../../assets/icons/search.svg";

interface SearchBarProps {
	onTermSubmit: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onTermSubmit}) => {
	const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		onTermSubmit(e.target.value);
	};

	return (
		<div className="w-full h-full flex items-center bg-light-purple border-medium-slate-blue border-2 shadow-lg rounded-full focus-within:ring-4 focus-within:ring-indigo-400">
			<SearchIcon className="ml-5 w-5 2xl:w-7 h-5 2xl:h-7" />
			<input className="w-full h-full font-poppins text-sm 2xl:text-lg bg-transparent outline-none mx-5 py-3" placeholder="Search a Food" onChange={onInputChanged} />
		</div>
	);
};

export default SearchBar;
