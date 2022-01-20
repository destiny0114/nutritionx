/*
 * Project: nutritionx
 * Created Date: Wednesday January 19th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 19th January 2022 3:10:07 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {useState, useEffect} from "react";

function getWindowDimensions() {
	const {innerWidth, innerHeight} = window;

	return {width: innerWidth, height: innerHeight};
}

export default function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		const resizeHandler = () => setWindowDimensions(getWindowDimensions());

		window.addEventListener("resize", resizeHandler);
		return () => window.removeEventListener("resize", resizeHandler);
	}, []);

	return windowDimensions;
}
