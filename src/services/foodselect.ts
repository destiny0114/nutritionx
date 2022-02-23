/*
 * Project: nutritionx
 * Created Date: Tuesday February 22nd 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 22nd February 2022 2:53:07 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {Food} from "./food";
import {Nutrient} from "./nutrient";
import {Modify} from "../utils/common";

export type FoodSelect = Modify<
	Food,
	{
		full_nutrients: {
			primary: Nutrient[];
			common: Nutrient[];
		};
	}
>;
