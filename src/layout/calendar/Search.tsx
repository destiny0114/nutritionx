/*
 * Project: nutritionx
 * Created Date: Tuesday December 7th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 7th December 2021 3:21:41 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* components */
import SearchBar from "../../components/ui/SearchBar";

interface SearchProps {
	onTermSubmit: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({onTermSubmit}) => {
	return (
		<div className="w-auto h-auto">
			<SearchBar onTermSubmit={onTermSubmit} />
		</div>
	);
};

export default Search;
