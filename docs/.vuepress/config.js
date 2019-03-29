module.exports = {
   themeConfig: {
      title: 'Google\'s Quality Rater Guidelines',
      nav: [
         { text: 'Table of Contents', link: '/' },
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
      sidebarDepth: 2,
      sidebar: [
         {
            title: 'Table of Contents',
            path: '/'
         },
         {
            title: 'General Guidelines Overview',
            children: [
               '/general-guidelines-overview/',
               '/general-guidelines-overview/introduction-to-search-quality-rating'
            ]
         },
         {
            title: 'Page Quality Rating Guideline',
            children: [
               '/page-quality-rating-guideline/introduction-to-page-quality-rating',
               '/page-quality-rating-guideline/understanding-webpages-and-websites',
               '/page-quality-rating-guideline/overall-page-quality-rating',
               '/page-quality-rating-guideline/high-quality-pages',
               '/page-quality-rating-guideline/highest-quality-pages',
               '/page-quality-rating-guideline/low-quality-pages',
               '/page-quality-rating-guideline/lowest-quality-pages',
               '/page-quality-rating-guideline/medium-quality-pages',
               '/page-quality-rating-guideline/page-quality-rating-tasks',
               '/page-quality-rating-guideline/page-quality-criteria-for-specific-types-of-pages',
               '/page-quality-rating-guideline/page-quality-rating-faqs'
            ]
         }

      ],
      lastUpdated: "Updated",
      repo: 'thewarrman/qrg-bci',
      docsDir: 'docs',
      editLinks: true,
      editLinkText: 'Edit on GitHub',
      evergreen: true
   }
}
