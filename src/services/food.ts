/*
 * Project: nutritionx
 * Created Date: Tuesday January 25th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 25th January 2022 3:27:03 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
export interface Food {
	food_name: string;
	serving_unit: string;
	tag_name?: string;
	serving_qty: number;
	serving_weight_grams: number;
	common_type?: string | null;
	tag_id?: string | null;
	full_nutrients: {
		attr_id: number;
		value: number;
	}[];
	photo: {
		thumb: string;
		highres?: string | null;
	};
	locale?: string | null;
}
