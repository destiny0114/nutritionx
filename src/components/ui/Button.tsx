/*
 * Project: nutritionx
 * Created Date: Wednesday September 8th 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 8th September 2021 4:48:35 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
/* util */
import {classNames} from "../../utils/common";

interface ButtonProps {
	icon?: React.ReactNode;
	text: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({icon, text, onClick, className}) => {
	return (
		<button className={classNames(className, "font-poppins text-white rounded-2xl items-center")} onClick={onClick}>
			{icon}
			<span>{text}</span>
		</button>
	);
};

export default Button;
