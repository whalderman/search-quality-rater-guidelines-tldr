module.exports = {
   themeConfig: {
      nav: [
         { text: 'Table of Contents', link: '/' },
         { text: 'Original PDF', link: 'https://static.googleusercontent.com/media/www.google.com/en//insidesearch/howsearchworks/assets/searchqualityevaluatorguidelines.pdf' },
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
            path: '/',
            children: [
               '/'
            ]
         },
         {
            title: 'General Guidelines Overview',
            path: '/General Guidelines Overview'
         }
      ],
      lastUpdated: "Updated",
      repo: 'thewarrman/qrg-bci',
      docsDir: 'docs',
      editLinks: true
   }
}
