import * as AllIcons from '@ant-design/icons';

const Icon = ({ name, ...props }) => {
	if (!name) return <span></span>;
	const Comp = AllIcons[name]; // 这里写成 any 的原因有机会再开一篇单独来解释
	if (!Comp) return <span></span>;
	return <Comp {...props} />;
};

export default Icon;
