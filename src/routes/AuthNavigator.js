import { createStackNavigator } from '@react-navigation/stack';
import { BackHeader } from 'components';
import SCREENS_NAME from 'constants/screens';
import React, { useEffect } from 'react';
import { BackHandler } from 'react-native';
import LoginScreen from 'screens/auth/login';
import OnboardingScreen from 'screens/auth/onboarding';

const AuthStack = createStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 2000,
    mass: 1,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1],
    }),
  },
});

const forHeaderFade = ({ current, next }) => {
  const opacity = interpolate(add(current.progress, next ? next.progress : 0), {
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const screenOptions = {
  header: headerProps => <BackHeader {...headerProps} />,
  cardOverlayEnabled: true,
  transitionSpec: {
    open: config,
    close: config,
  },
  cardStyleInterpolator: forFade,
  headerStyleInterpolator: forHeaderFade,
};

export const AuthStackScreen = () => {
  const onBackPress = () => {
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, []);

  return (
    <AuthStack.Navigator
      initialRouteName={SCREENS_NAME.ONBOARDING}
      screenOptions={screenOptions}>
      <AuthStack.Screen
        name={SCREENS_NAME.ONBOARDING}
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={SCREENS_NAME.LOGIN_SCREEN}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};
