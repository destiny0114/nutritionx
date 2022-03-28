/*
 * Project: nutritionx
 * Created Date: Wednesday March 2nd 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 2nd March 2022 3:28:49 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
/* hook */
import useLottie from "../../hook/useLottie";
/* lottie */
import Spinner from "../../assets/lotties/spinner.json";

const LottieSpinner: React.FC = () => {
	const ref = useLottie<HTMLDivElement>(Spinner);

	return (
		<div className="flex w-full h-full justify-center items-center">
			<div ref={ref} className="w-60 h-60"></div>;
		</div>
	);
};

export default LottieSpinner;
