/*
 * Project: nutritionx
 * Created Date: Thursday January 27th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 27th January 2022 5:51:38 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import apiClient from "../utils/apiClient";

export function searchFoodItem(term: string) {
	return apiClient.get("search/instant/", {
		params: {
			query: term,
			branded: false,
			detailed: true,
		},
	});
}
