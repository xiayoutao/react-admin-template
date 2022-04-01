import { Layout } from 'antd';
import CustomMenu from '@cps/CustomMenu/index.jsx';
import Icon from '@cps/AntdIcon';

const { Sider } = Layout;

export default function AppAside(props) {
	let { menuToggle, menu } = props;
	return (
		<Sider className="aside" collapsed={menuToggle}>
			<div className="logo">
				<a
					rel="noopener noreferrer"
					href="https://github.com/xiayoutao"
					target="_blank">
					<Icon
						name="GithubOutlined"
						style={{ fontSize: '36px', color: '#fff' }}
					/>
				</a>
			</div>
			<CustomMenu menu={menu}></CustomMenu>
		</Sider>
	);
}
