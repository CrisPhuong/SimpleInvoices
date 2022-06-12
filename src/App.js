import { CUSTOM_COLOR } from 'constants/colors';
import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import storeConfig from 'store/configureStore';
import RootNavigator from './routes/RootNavigator';

const Root = props => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={storeConfig.store}>
      <RootSiblingParent>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={CUSTOM_COLOR.Transparent}
        />
        <PersistGate loading={null} persistor={storeConfig.persistor}>
          <RootNavigator initialProps={props} />
        </PersistGate>
      </RootSiblingParent>
    </Provider>
  );
};

export default Root;
