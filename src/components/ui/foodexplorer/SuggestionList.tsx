/*
 * Project: nutritionx
 * Created Date: Saturday February 5th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Saturday, 5th February 2022 12:04:47 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import React from "react";
/* component */
import SuggestionItem from "./SuggestionItem";
/* type */
import {Food} from "../../../services";

interface SuggestionListProps {
	suggestions: Food[];
	openSuggestions: boolean;
	onToggleSuggestions: (open: boolean) => void;
}

const SuggestionList: React.FC<SuggestionListProps> = ({suggestions, onToggleSuggestions, openSuggestions}) => {
	const renderedSuggestions = suggestions.map((food, index) => {
		return <SuggestionItem key={index} food={food} onToggleSuggestions={onToggleSuggestions} />;
	});

	if (!openSuggestions) return null;

	return (
		<div id="autocomplete-list" className="absolute z-50 h-auto top-full inset-x-0 flex flex-col space-y-3 mt-2 p-3 bg-gray-100 border-gray-300 border-2 shadow-lg rounded-lg">
			{renderedSuggestions}
		</div>
	);
};

export default SuggestionList;
