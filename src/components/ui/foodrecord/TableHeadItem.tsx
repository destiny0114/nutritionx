/*
 * Project: nutritionx
 * Created Date: Wednesday December 22nd 2021
 * Author: Keena Levine (ahhao0114@gmail.com)
 * -----
 * Last Modified: Wednesday, 22nd December 2021 3:35:05 pm
 * Modified By: Keena Levine (ahhao0114@gmail.com)
 * -----
 * MIT License
 * Copyright (c) 2021 Keena Levine
 */
interface TableHeadItemProps {
	item: string;
}

const TableHeadItem: React.FC<TableHeadItemProps> = ({item}) => {
	return <th title={item}>{item}</th>;
};

export default TableHeadItem;
