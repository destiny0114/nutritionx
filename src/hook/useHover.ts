/*
 * Project: nutritionx
 * Created Date: Thursday October 21st 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 21st October 2021 3:04:24 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
import {useState, useMemo} from "react";

export type EventHandler = {
	onMouseOver(): void;
	onMouseOut(): void;
};

export default function useHover(): [focusBar: boolean, handler: EventHandler] {
	const [focusBar, setFocusBar] = useState(false);
	const eventHandlers = useMemo(
		() => ({
			onMouseOver() {
				setFocusBar(true);
			},
			onMouseOut() {
				setFocusBar(false);
			},
		}),
		[]
	);
	return [focusBar, eventHandlers];
}
