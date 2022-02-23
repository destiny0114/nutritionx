/*
 * Project: nutritionx
 * Created Date: Tuesday December 28th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 28th December 2021 4:58:59 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* components */
import FoodMainInfo from "./FoodMainInfo";
import FoodCommonNutrient from "./FoodCommonNutrient";

/* illustration */
import {ReactComponent as ChoosingIllustration} from "../../../assets/sprites/food-choosing.svg";
/* hook */
import {useTypedSelector} from "../../../hook/useTypedSelector";

const FoodView: React.FC<{}> = () => {
	const foodSelected = useTypedSelector(({foodState: {selectedFood}}) => selectedFood);

	if (!foodSelected) return <ChoosingIllustration className="w-full h-full absolute top-0 left-0 object-fill" />;

	return (
		<div className="flex w-full h-full space-x-4">
			<div className="flex-grow-0 w-1/3 h-full">
				<FoodMainInfo food={foodSelected} />
			</div>
			<div className="flex-grow-0 w-full h-full justify-center items-center">
				<FoodCommonNutrient nutrients={foodSelected.full_nutrients} />
			</div>
		</div>
	);
};

export default FoodView;
