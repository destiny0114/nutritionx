/*
 * Project: nutritionx
 * Created Date: Friday January 28th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Friday, 28th January 2022 3:49:57 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {combineReducers} from "redux";
/* reducers */
import foodReducer from "./foodReducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
	foodState: foodReducer,
	userState: userReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
