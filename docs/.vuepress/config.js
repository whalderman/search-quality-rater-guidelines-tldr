module.exports = {
	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use '/' as its path.
		'/': {
			lang: 'en', // html lang property
			title: 'Quality Rater Guidelines', // title tag suffix
			description: 'Learn what Google looks for in high-quality web pages.', // site description
		},
		'/ja/': {
			lang: 'ja',
			title: '品質評価ガイドライン',
			description: 'Googleが高品質のWebページで何を求めているのかを学びます。',
		}
	},
	head: [
		['link', { rel: 'icon', href: `/logo.png` }],
		// ['link', { rel: 'manifest', href: '/manifest.json' }],
		['meta', { name: 'theme-color', content: '#0071ba' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'default' }],
		// ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
		// ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#0071ba' }],
		// ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
		['meta', { name: 'msapplication-TileColor', content: '#0071ba' }]
	],
	plugins: [
		['@vuepress/google-analytics', {
			ga: undefined
		}],
		['@vuepress/last-updated', {
			transformer: (timestamp, lang) => {
				const moment = require('moment');
				moment.locale(lang);
				return moment(timestamp).fromNow();
			}
		}]
	],
	evergreen: true, // target newer browsers only
	markdown: {
		anchor: {
			permalink: true,
			permalinkBefore: true,
			permalinkSymbol: '📑'
		}
	},
	themeConfig: {
		repo: 'thewarrman/qrg-bci',
		editLinks: true,
		docsDir: 'docs',
		locales: {
			'/': {
				label: 'English', // label for this locale in the language dropdown
				selectText: '🌐Languages', // text for the language dropdown
				editLinkText: 'Edit on GitHub', // text for the edit-on-github link
				lastUpdated: 'Updated',
				serviceWorker: { // config for Service Worker
					updatePopup: {
						message: "New content is available.",
						buttonText: "Refresh"
					}
				},
				nav: require('./nav/en'),
				sidebar: require('./sidebar/en'),
				sidebarDepth: 1
			},
			'/ja/': {
				editLinkText: 'GitHubで編集',
				selectText: '🌐言語',
				label: '日本語',
				lastUpdated: '更新日',
				serviceWorker: {
					updatePopup: {
						message: "新しいコンテンツが利用可能です。",
						buttonText: "更新する"
					}
				},
				nav: require('./nav/ja'),
				sidebar: require('./sidebar/ja'),
				sidebarDepth: 1
			}
		}
	}
}
