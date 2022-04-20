/*
 * Project: nutritionx
 * Created Date: Wednesday January 26th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 26th January 2022 3:32:38 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import axios, {AxiosRequestConfig} from "axios";

const config: AxiosRequestConfig = {
	baseURL: "https://trackapi.nutritionix.com/v2/",
	headers: {
		"x-app-id": String(process.env.NUTRITIONX_APP_ID),
		"x-app-key": String(process.env.NUTRITIONX_APP_KEY),
	},
	responseType: "json",
};

export default axios.create(config);
