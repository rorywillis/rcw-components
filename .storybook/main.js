const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  webpackFinal: async (config, { configType }) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": path.resolve(
            __dirname,
            "../node_modules/@emotion/react"
          ),
          "emotion-theming": path.resolve(
            __dirname,
            "../node_modules/@emotion/react"
          ),
          "@emotion/styled": path.resolve(
            __dirname,
            "../node_modules/@emotion/styled"
          ),
        },
      },
    };
  },
};
