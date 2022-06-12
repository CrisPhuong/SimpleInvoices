module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-flow-strip-types'],
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    ['@babel/plugin-transform-spread', {loose: true}],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          components: './src/components/',
          utils: './src/utils/',
          screens: './src/screens/',
          constants: './src/constants/',
          assets: './src/assets/',
          actions: './src/redux/actions/',
          actionsType: './src/redux/actionsType',
          sagas: './src/redux/sagas/',
          reducers: './src/redux/reducers/',
          selectors: './src/redux/selectors/',
          colors: './src/constants/colors/',
          services: './src/services/',
          configs: './src/configs/',
          helpers: './src/helpers/',
          store: './src/redux/store/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
