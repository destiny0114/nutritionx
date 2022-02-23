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
		"x-app-id": process.env.REACT_APP_APP_ID as string,
		"x-app-key": process.env.REACT_APP_APP_KEY as string,
	},
	responseType: "json",
};

export default axios.create(config);
