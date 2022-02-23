/*
 * Project: nutritionx
 * Created Date: Thursday February 3rd 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 3rd February 2022 1:48:41 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {useSelector, TypedUseSelectorHook} from "react-redux";
/* root state */
import {RootState} from "../services";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
