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
/* eslint-disable @typescript-eslint/no-array-constructor */
import dayjs from "dayjs";

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

export function dateFormat(inputDate: Date | string) {
	return dayjs(inputDate).format("YYYY-MM-DD");
}

export function sameDay(date1: string, date2: string) {
	return date1 === date2;
}

export function daysDiffrence(date1: string, date2: string) {
	return dayjs(date2).diff(date1, "days");
}

export function weekDates(from: string, to: string) {
	const diffDays = daysDiffrence(from, to);

	let datesArray: Date[] = new Array();
	let day: Date;
	let currentDate = dayjs(from);

	for (let i = 0; i < diffDays; i++) {
		day = currentDate.add(i + 1, "day").toDate();
		datesArray.push(day);
	}
	return datesArray;
}

export function getDaysAgo(numOfDays: number) {
	return dateFormat(dayjs().subtract(numOfDays, "day").toDate());
}

export function datesBetween(daysAgo: number, daysLater: number) {
	const from = getDaysAgo(daysAgo);
	const to = getDaysAgo(daysLater);
	return [from, to];
}

export type Modify<T, R> = Omit<T, keyof R> & R;
