import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  flags: {
    DEV_SSR: true,
    FAST_DEV: true,
  },
  siteMetadata: {
    title: `My Mantine Site`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss"],
};

export default config;
