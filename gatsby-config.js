/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
        {
          resolve: "gatsby-remark-external-links",
          options: {
            rel: "noopener noreferrer"
          }
        }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
  ],
}
