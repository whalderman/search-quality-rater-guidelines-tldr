module.exports = {
	themeConfig: {
		plugins: {
			'container': {
				type: 'ceo',
				defaultTitle: 'CEO TL;DR',
				before: info => `<div class='ceo'><p class='title'>${info}</p>`,
				after: '</div>'
			},
			'container': {
				type: 'sales',
				defaultTitle: 'Sales TL;DR',
				before: info => `<div class='sales'><p class='title'>${info}</p>`,
				after: '</div>'
			},
			'container': {
				type: 'dev',
				defaultTitle: 'Developer TL;DR',
				before: info => `<div class='dev'><p class='title'>${info}</p>`,
				after: '</div>'
			},
			'container': {
				type: 'design',
				defaultTitle: 'Designer TL;DR',
				before: info => `<div class='design'><p class='title'>${info}</p>`,
				after: '</div>'
			}
		},
		width: '900px',
		lastUpdated: 'Updated',
		repo: 'thewarrman/qrg-bci',
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'Edit on GitHub',
		evergreen: true,
		locales: {
			'/': {
				lang: 'en',
				title: 'Google\'s Quality Rater Guidelines',
				description: 'This is where you learn about Google\'s SEO advisory.',
				nav: [
					{
						text: '🔰 Got Anything... Useful?', link: '/'
					},
					{
						text: 'Who Did This?', link: '/about/'
					},
					{
						text: 'Ain\'t Nobody Got Time For This', items: [
							{
								text: 'Speak to me in...', items: [
									{ text: 'CEO Jargon', link: '/seo-takeaways/ceos' },
									{ text: 'Sales Jargon', link: '/seo-takeaways/sales' },
									{ text: 'Developer Jargon', link: '/seo-takeaways/developers' },
									{ text: 'Designer Jargon', link: '/seo-takeaways/designers' }
								]
							}
						]
					},
					{
						text: 'Digital Marketing Services', items: [
							{
								text: 'U.S.', items: [
									{ text: 'English', link: 'https://www.bruceclay.com/' }
								]
							},
							{
								text: 'Europe', items: [
									{ text: 'English', link: 'https://www.bruceclay.com/eu/' },
									{ text: 'Italian', link: 'https://www.bruceclay.com/eu-it/' }
								]
							},
							{
								text: 'Australia', items: [
									{ text: 'English', link: 'https://www.bruceclay.com/au/' }
								]
							},
							{
								text: 'India', items: [
									{ text: 'English', link: 'https://www.bruceclay.com/in/' }
								]
							},
							{
								text: 'Brazil', items: [
									{ text: 'English', link: 'https://www.bruceclay.com/br/' },
									{ text: 'Portuguesa', link: 'https://www.bruceclay.com/br-pt/' }
								]
							},
							{
								text: 'Japan', items: [
									{ text: 'English', link: 'https://www.bruceclay.com/jp/' },
									{ text: '日本語', link: 'https://bruceclay.jpn.com/' }
								]
							},
							{
								text: 'Middle East', items: [
									{ text: 'English', link: 'https://www.bruceclay.com/me/' }
								]
							}
						]
					}
				],
				sidebarDepth: 1,
				sidebar: [
					{
						title: 'General Guidelines Overview',
						children: [
							'/qrg/general-guidelines-overview/',
							'/qrg/general-guidelines-overview/0-introduction-to-search-quality-rating'
						]
					},
					{
						title: 'Page Quality Rating Guideline',
						children: [
							'/qrg/page-quality-rating-guideline/1-introduction-to-page-quality-rating',
							'/qrg/page-quality-rating-guideline/2-understanding-webpages-and-websites',
							'/qrg/page-quality-rating-guideline/3-overall-page-quality-rating',
							'/qrg/page-quality-rating-guideline/4-high-quality-pages',
							'/qrg/page-quality-rating-guideline/5-highest-quality-pages',
							'/qrg/page-quality-rating-guideline/6-low-quality-pages',
							'/qrg/page-quality-rating-guideline/7-lowest-quality-pages',
							'/qrg/page-quality-rating-guideline/8-medium-quality-pages',
							'/qrg/page-quality-rating-guideline/9-page-quality-rating-tasks',
							'/qrg/page-quality-rating-guideline/10-page-quality-criteria-for-specific-types-of-pages',
							'/qrg/page-quality-rating-guideline/11-page-quality-rating-faqs'
						]
					},
					{
						title: 'Understanding Mobile User Needs',
						children: [
							'/qrg/understanding-mobile-user-needs/12-understanding-mobile-users-queries-and-results'
						]
					},
					{
						title: 'Needs Met Rating Guideline',
						children: [
							'/qrg/needs-met-rating-guideline/13-rating-using-the-needs-met-scale',
							'/qrg/needs-met-rating-guideline/14-rating-porn-foreign-language-did-not-load-and-upsetting-offensive-results',
							'/qrg/needs-met-rating-guideline/15-the-relationship-between-e-a-t-and-needs-met',
							'/qrg/needs-met-rating-guideline/16-rating-queries-with-multiple-interpretations-and-intents',
							'/qrg/needs-met-rating-guideline/17-specificity-of-queries-and-landing-pages',
							'/qrg/needs-met-rating-guideline/18-needs-met-rating-and-freshness',
							'/qrg/needs-met-rating-guideline/19-misspelled-and-mistyped-queries-and-results',
							'/qrg/needs-met-rating-guideline/20-non-fully-meets-results-for-url-queries',
							'/qrg/needs-met-rating-guideline/21-product-queries-importance-of-browsing-and-researching',
							'/qrg/needs-met-rating-guideline/22-rating-visit-in-person-intent-queries',
							'/qrg/needs-met-rating-guideline/23-rating-english-language-results-in-non-english-locales'
						]
					},
					{
						title: 'Appendix: Using the Evaluation Platform',
						children: [
							'/qrg/appendix-using-the-evaluation-platform/24-overview',
							'/qrg/appendix-using-the-evaluation-platform/25-acquiring-tasks',
							'/qrg/appendix-using-the-evaluation-platform/26-rating-tasks-using-the-rating-interface',
							'/qrg/appendix-using-the-evaluation-platform/27-releasing-tasks',
							'/qrg/appendix-using-the-evaluation-platform/28-understanding-the-user-location-on-the-task-page',
							'/qrg/appendix-using-the-evaluation-platform/29-reporting-duplicate-results-in-tasks',
							'/qrg/appendix-using-the-evaluation-platform/30-simplified-needs-met-tasks'
						]
					}
				]
			}
		}
	},
	markdown: {
		anchor: {
			permalink: true,
			permalinkBefore: true,
			permalinkSymbol: '📌'
		}
	}
}
