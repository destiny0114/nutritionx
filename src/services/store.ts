/*
 * Project: nutritionx
 * Created Date: Friday January 28th 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Friday, 28th January 2022 4:31:40 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
/* reducers */
import reducers from "./reducers";
/* middleware */
import {persistMiddleware} from "./middlewares/persist-middleware";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enchancer = composeEnhancers(applyMiddleware(thunk, persistMiddleware));

export const store = createStore(reducers, {}, enchancer);
