/*
 * Project: nutritionx
 * Created Date: Monday February 28th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Monday, 28th February 2022 4:54:36 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
export interface FoodRecord {
	food_name: string;
	nutrient: {
		calories: number;
		carbs: number;
		proteins: number;
		fats: number;
	};
}

export interface RecordCollection {
	[key: string]: {
		date: string;
		items: FoodRecord[];
	};
}
