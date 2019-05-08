module.exports = {
	themeConfig: {
		width: "900px",
		locales: {
			"/": {
				lang: "en",
				title: "Google's Quality Rater Guidelines",
				description: "This is where you learn about Google's SEO advisory.",
				nav: [
					{
						text: "🔰 Got Anything... Useful?", link: "/guidance/"
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
				sidebarDepth: 1,
				sidebar: [
					{
						title: "General Guidelines Overview",
						children: [
							"/general-guidelines-overview/",
							"/general-guidelines-overview/0-introduction-to-search-quality-rating"
						]
					},
					{
						title: "Page Quality Rating Guideline",
						children: [
							"/page-quality-rating-guideline/1-introduction-to-page-quality-rating",
							"/page-quality-rating-guideline/2-understanding-webpages-and-websites",
							"/page-quality-rating-guideline/3-overall-page-quality-rating",
							"/page-quality-rating-guideline/4-high-quality-pages",
							"/page-quality-rating-guideline/5-highest-quality-pages",
							"/page-quality-rating-guideline/6-low-quality-pages",
							"/page-quality-rating-guideline/7-lowest-quality-pages",
							"/page-quality-rating-guideline/8-medium-quality-pages",
							"/page-quality-rating-guideline/9-page-quality-rating-tasks",
							"/page-quality-rating-guideline/10-page-quality-criteria-for-specific-types-of-pages",
							"/page-quality-rating-guideline/11-page-quality-rating-faqs"
						]
					},
					{
						title: "Understanding Mobile User Needs",
						children: [
							"/understanding-mobile-user-needs/12-understanding-mobile-users-queries-and-results"
						]
					},
					{
						title: "Needs Met Rating Guideline",
						children: [
							"/needs-met-rating-guideline/13-rating-using-the-needs-met-scale",
							"/needs-met-rating-guideline/14-rating-porn-foreign-language-did-not-load-and-upsetting-offensive-results",
							"/needs-met-rating-guideline/15-the-relationship-between-e-a-t-and-needs-met",
							"/needs-met-rating-guideline/16-rating-queries-with-multiple-interpretations-and-intents",
							"/needs-met-rating-guideline/17-specificity-of-queries-and-landing-pages",
							"/needs-met-rating-guideline/18-needs-met-rating-and-freshness",
							"/needs-met-rating-guideline/19-misspelled-and-mistyped-queries-and-results",
							"/needs-met-rating-guideline/20-non-fully-meets-results-for-url-queries",
							"/needs-met-rating-guideline/21-product-queries-importance-of-browsing-and-researching",
							"/needs-met-rating-guideline/22-rating-visit-in-person-intent-queries",
							"/needs-met-rating-guideline/23-rating-english-language-results-in-non-english-locales"
						]
					},
					{
						title: "Appendix: Using the Evaluation Platform",
						children: [
							"/appendix-using-the-evaluation-platform/24-overview",
							"/appendix-using-the-evaluation-platform/25-acquiring-tasks",
							"/appendix-using-the-evaluation-platform/26-rating-tasks-using-the-rating-interface",
							"/appendix-using-the-evaluation-platform/27-releasing-tasks",
							"/appendix-using-the-evaluation-platform/28-understanding-the-user-location-on-the-task-page",
							"/appendix-using-the-evaluation-platform/29-reporting-duplicate-results-in-tasks",
							"/appendix-using-the-evaluation-platform/30-simplified-needs-met-tasks"
						]
					}
				],
				lastUpdated: "Updated",
				repo: "thewarrman/qrg-bci",
				docsDir: "docs",
				editLinks: true,
				editLinkText: "Edit on GitHub",
				evergreen: true
			}
		}
	}
}
