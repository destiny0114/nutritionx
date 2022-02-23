/*
 * Project: nutritionx
 * Created Date: Monday February 21st 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Monday, 21st February 2022 2:48:55 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */

import {useEffect, useRef} from "react";

export default function useOuterClick<T extends Element>(callback: () => void) {
	const ref = useRef<T>(null);

	useEffect(() => {
		const handleOuterClick = (e: MouseEvent) => {
			if (ref.current && e.target && ref.current.contains(e.target as Node)) return;
			callback();
		};

		document.addEventListener("click", handleOuterClick, {capture: true});

		return () => document.removeEventListener("click", handleOuterClick, {capture: true});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return ref;
}
