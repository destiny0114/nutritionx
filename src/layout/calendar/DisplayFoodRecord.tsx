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
/* component */
import FoodRecordTable from "../../components/ui/foodrecord/FoodRecordTable";
/* hook */
import {useTypedSelector} from "../../hook/useTypedSelector";

const theadData = ["Food", "Calories", "Carbs", "Proteins", "Fat"];

const DisplayFoodRecord: React.FC<{}> = () => {
	const recordList = useTypedSelector(({userState: {foodRecordSelected}}) => foodRecordSelected);

	if (typeof recordList === undefined || !recordList.length)
		return <p className="flex w-full h-full justify-center items-center font-poppins text-base 2xl:text-xl text-center text-white opacity-25">Please Add a Record</p>;

	return (
		<div className="flex flex-col w-full h-full overflow-hidden">
			<p className="font-poppins text-sm 2xl:text-xl text-white">You had</p>
			<div id="food-record-container" className="w-full h-full overflow-hidden">
				<FoodRecordTable theadData={theadData} tbodyData={recordList} />
			</div>
		</div>
	);
};

export default DisplayFoodRecord;
