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
const FoodView: React.FC<{}> = () => {
	return (
		<div className="flex w-full h-full p-5 space-x-4 bg-light-purple border-medium-slate-blue border-2 shadow-lg rounded-2xl">
			<div className="flex-none w-1/3">
				<div className="w-full h-auto inline-flex space-x-5 mb-10 2xl:mb-16">
					<img className="w-28 h-28 2xl:w-32 2xl:h-32 object-cover rounded-full" src="https://nix-tag-images.s3.amazonaws.com/1640_thumb.jpg" alt="chocolate cake" />
					<div className="self-center">
						<p className="font-poppins font-bold text-xl 2xl:text-4xl break-words whitespace-pre-wrap mb-1">1 cup of Chocolate Cake</p>
						<p className="font-poppins text-xs 2xl:text:3xl opacity-50">Serving Size: 1 cup (227g)</p>
					</div>
				</div>

				<div className="flex justify-between mx-3 my-3 2xl:my-8">
					<p className="font-poppins font-medium 2xl:text-2xl">Calories</p>
					<p className="font-poppins font-medium 2xl:text-2xl">467 kcal</p>
				</div>

				<div className="flex justify-between mx-3 my-3 2xl:my-8">
					<p className="font-poppins font-medium 2xl:text-2xl">Total Fat</p>
					<p className="font-poppins font-medium 2xl:text-2xl">28 g</p>
				</div>

				<div className="flex justify-between mx-3 my-3 2xl:my-8">
					<p className="font-poppins font-medium 2xl:text-2xl">Saturated Fat</p>
					<p className="font-poppins font-medium 2xl:text-2xl">5 g</p>
				</div>

				<div className="flex justify-between mx-3 my-3 2xl:my-8">
					<p className="font-poppins font-medium 2xl:text-2xl">Cholesterol</p>
					<p className="font-poppins font-medium 2xl:text-2xl">143 mg</p>
				</div>

				<div className="flex justify-between mx-3 my-3 2xl:my-8">
					<p className="font-poppins font-medium 2xl:text-2xl">Sodium</p>
					<p className="font-poppins font-medium 2xl:text-2xl">138 mg</p>
				</div>

				<div className="flex justify-between mx-3 my-3 2xl:my-8">
					<p className="font-poppins font-medium 2xl:text-2xl">Total Carbohydrate</p>
					<p className="font-poppins font-medium 2xl:text-2xl">0 g</p>
				</div>

				<div className="flex justify-between mx-3 my-3 2xl:my-8">
					<p className="font-poppins font-medium 2xl:text-2xl">Dietary Fiber</p>
					<p className="font-poppins font-medium 2xl:text-2xl">0 g</p>
				</div>

				<div className="flex justify-between mx-3 my-3 2xl:my-8">
					<p className="font-poppins font-medium 2xl:text-2xl">Sugars</p>
					<p className="font-poppins font-medium 2xl:text-2xl">0 g</p>
				</div>

				<div className="flex justify-between mx-3 my-3 2xl:my-8">
					<p className="font-poppins font-medium 2xl:text-2xl">Protein</p>
					<p className="font-poppins font-medium 2xl:text-2xl">50 g</p>
				</div>

				<div className="flex justify-between mx-3 my-3 2xl:my-8">
					<p className="font-poppins font-medium 2xl:text-2xl">Potassium</p>
					<p className="font-poppins font-medium 2xl:text-2xl">871 mg</p>
				</div>
			</div>
			<div className="flex-grow-0 w-full h-full">
				<div id="grid-container">
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Vitamin A</p>
						<p className="font-poppins text-sm 2xl:text-base">871 iu</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Thiamine</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Riboflavin</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Niacin</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Pantothenic acid</p>
						<p className="font-poppins text-sm 2xl:text-base">50871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Vitamin B</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Biotin</p>
						<p className="font-poppins text-sm 2xl:text-base">871 µg</p>
					</div>

					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Folate</p>
						<p className="font-poppins text-sm 2xl:text-base">871 µg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Cobalamin</p>
						<p className="font-poppins text-sm 2xl:text-base">871 µg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Vitamin C</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Vitamin D</p>
						<p className="font-poppins text-sm 2xl:text-base">871 iu</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Vitamin E</p>
						<p className="font-poppins text-sm 2xl:text-base">871 iu</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Vitamin K</p>
						<p className="font-poppins text-sm 2xl:text-base">871 µg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Calcium</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Chloride</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Chromium</p>
						<p className="font-poppins text-sm 2xl:text-base">871 µg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Copper</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Iodine</p>
						<p className="font-poppins text-sm 2xl:text-base">871 µg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Iron</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Magnesium</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Manganese</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>

					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Molybdenum</p>
						<p className="font-poppins text-sm 2xl:text-base">871 µg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Phosphorus</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Selenium</p>
						<p className="font-poppins text-sm 2xl:text-base">871 µg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Sodium</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
					<div className="flex justify-between mx-3 my-3 2xl:my-6">
						<p className="font-poppins text-sm 2xl:text-base">Zinc</p>
						<p className="font-poppins text-sm 2xl:text-base">871 mg</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodView;
