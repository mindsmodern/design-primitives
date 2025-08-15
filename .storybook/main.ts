import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs"
  ],
  "framework": {
    "name": "@storybook/html-vite",
    "options": {}
  },
  "viteFinal": async (config) => {
    // Ensure SCSS files are properly processed
    config.css = config.css || {};
    config.css.preprocessorOptions = config.css.preprocessorOptions || {};
    config.css.preprocessorOptions.scss = {
      additionalData: `@import "../dist/styles.scss";`
    };
    return config;
  }
};
export default config;