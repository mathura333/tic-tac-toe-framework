module.exports = {
  displayName: 'ttt-vue',
  preset: '../../jest.preset.js',
  transform: {
    '^.+.vue$': '@vue/vue2-jest',
    '.+.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory: '../../coverage/apps/ttt-vue',
  snapshotSerializers: ['jest-serializer-vue'],
  globals: {
    'ts-jest': {
      tsconfig: 'apps/ttt-vue/tsconfig.spec.json',
      babelConfig: 'apps/ttt-vue/babel.config.js',
    },
    'vue-jest': {
      tsConfig: 'apps/ttt-vue/tsconfig.spec.json',
      babelConfig: 'apps/ttt-vue/babel.config.js',
    },
  },
};
