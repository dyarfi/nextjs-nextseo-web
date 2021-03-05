const isProduction = process.env.NODE_ENV !== 'development';

const _plugins = [
  'postcss-flexbugs-fixes',
  [
    'postcss-preset-env',
    {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  ],
];

module.exports = {
  plugins: _plugins,
};
