/*
 * Project: nutritionx
 * Created Date: Wednesday December 22nd 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 22nd December 2021 3:44:22 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* component */
import TableHeadItem from "./TableHeadItem";
import TableRowItem from "./TableRowItem";

interface FoodRecordTableProps {
	theadData: string[];
	tbodyData: {
		id: number;
		food: {
			name: string;
			calories: string;
			carbs: string;
			proteins: string;
			fats: string;
		};
	}[];
}

const FoodRecordTable: React.FC<FoodRecordTableProps> = ({theadData, tbodyData}) => {
	return (
		<table className="block w-full h-full">
			<thead className="font-poppins text-xs 2xl:text-lg text-purple-300 text-left text-opacity-50">
				<tr>
					{theadData.map((th) => (
						<TableHeadItem key={th} item={th} />
					))}
				</tr>
			</thead>
			<tbody className="overflow-y-scroll block w-full h-full font-poppins text-sm 2xl:text-lg text-white text-left">
				{tbodyData.map((data) => (
					<TableRowItem key={data.id} data={data.food} />
				))}
			</tbody>
		</table>
	);
};

export default FoodRecordTable;
