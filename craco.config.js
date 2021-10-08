const path = require('path');

const pathAlias = [
  { alias: '@', path: 'src/' },
  { alias: '@component', path: 'src/components' },
  { alias: '@animation', path: 'src/animation' },
  { alias: '@ui', path: 'src/UI' },
  { alias: '@layout', path: 'src/layout' },
];

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    alias: (() => {
      const paths = {};
      pathAlias.forEach(
        (curr) => (paths[curr.alias] = path.resolve(__dirname, curr.path))
      );
      return paths;
    })(),
  },
};
