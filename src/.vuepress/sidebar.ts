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
	'/interview/': [
		{
			text: '前端基础',
			children: [
				{
					text: 'JavaScript 相关',
					icon: 'javascript',
					prefix: 'js/',
					children: 'structure',
					collapsible: true
				},
				{
					text: 'HTML 相关',
					icon: 'code',
					prefix: 'html/',
					children: 'structure',
					collapsible: true
				},
				{
					text: 'CSS 相关',
					icon: 'palette',
					prefix: 'css/',
					children: 'structure',
					collapsible: true
				},
				{
					text: 'HTTP 相关',
					icon: 'http',
					prefix: 'http/',
					children: 'structure',
					collapsible: true
				},
				{
					text: 'NodeJS 相关',
					icon: 'nodeJS',
					prefix: 'nodejs/',
					children: 'structure',
					collapsible: true
				}
			],
			collapsible: false
		},
		{
			text: '前端框架',
			children: [
				{
					text: 'React 相关',
					icon: 'react',
					prefix: 'react/',
					children: 'structure',
					collapsible: true
				},
				{
					text: 'Vue 相关',
					icon: 'vue',
					prefix: 'vue/',
					children: 'structure',
					collapsible: true
				}
			],
			collapsible: false
		},
		{
			text: '前端工程化',
			children: [
				{
					text: '构建工具',
					icon: 'waline',
					prefix: 'webpack/',
					children: 'structure',
					collapsible: true
				},
				{
					text: '版本管理',
					icon: 'git',
					prefix: 'git/',
					children: 'structure',
					collapsible: true
				},
				{
					text: '前端监控',
					icon: 'safe',
					prefix: 'engineering/',
					children: 'structure',
					collapsible: true
				}
			],
			collapsible: false
		},
		{
			text: '数据结构与算法',
			children: [
				{
					text: '算法笔记',
					link: 'https://2xiao.github.io/leetcode-js/book/',
					target: '_self'
				},
				{
					text: 'LeetCode 题解',
					link: 'https://2xiao.github.io/leetcode-js/problem/',
					target: '_self'
				},
				{
					text: '剑指 Offer',
					link: 'https://2xiao.github.io/leetcode-js/offer/',
					target: '_self'
				},
				{
					text: '剑指 Offer II',
					link: 'https://2xiao.github.io/leetcode-js/offer2/',
					target: '_self'
				},
				{
					text: '程序员面试金典',
					link: 'https://2xiao.github.io/leetcode-js/interview/',
					target: '_self'
				}
			],
			collapsible: true
		},
		{
			text: '系统设计',
			prefix: 'system_design/',
			children: 'structure',
			collapsible: true
		},
		{
			text: '行为面试',
			prefix: 'behavior/',
			children: 'structure',
			collapsible: true
		},
		{
			text: '最新技术趋势',
			prefix: 'trend/',
			children: 'structure',
			collapsible: true
		}
	]
});
