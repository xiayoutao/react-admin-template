import loadable from '@/tools/loadable';

export const IndexView = loadable(() => import(`@/views/index`));
export const ButtonView = loadable(() => import(`@/views/button`));
export const IconView = loadable(() => import(`@/views/icon`));

export default [
	{
		name: '首页',
		path: '/index',
		exact: true,
		component: IndexView,
	},
	{
		name: '按钮',
		path: '/button',
		exact: false,
		component: ButtonView,
	},
	{
		name: '图标',
		path: '/icon',
		exact: false,
		component: IconView,
	},
];
