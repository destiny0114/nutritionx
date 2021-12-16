/*
 * Project: nutritionx
 * Created Date: Thursday September 16th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 16th September 2021 3:17:35 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import {useEffect, useState} from "react";

export const useDebounce = <T extends {}>(value: T, delay: number): T => {
	const [debounceValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debounceValue;
};
