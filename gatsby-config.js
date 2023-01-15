module.exports = {
    siteMetadata: {
    title: `Using Gatsby Head`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@gatsbyjs`,
    image: `/gatsby-icon.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "smooth-doc",
      options: {
        name: "Hello World",
        description: "Use your own description...",
        siteUrl: "https://example.com",
      },
    },
  ],
};
