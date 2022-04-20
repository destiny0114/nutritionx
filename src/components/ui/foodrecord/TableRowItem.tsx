/*
 * Project: nutritionx
 * Created Date: Wednesday December 22nd 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 22nd December 2021 3:39:36 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* types */
import {FoodRecord} from "../../../services";

interface TableRowItemProps {
	data: FoodRecord;
}

const TableRowItem: React.FC<TableRowItemProps> = ({data}) => {
	const {
		food_name,
		nutrient: {calories, carbs, proteins, fats},
	} = data;

	return (
		<tr>
			<td className="capitalize">{food_name}</td>
			<td>{Math.round(calories)}g</td>
			<td>{Math.round(carbs)}g</td>
			<td>{Math.round(proteins)}g</td>
			<td>{Math.round(fats)}g</td>
		</tr>
	);
};

export default TableRowItem;
