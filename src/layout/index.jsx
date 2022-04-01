import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { menuToggleAction } from '@/store/actionCreators';
import AppHeader from './AppHeader.jsx';
import AppAside from './AppAside.jsx';
import menu from './menu';
import avatarPic from '@/assets/user.jpg';

import '@/styles/layout.scss';

function AppLayout(props) {
	const { menuClick, menuToggle } = props;
	const [show] = useState(true);
	const [avatar] = useState(avatarPic);

	return (
		<div className="app">
			<AppAside menuToggle={menuToggle} menu={menu} avatar={avatar} />
			<Layout
				style={{
					marginLeft: menuToggle ? '80px' : '200px',
					minHeight: '100vh',
				}}>
				<AppHeader
					show={show}
					avatar={avatar}
					menuToggle={menuToggle}
					menuClick={menuClick}
					loginOut={loginOut}
				/>
				<div className="content">
					<Outlet />
				</div>
			</Layout>
		</div>
	);
}

function loginOut() {
	localStorage.clear();
	this.props.history.push('/login');
}

const mapStateToProps = (state) => ({
	menuToggle: state.menuToggle,
});

const mapDispatchToProps = (dispatch) => ({
	menuClick() {
		dispatch(menuToggleAction());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
