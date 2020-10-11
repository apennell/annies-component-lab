const { version } = require('./package.json');

module.exports = {
  title: "Annie's Component Lab",
  version: `v${version}`,
  sections: [
    {
      name: '',
      content: './docs/Intro.md',
    },
    {
      name: 'Identity',
      components: './src/components/Identity/**/[A-Z]*.jsx',
    },
    {
      name: 'Elements',
      components: './src/components/Elements/**/[A-Z]*.jsx',
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.js', 'jsx'],
    },
  },
  usageMode: 'expand',
};
