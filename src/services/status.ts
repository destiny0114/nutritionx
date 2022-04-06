/*
 * Project: nutritionx
 * Created Date: Thursday March 31st 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 31st March 2022 2:17:31 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {FoodRecord} from "./record";

export interface Status {
	date: string;
	nutrient_consume: FoodRecord["nutrient"];
}
