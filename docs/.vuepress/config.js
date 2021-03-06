module.exports = {
  base: '/docs/',
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en' // html lang property
    },
    '/ja/': {
      lang: 'ja'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/img/BCJロゴ.png` }],
    ['meta', { name: 'keywords', content: 'don\'t waste your time with meta keywords'}]
  ],
  plugins: [
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
    // repo: 'thewarrman/search-quality-rater-guidelines-tldr',
    // docsBranch: 'main',
    // editLinks: true,
    // docsDir: 'docs',
    locales: {
      '/': {
        label: 'English', // label for this language in the 🌐 dropdown
        selectText: '🌐',
        editLinkText: 'Edit this page on GitHub', // text for the edit-on-github link
        // lastUpdated: 'Updated',
        nav: require('./nav/en'),
        sidebar: require('./sidebar/en'),
        sidebarDepth: 1
      },
      '/ja/': {
        label: '日本語',
        selectText: '🌐',
        editLinkText: 'GitHubでこのページを編集',
        // lastUpdated: '前回更新',
        nav: require('./nav/ja'),
        sidebar: require('./sidebar/ja'),
        sidebarDepth: 1
      }
    }
  }
}
