import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
	'/my-react/': 'structure',
	'/my-vue/': [
		'',
		{
			text: '整体架构',
			children: ['1', '2'],
			collapsible: false
		},
		{
			text: '响应式原理',
			children: ['3', '4', '5', '6', '7'],
			collapsible: false
		},
		{
			text: '渲染原理',
			children: ['8', '9'],
			collapsible: false
		},
		{
			text: 'Diff 算法原理',
			children: ['10'],
			collapsible: false
		},
		{
			text: '组件渲染原理',
			children: ['11', '12', '13', '14', '15', '16'],
			collapsible: false
		},
		{
			text: '其他实现原理',
			children: ['17', '18', '19', '20'],
			collapsible: false
		},
		{
			text: '模板编译原理',
			children: ['21', '22', '23', '24'],
			collapsible: false
		}
	],
	'/interview/': 'structure'
});
