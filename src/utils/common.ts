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

export function dateFormat(inputDate: Date) {
	const today = inputDate;
	const yyyy = today.getFullYear();
	let mm = String(today.getMonth() + 1).padStart(2, "0");
	let dd = String(today.getDate()).padStart(2, "0");

	return dd + "/" + mm + "/" + yyyy;
}

export function sameDay(date1: Date, date2: Date) {
	return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
}

export function daysDiffrence(date1: Date, date2: Date) {
	const diff = Math.abs(date1.getTime() - date2.getTime());
	const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
	return diffDays;
}

export function weeksDifference(date1: Date, date2: Date) {
	return Math.floor((date1.getTime() - date2.getTime()) / (24 * 3600 * 1000 * 7));
}

export function getDaysbyWeek(weekAgo: number) {
	const daysOfWeek = 7;

	let weekDays: Date[] = new Array();
	let day: Date;
	let currentDate = new Date();

	currentDate.setDate(currentDate.getDate() - weekAgo * daysOfWeek);
	for (let i = 0; i < daysOfWeek; i++) {
		currentDate.setDate(currentDate.getDate() + 1);
		day = new Date(currentDate);
		weekDays.push(day);
	}
	return weekDays;
}

export function weekDates(from: Date, to: Date) {
	const diffDays = daysDiffrence(from, to);

	let datesArray: Date[] = new Array();
	let day: Date;
	let currentDate = from;

	for (let i = 0; i < diffDays; i++) {
		currentDate.setDate(currentDate.getDate() + 1);
		day = new Date(currentDate);
		datesArray.push(day);
	}
	return datesArray;
}

export function getDaysAgo(numOfDays: number) {
	const today = new Date();
	const daysAgo = new Date(today.getTime());

	daysAgo.setDate(today.getDate() - numOfDays);

	daysAgo.setHours(0, 0, 0, 0);

	return daysAgo;
}

export function datesBetween(daysAgo: number, daysLater: number) {
	const from = getDaysAgo(daysAgo);
	const end = getDaysAgo(daysLater);
	return [from, end];
}

export type Modify<T, R> = Omit<T, keyof R> & R;
