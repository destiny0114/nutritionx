/*
 * Project: nutritionx
 * Created Date: Thursday February 3rd 2022
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Thursday, 3rd February 2022 4:00:49 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2022 Keena Levine
 */
import {useMemo} from "react";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
/* action-creators */
import {actionCreators} from "../services";

export default function useAction() {
	const dispatch = useDispatch();
	return useMemo(() => bindActionCreators(actionCreators, dispatch), [dispatch]);
}
