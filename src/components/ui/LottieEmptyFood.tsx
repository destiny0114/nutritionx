/*
 * Project: nutritionx
 * Created Date: Monday February 28th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Monday, 28th February 2022 3:11:08 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
/* hook */
import useLottie from "../../hook/useLottie";
/* lottie */
import ChoosingIllustration from "../../assets/lotties/healthy-or-junk-food.json";

const LottieEmptyFood: React.FC = () => {
	const ref = useLottie<HTMLDivElement>(ChoosingIllustration);

	return <div ref={ref} className="w-full h-full absolute top-0 left-0 object-fill"></div>;
};

export default LottieEmptyFood;
