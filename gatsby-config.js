module.exports = {
    siteMetadata: {
        title: 'AudioC0RE',
        siteUrl: 'https://audioc0re24267.gtsb.io'
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: process.env.GATSBY_CONTENTFULL_ACCESS_TOKEN,
                spaceId: process.env.GATSBY_CONTENTFULL_SPACE_ID
            }
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true,
                footnotes: true,
                pedantic: true,
                gfm: true
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/'
            },
            __key: 'images'
        }
    ]
}
