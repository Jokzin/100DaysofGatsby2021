module.exports = {
  siteMetadata: {
    title: "AudioC0RE",
    siteUrl: "https://audioc0re24267.gtsb.io"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "I2JUdOkcjhU3BYAU4XHfhsHjtvkBd770W0TbncqtDFQ",
        spaceId: "3hnylw3otkhm",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
