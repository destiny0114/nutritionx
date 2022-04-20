/*
 * Project: nutritionx
 * Created Date: Tuesday March 1st 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 1st March 2022 1:50:02 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */

import {useEffect, useRef} from "react";
import lottie from "lottie-web/build/player/lottie_light";

export default function useLottie<T extends Element>(animationData: unknown) {
	const ref = useRef<T>(null);

	useEffect(() => {
		if (!ref.current) return;

		lottie.loadAnimation({
			container: ref.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData: animationData,
		});
		return () => lottie.stop();
	}, [animationData]);

	return ref;
}
