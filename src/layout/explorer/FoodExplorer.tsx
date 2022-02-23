/*
 * Project: nutritionx
 * Created Date: Friday December 24th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Friday, 24th December 2021 3:10:07 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* component */
import AutoComplete from "../../components/ui/foodexplorer/AutoComplete";
import FoodView from "../../components/ui/foodexplorer/FoodView";
/* hook */
import useSearch from "../../hook/useSearch";
import useOuterClick from "../../hook/useOuterClick";

const FoodExplorer: React.FC<{}> = () => {
	const [onTermSubmit, openSuggestions, onToggleSuggestions] = useSearch("", 275);
	const ref = useOuterClick<HTMLDivElement>(() => onToggleSuggestions(false));

	return (
		<div className="flex space-y-4 w-full h-full flex-col">
			<div ref={ref} className="flex-none h-12 2xl:h-16">
				<AutoComplete onTermSubmit={onTermSubmit} openSuggestions={openSuggestions} onToggleSuggestions={onToggleSuggestions} />
			</div>
			<div className="flex-grow w-full h-full">
				<div className="w-full h-full p-5 relative bg-light-purple border-medium-slate-blue border-2 shadow-lg rounded-2xl">
					<FoodView />
				</div>
			</div>
		</div>
	);
};

export default FoodExplorer;
