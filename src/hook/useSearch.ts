/*
 * Project: nutritionx
 * Created Date: Monday February 21st 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Monday, 21st February 2022 2:16:49 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */

import {useState, useEffect, useCallback} from "react";
import useAction from "./useAction";
import useDebounce from "./useDebounce";

export default function useSearch(term: string, inputDelay: number): [onTermSubmit: (term: string) => void, isSuggestionsOpen: boolean, onToggleSuggestions: (open: boolean) => void] {
	const [searchTerm, setSearchTerm] = useState(term);
	const [openSuggestions, setOpenSuggestions] = useState(false);

	const debounceTerm = useDebounce(searchTerm, inputDelay);
	const {fetchFoodList} = useAction();

	useEffect(() => {
		if (!debounceTerm) return;

		fetchFoodList(debounceTerm);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debounceTerm]);

	const handleTermSubmit = useCallback((term: string) => setSearchTerm(term), []);

	const handleToggleSuggestions = useCallback((open: boolean) => setOpenSuggestions(open), []);

	return [handleTermSubmit, openSuggestions, handleToggleSuggestions];
}
