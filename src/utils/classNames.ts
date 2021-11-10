/*
 * Project: nutritionx
 * Created Date: Thursday September 9th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 9th September 2021 2:29:32 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
export function classNames(...classes: (false | null | undefined | string)[]) {
	return classes.filter(Boolean).join(" ");
}
