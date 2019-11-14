module.exports = [
  '@storybook/preset-typescript',
  {
    name: '@storybook/addon-docs/react/preset',
    options: {
      configureJSX: true,
      sourceLoaderOptions: null
    }
  }
];
