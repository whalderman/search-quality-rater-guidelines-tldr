module.exports = {
	base: '/test/warren/',
	locales: {
		// The key is the path for the locale to be nested under.
		// As a special case, the default locale can use '/' as its path.
		'/': {
			lang: 'en' // html lang property
			// title: 'Search Quality Rater Guidelines', // title tag append, highly duplicative
			// description: 'Learn what Google looks for in high-quality web pages.', // site description
		},
		'/ja/': {
			lang: 'ja'
			// title: '品質評価ガイドライン',
			// description: 'Googleが高品質のWebページで何を求めているのかを学びます。',
		}
	},
	head: [
		['link', { rel: 'icon', href: `/img/BCJロゴ.png` }],
		['meta', { name: 'keywords', content: 'this tag is a waste of time, you know'}]
	],
	plugins: [
		['@vuepress/google-analytics', {
			ga: 'UA-27119256-1'
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
		},
		extendMarkdown: md => {
			md.use(require('markdown-it-abbr'));
			md.use(require('markdown-it-deflist'));
		}
	},
	themeConfig: {
		logo: '/img/BCJワイドロゴ.svg',
		repo: 'thewarrman/sqrg-bcj',
		docsBranch: 'main',
		editLinks: true,
		docsDir: 'docs',
		locales: {
			'/': {
				label: 'English', // label for this locale in the language dropdown
				selectText: '🌐', // text for the language dropdown
				editLinkText: 'Edit on GitHub', // text for the edit-on-github link
				lastUpdated: 'Last Updated',
				nav: require('./nav/en'),
				sidebar: require('./sidebar/en'),
				sidebarDepth: 1
			},
			'/ja/': {
				label: '日本語',
				selectText: '🌐',
				editLinkText: 'GitHubで編集',
				lastUpdated: '前回更新',
				nav: require('./nav/ja'),
				sidebar: require('./sidebar/ja'),
				sidebarDepth: 1
			}
		}
	}
}
