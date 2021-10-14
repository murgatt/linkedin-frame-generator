module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "LinkedIn Frame Generator",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
