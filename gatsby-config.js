module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "uloax",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "uloaxdata",
        fieldName: "uloaxdata",
        url: "https://api-us-east-1.graphcms.com/v2/ckv9k667o0huc01xtabh9e993/master"
      }
    }
  ],
};