module.exports = {
  pathPrefix: "",
  siteMetadata: {
    title: `Musa Architectos`,
    description: `Webpage for Musa Architectos`,
    author: `David de Matheu`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-188063360-1", // Google Analytics / GA
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/musa-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ja1wzfh91kyu`,
        accessToken: `6-CT3syzFKLK-3IXLpgmo5FP1cSamPuMTGo1HVTp8Fc`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ja1wzfh91kyu`,
        accessToken: `TexszrV1Vou9VO_QOawXUXyZ9FotlFucoy0LQex_6AA`,
        host: `preview.contentful.com`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
