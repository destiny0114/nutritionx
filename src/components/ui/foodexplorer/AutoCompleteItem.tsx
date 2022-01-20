/*
 * Project: nutritionx
 * Created Date: Wednesday January 12th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 12th January 2022 5:00:48 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
const AutoCompleteItem: React.FC<{}> = () => {
	return (
		<div className="group hover:bg-medium-slate-blue hover:shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2 cursor-pointer">
			<img className="w-14 h-14 2xl:w-24 2xl:h-24 object-cover rounded-2xl" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" alt="tomato" />
			<div className="mx-5">
				<p className="font-poppins font-bold text-lg 2xl:text-3xl group-hover:text-white text-black truncate max-w-md">Tomatoooooooooooooooooooooooooooooooooooooooooooooooooooooooooo</p>
				<p className="font-poppins font-medium text-xs 2xl:text-lg group-hover:text-purple-300 text-gray-400 truncate max-w-md">1 medium whole (2-3/5\" dia) &middot; 123g</p>
			</div>
			<p className="font-poppins font-medium text-sm 2xl:text-lg group-hover:text-purple-300 text-gray-400 ml-auto">123 calories</p>
		</div>
	);
};

export default AutoCompleteItem;
