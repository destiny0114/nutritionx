/*
 * Project: nutritionx
 * Created Date: Thursday January 27th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 27th January 2022 5:49:05 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
export function classNames(...classes: (false | null | undefined | string)[]) {
	return classes.filter(Boolean).join(" ");
}

export function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message;
	return String(error);
}

export function splitArray<T>(arr: T[], callback: (index: number, item?: T, arr?: T[]) => boolean) {
	if (typeof arr === undefined || !arr.length) return [];

	return arr.reduce(
		([arr1, arr2], item, index, arr) => {
			if (callback(index, item, arr) === false) return [arr1, [...arr2, item]];
			return [[...arr1, item], arr2];
		},
		[[], []] as T[][]
	);
}

export function capitalize(input: string) {
	return input.charAt(0).toUpperCase() + input.slice(1);
}

export function getToday(inputDate: Date) {
	const today = inputDate;
	const yyyy = today.getFullYear();
	let mm = String(today.getMonth() + 1).padStart(2, "0");
	let dd = String(today.getDate()).padStart(2, "0");

	return dd + "/" + mm + "/" + yyyy;
}

export type Modify<T, R> = Omit<T, keyof R> & R;
