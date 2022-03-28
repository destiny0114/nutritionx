/*
 * Project: nutritionx
 * Created Date: Friday March 18th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Friday, 18th March 2022 1:37:48 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import localforage from "localforage";

const config: LocalForageOptions = {
	driver: localforage.INDEXEDDB,
	name: "nutritionx",
	version: 1.0,
	storeName: "data",
};

export default localforage.createInstance(config);
