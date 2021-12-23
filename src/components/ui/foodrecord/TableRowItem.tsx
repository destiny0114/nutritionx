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
interface TableRowItemProps {
	data: {
		name: string;
		calories: string;
		carbs: string;
		proteins: string;
		fats: string;
	};
}

const TableRowItem: React.FC<TableRowItemProps> = ({data: {name, calories, carbs, proteins, fats}}) => {
	return (
		<tr>
			<td>{name}</td>
			<td>{calories}</td>
			<td>{carbs}</td>
			<td>{proteins}</td>
			<td>{fats}</td>
		</tr>
	);
};

export default TableRowItem;
