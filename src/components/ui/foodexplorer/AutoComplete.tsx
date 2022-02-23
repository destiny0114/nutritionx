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
import {ChangeEvent} from "react";
/* component */
import {ReactComponent as SearchIcon} from "../../../assets/icons/search.svg";
import SuggestionList from "./SuggestionList";
/* hook */
import {useTypedSelector} from "../../../hook/useTypedSelector";

interface AutoCompleteProps {
	onTermSubmit: (term: string) => void;
	openSuggestions: boolean;
	onToggleSuggestions: (open: boolean) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({onTermSubmit, openSuggestions, onToggleSuggestions}) => {
	const searchResults = useTypedSelector(({foodState: {data}}) => data.items.slice(0, 5));

	const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		onTermSubmit(e.target.value);
	};

	const onInputFocused = () => {
		onToggleSuggestions(true);
	};

	return (
		<div className="w-full h-full relative flex items-center bg-light-purple border-medium-slate-blue border-2 shadow-lg rounded-full focus-within:ring-4 focus-within:ring-indigo-400">
			<SearchIcon className="ml-5 w-5 h-5 2xl:w-7 2xl:h-7" />
			<input className="w-full h-full font-poppins text-sm 2xl:text-lg bg-transparent outline-none mx-5 py-3" placeholder="Search a Food" onChange={onInputChanged} onFocus={onInputFocused} />
			{searchResults.length > 0 && <SuggestionList suggestions={searchResults} openSuggestions={openSuggestions} onToggleSuggestions={onToggleSuggestions} />}
		</div>
	);
};

export default AutoComplete;
