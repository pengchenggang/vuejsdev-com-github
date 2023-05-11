import { defineConfig } from "vitepress"
import nav from './nav.js'
import sidebar from './sidebar'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))
const build = argv.buildGitee || false
const baseBuild = build ? '/vuejsdev-com/' : '/'
export default defineConfig({
	base: baseBuild,
	// 全局设置
	lang: 'zh-CH',
	lastUpdated: true,
	markdown: {
		// toc: { level: [2, 3] },
		theme: 'material-palenight',
		lineNumbers: true
	},

	// Head及SEO设置
	head: [
		[
			"meta",
			{
				name: "viewport",
				content:
					"width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
			},
		],
		["meta", { name: "keywords", content: "VuejsDev的Blog" }],
		["link", { rel: "icon", href: "/favicon.ico" }],
	],

	// 浏览器Tab标签栏文本：左侧
	title: 'VuejsDev\'s Blog',
	// 浏览器默认标签栏文本：右侧
	titleTemplate: 'vuejsdev.com',

	// 主题配置
	themeConfig: {
		// 顶部导航栏设置：左侧
		logo: '/avatar.png',
		siteTitle: 'VuejsDev',
		algolia: {
			appId: 'HWP0O1R62E',
			apiKey: '85c467819e5b8a1d8ff7fafd0a8a986b',
			indexName: 'vuejsdev',
		},
		// 顶部导航栏设置：右侧
		nav,
		// 侧边栏配置
		sidebar,
		// 页脚
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright &copy; Reciter VuejsDev 津ICP备2022005920号'
		}
	},
})
