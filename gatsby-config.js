module.exports = {
  siteMetadata: {
    title: `Steps 4 Doug`,
  },
  plugins: [`gatsby-plugin-react-helmet`,
  	{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
