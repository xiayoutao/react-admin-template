import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import Icon from '@cps/AntdIcon';

function CustomMenu(props) {
	const location = useLocation();
	const [openKeys, setOpenKeys] = useState([]);
	const [selectedKeys, setSelectedKeys] = useState([]);

	useEffect(() => {
		const { pathname } = location;
		setOpenKeys(getOpenKeys(pathname));
		setSelectedKeys([pathname]);
	}, [location]);

	// 处理 pathname
	const getOpenKeys = (string) => {
		let newStr = '',
			newArr = [],
			arr = string.split('/').map((i) => '/' + i);
		for (let i = 1; i < arr.length - 1; i++) {
			newStr += arr[i];
			newArr.push(newStr);
		}
		return newArr;
	};

	// 只展开一个 SubMenu
	const onOpenChange = (openKeys) => {
		if (openKeys.length === 0 || openKeys.length === 1) {
			setOpenKeys(openKeys);
			return;
		}

		// 最新展开的 SubMenu
		const latestOpenKey = openKeys[openKeys.length - 1];

		// 这里与定义的路由规则有关
		if (latestOpenKey.includes(openKeys[0])) {
			setOpenKeys(openKeys);
		} else {
			setOpenKeys([latestOpenKey]);
		}
	};

	function renderMenuItem({ key, icon, title }) {
		return (
			<Menu.Item key={key} icon={icon ? <Icon name={icon} /> : null}>
				<Link to={key}>{title}</Link>
			</Menu.Item>
		);
	}

	// 循环遍历数组中的子项 subs ，生成子级 menu
	function renderSubMenu({ key, icon, title, subs }) {
		return (
			<Menu.SubMenu
				key={key}
				icon={icon ? <Icon name={icon} /> : null}
				title={title}>
				{subs &&
					subs.map((item) => {
						return item.subs && item.subs.length > 0
							? renderSubMenu(item)
							: renderMenuItem(item);
					})}
			</Menu.SubMenu>
		);
	}

	return (
		<Menu
			mode="inline"
			theme="dark"
			openKeys={openKeys}
			selectedKeys={selectedKeys}
			onClick={({ key }) => setSelectedKeys([key])}
			onOpenChange={onOpenChange}>
			{props.menu &&
				props.menu.map((item) => {
					return item.subs && item.subs.length > 0
						? renderSubMenu(item)
						: renderMenuItem(item);
				})}
		</Menu>
	);
}

export default CustomMenu;
