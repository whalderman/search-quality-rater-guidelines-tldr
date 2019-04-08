module.exports = {
	themeConfig: {

		locales: {
			"/": {
				lang: "en",
				title: "Google's Quality Rater Guidelines",
				description: "This is where you learn about Google's SEO advisory.",
				nav: [
					{
						text: "🔰 Got Anything... Useful?",
						path: "/about/something-useful"
					},
					{
						text: "Who Did This?", link: "/about/"
					},
					{
						text: "Ain't Nobody Got Time For This", items: [
							{
								text: "Show me the takeaways for...", items: [
									{ text: "Small to Medium Businesses", link: "/seo-takeaways-for-smbs/" },
									{ text: "Brick and Mortar Shops", link: "/seo-takeaways-for-brick-and-mortars/" },
									{ text: "Online Businesses", link: "/seo-takeaways-for-online-businesses/" }
								]
							}
						]
					},
					{
						text: "Digital Marketing Services", items: [
							{
								text: "U.S.", items: [
									{ text: "English", link: "https://www.bruceclay.com/" }
								]
							},
							{
								text: "Europe", items: [
									{ text: "English", link: "https://www.bruceclay.com/eu/" },
									{ text: "Italian", link: "https://www.bruceclay.com/eu-it/" }
								]
							},
							{
								text: "Australia", items: [
									{ text: "English", link: "https://www.bruceclay.com/au/" }
								]
							},
							{
								text: "India", items: [
									{ text: "English", link: "https://www.bruceclay.com/in/" }
								]
							},
							{
								text: "Brazil", items: [
									{ text: "English", link: "https://www.bruceclay.com/br/" },
									{ text: "Portuguesa", link: "https://www.bruceclay.com/br-pt/" }
								]
							},
							{
								text: "Japan", items: [
									{ text: "English", link: "https://www.bruceclay.com/jp/" },
									{ text: "日本語", link: "https://bruceclay.jpn.com/" }
								]
							},
							{
								text: "Middle East", items: [
									{ text: "English", link: "https://www.bruceclay.com/me/" }
								]
							}
						]
					}
				],
				sidebarDepth: 2,
				sidebar: [
					{
						title: "General Guidelines Overview",
						children: [
							"/general-guidelines-overview/",
							"/general-guidelines-overview/introduction-to-search-quality-rating"
						]
					},
					{
						title: "Page Quality Rating Guideline",
						children: [
							"/page-quality-rating-guideline/introduction-to-page-quality-rating",
							"/page-quality-rating-guideline/understanding-webpages-and-websites",
							"/page-quality-rating-guideline/overall-page-quality-rating",
							"/page-quality-rating-guideline/high-quality-pages",
							"/page-quality-rating-guideline/highest-quality-pages",
							"/page-quality-rating-guideline/low-quality-pages",
							"/page-quality-rating-guideline/lowest-quality-pages",
							"/page-quality-rating-guideline/medium-quality-pages",
							"/page-quality-rating-guideline/page-quality-rating-tasks",
							"/page-quality-rating-guideline/page-quality-criteria-for-specific-types-of-pages",
							"/page-quality-rating-guideline/page-quality-rating-faqs"
						]
					},
					{
						title: "Understanding Mobile User Needs",
						children: [
							"/understanding-mobile-user-needs/understanding-mobile-users-queries-and-results"
						]
					},
					{
						title: "Needs Met Rating Guideline",
						children: [
							"/needs-met-rating-guideline/rating-using-the-needs-met-scale",
							"/needs-met-rating-guideline/rating-porn-foreign-language-did-not-load-and-upsetting-offensive-results",
							"/needs-met-rating-guideline/the-relationship-between-e-a-t-and-needs-met",
							"/needs-met-rating-guideline/rating-queries-with-multiple-interpretations-and-intents",
							"/needs-met-rating-guideline/specificity-of-queries-and-landing-pages",
							"/needs-met-rating-guideline/needs-met-rating-and-freshness",
							"/needs-met-rating-guideline/misspelled-and-mistyped-queries-and-results",
							"/needs-met-rating-guideline/non-fully-meets-results-for-url-queries",
							"/needs-met-rating-guideline/product-queries-importance-of-browsing-and-researching",
							"/needs-met-rating-guideline/rating-visit-in-person-intent-queries",
							"/needs-met-rating-guideline/rating-english-language-results-in-non-english-locales"
						]
					},
					{
						title: "Appendix: Using the Evaluation Platform",
						children: [
							"/appendix-using-the-evaluation-platform/overview",
							"/appendix-using-the-evaluation-platform/acquiring-tasks",
							"/appendix-using-the-evaluation-platform/rating-tasks-using-the-rating-interface",
							"/appendix-using-the-evaluation-platform/releasing-tasks",
							"/appendix-using-the-evaluation-platform/understanding-the-user-location-on-the-task-page",
							"/appendix-using-the-evaluation-platform/reporting-duplicate-results-in-tasks",
							"/appendix-using-the-evaluation-platform/simplified-needs-met-tasks"
						]
					}
				],
				lastUpdated: "Updated",
				repo: "thewarrman/qrg-bci",
				docsDir: "docs",
				editLinks: true,
				editLinkText: "Edit on GitHub",
				evergreen: true,
			},
			"/zh/": {
				lang: "zh",
				title: "Google的质量评估指南",
				description: "这是您了解Google的SEO顾问的地方。"
			}
		}
	}
}
