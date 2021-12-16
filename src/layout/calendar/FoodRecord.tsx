/*
 * Project: nutritionx
 * Created Date: Tuesday November 30th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 30th November 2021 3:07:45 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
const FoodRecord: React.FC<{}> = () => {
	return (
		<div className="flex flex-col w-full h-full bg-medium-slate-blue shadow-lg rounded-2xl p-5 overflow-hidden">
			<p className="font-poppins text-sm text-white">You had</p>
			<div id="food-record-container" className="w-full h-full overflow-hidden">
				<table className="block w-full h-full">
					<thead className="font-poppins text-xs text-purple-300 text-left text-opacity-50">
						<tr>
							<th>Food</th>
							<th>Calories</th>
							<th>Carbs</th>
							<th>Proteins</th>
							<th>Fats</th>
						</tr>
					</thead>
					<tbody className="overflow-y-scroll block w-full h-full font-poppins text-sm text-white text-left">
						<tr>
							<td>Burger</td>
							<td>150kcal</td>
							<td>50g</td>
							<td>12g</td>
							<td>6g</td>
						</tr>
						<tr>
							<td>Burger</td>
							<td>150kcal</td>
							<td>50g</td>
							<td>12g</td>
							<td>6g</td>
						</tr>
						<tr>
							<td>Burger</td>
							<td>150kcal</td>
							<td>50g</td>
							<td>12g</td>
							<td>6g</td>
						</tr>
						<tr>
							<td>Burger</td>
							<td>150kcal</td>
							<td>50g</td>
							<td>12g</td>
							<td>6g</td>
						</tr>
						<tr>
							<td>Burger</td>
							<td>150kcal</td>
							<td>50g</td>
							<td>12g</td>
							<td>6g</td>
						</tr>
						<tr>
							<td>Burger</td>
							<td>150kcal</td>
							<td>50g</td>
							<td>12g</td>
							<td>6g</td>
						</tr>
						<tr>
							<td>Burger</td>
							<td>150kcal</td>
							<td>50g</td>
							<td>12g</td>
							<td>6g</td>
						</tr>
						<tr>
							<td>Burger</td>
							<td>150kcal</td>
							<td>50g</td>
							<td>12g</td>
							<td>6g</td>
						</tr>
						<tr>
							<td>Burger</td>
							<td>150kcal</td>
							<td>50g</td>
							<td>12g</td>
							<td>6g</td>
						</tr>
						<tr>
							<td>Burger</td>
							<td>150kcal</td>
							<td>50g</td>
							<td>12g</td>
							<td>6g</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default FoodRecord;
