module.exports = {
  siteMetadata: {
    siteUrl: "https://mingumedia.mingzhu.me",
    title: "mingzhu",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ming Zhu`,
        short_name: `Ming Zhu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff7735`,
        display: `standalone`,
        icon: `src/images/mz.svg`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          // require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS confi),guration
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
