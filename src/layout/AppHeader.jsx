import { Menu, Dropdown, Layout, Avatar } from 'antd';
import Icon from '@cps/AntdIcon';

const { Header } = Layout;

export default function AppHeader(props) {
	let { menuClick, avatar, menuToggle, loginOut } = props;

	const menu = (
		<Menu>
			<Menu.ItemGroup title="用户设置">
				<Menu.Divider />
				<Menu.Item key="1-1">
					<Icon name="EditOutlined" /> 个人设置
				</Menu.Item>
				<Menu.Item key="1-2">
					<Icon name="RadiusSettingOutlined" /> 系统设置
				</Menu.Item>
			</Menu.ItemGroup>
			<Menu.Divider />
			<Menu.Item key="2">
				<span onClick={loginOut}>
					<Icon name="LogoutOutlined" /> 退出登录
				</span>
			</Menu.Item>
		</Menu>
	);

	return (
		<Header className="header">
			<div className="left">
				{menuToggle ? (
					<Icon
						name="MenuUnfoldOutlined"
						style={{ fontSize: '20px' }}
						onClick={menuClick}
					/>
				) : (
					<Icon
						name="MenuFoldOutlined"
						style={{ fontSize: '20px' }}
						onClick={menuClick}
					/>
				)}
			</div>
			<div className="right">
				<a
					className="github-link mr15"
					rel="noopener noreferrer"
					href="https://github.com/xiayoutao/react-admin-template"
					target="_blank"
				>
					<Icon
						name="GithubOutlined"
						style={{ fontSize: '30px', color: '#000' }}
					/>
				</a>
				<Dropdown overlay={menu} overlayStyle={{ width: '120px' }}>
					<Avatar src={avatar} style={{ cursor: 'pointer' }} />
				</Dropdown>
			</div>
		</Header>
	);
}
