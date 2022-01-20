/*
 * Project: nutritionx
 * Created Date: Thursday September 2nd 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 2nd September 2021 3:01:36 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* layout */
import FoodExplorer from "../layout/explorer/FoodExplorer";

const Explorer: React.FC<{}> = () => {
	return (
		<div className="w-full h-full select-none">
			<FoodExplorer />
		</div>
	);
};

export default Explorer;
