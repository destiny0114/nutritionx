/*
 * Project: nutritionx
 * Created Date: Tuesday December 7th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Tuesday, 7th December 2021 3:21:57 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* UI */
import {ReactComponent as AddIcon} from "../../assets/icons/add.svg";

const FoodList: React.FC<{}> = () => {
	return (
		<div className="w-full h-full bg-light-purple border-medium-slate-blue border-2 shadow-lg rounded-2xl p-5">
			<div id="food-list-container" className="w-full h-full flex flex-col space-y-4 overflow-y-scroll px-1 rounded-2xl">
				<section className=" bg-purple-300 shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2">
					<img className="w-16 h-16 object-cover rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" alt="tomato" />
					<div className="food-data mx-5 space-y-1">
						<p className="food-name font-poppins font-bold text-xl text-blue-900">Tomato</p>
						<p className="food-description font-poppins font-semibold text-xs text-purple-400">150kcal &middot; Serving-size: 1 &middot; 45g</p>
					</div>
					<button className="food-add-btn bg-medium-slate-blue ml-auto p-2 shadow-xl rounded-2xl">
						<AddIcon className="w-8 h-8" />
					</button>
				</section>
				<section className=" bg-purple-300 shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2">
					<img className="w-16 h-16 object-cover rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" alt="tomato" />
					<div className="food-data mx-5 space-y-1">
						<p className="food-name font-poppins font-bold text-xl text-blue-900">Tomato</p>
						<p className="food-description font-poppins font-semibold text-xs text-purple-400">150kcal &middot; Serving-size: 1 &middot; 45g</p>
					</div>
					<button className="food-add-btn bg-medium-slate-blue ml-auto p-2 shadow-xl rounded-2xl">
						<AddIcon className="w-8 h-8" />
					</button>
				</section>
				<section className=" bg-purple-300 shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2">
					<img className="w-16 h-16 object-cover rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" alt="tomato" />
					<div className="food-data mx-5 space-y-1">
						<p className="food-name font-poppins font-bold text-xl text-blue-900">Tomato</p>
						<p className="food-description font-poppins font-semibold text-xs text-purple-400">150kcal &middot; Serving-size: 1 &middot; 45g</p>
					</div>
					<button className="food-add-btn bg-medium-slate-blue ml-auto p-2 shadow-xl rounded-2xl">
						<AddIcon className="w-8 h-8" />
					</button>
				</section>
				<section className=" bg-purple-300 shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2">
					<img className="w-16 h-16 object-cover rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" alt="tomato" />
					<div className="food-data mx-5 space-y-1">
						<p className="food-name font-poppins font-bold text-xl text-blue-900">Tomato</p>
						<p className="food-description font-poppins font-semibold text-xs text-purple-400">150kcal &middot; Serving-size: 1 &middot; 45g</p>
					</div>
					<button className="food-add-btn bg-medium-slate-blue ml-auto p-2 shadow-xl rounded-2xl">
						<AddIcon className="w-8 h-8" />
					</button>
				</section>
				<section className=" bg-purple-300 shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2">
					<img className="w-16 h-16 object-cover rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" alt="tomato" />
					<div className="food-data mx-5 space-y-1">
						<p className="food-name font-poppins font-bold text-xl text-blue-900">Tomato</p>
						<p className="food-description font-poppins font-semibold text-xs text-purple-400">150kcal &middot; Serving-size: 1 &middot; 45g</p>
					</div>
					<button className="food-add-btn bg-medium-slate-blue ml-auto p-2 shadow-xl rounded-2xl">
						<AddIcon className="w-8 h-8" />
					</button>
				</section>
				<section className=" bg-purple-300 shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2">
					<img className="w-16 h-16 object-cover rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" alt="tomato" />
					<div className="food-data mx-5 space-y-1">
						<p className="food-name font-poppins font-bold text-xl text-blue-900">Tomato</p>
						<p className="food-description font-poppins font-semibold text-xs text-purple-400">150kcal &middot; Serving-size: 1 &middot; 45g</p>
					</div>
					<button className="food-add-btn bg-medium-slate-blue ml-auto p-2 shadow-xl rounded-2xl">
						<AddIcon className="w-8 h-8" />
					</button>
				</section>
				<section className=" bg-purple-300 shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2">
					<img className="w-16 h-16 object-cover rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" alt="tomato" />
					<div className="food-data mx-5 space-y-1">
						<p className="food-name font-poppins font-bold text-xl text-blue-900">Tomato</p>
						<p className="food-description font-poppins font-semibold text-xs text-purple-400">150kcal &middot; Serving-size: 1 &middot; 45g</p>
					</div>
					<button className="food-add-btn bg-medium-slate-blue ml-auto p-2 shadow-xl rounded-2xl">
						<AddIcon className="w-8 h-8" />
					</button>
				</section>
				<section className=" bg-purple-300 shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2">
					<img className="w-16 h-16 object-cover rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" alt="tomato" />
					<div className="food-data mx-5 space-y-1">
						<p className="food-name font-poppins font-bold text-xl text-blue-900">Tomato</p>
						<p className="food-description font-poppins font-semibold text-xs text-purple-400">150kcal &middot; Serving-size: 1 &middot; 45g</p>
					</div>
					<button className="food-add-btn bg-medium-slate-blue ml-auto p-2 shadow-xl rounded-2xl">
						<AddIcon className="w-8 h-8" />
					</button>
				</section>
				<section className=" bg-purple-300 shadow-xl rounded-2xl w-full h-auto inline-flex items-center px-4 py-2">
					<img className="w-16 h-16 object-cover rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" alt="tomato" />
					<div className="food-data mx-5 space-y-1">
						<p className="food-name font-poppins font-bold text-xl text-blue-900">Tomato</p>
						<p className="food-description font-poppins font-semibold text-xs text-purple-400">150kcal &middot; Serving-size: 1 &middot; 45g</p>
					</div>
					<button className="food-add-btn bg-medium-slate-blue ml-auto p-2 shadow-xl rounded-2xl">
						<AddIcon className="w-8 h-8" />
					</button>
				</section>
			</div>
		</div>
	);
};

export default FoodList;
