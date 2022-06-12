import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CUSTOM_COLOR } from "constants/colors";
import SCREENS_NAME from "constants/screens";
import React, { Suspense, useRef, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { connect, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { AuthStackScreen } from "./AuthNavigator";
import { AppStackScreen } from "./TabNavigator";

const RootStack = createStackNavigator();

const RootStackScreen = props => {
  const { isLogin } = useSelector(state => state.auth);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!isLogin ? (
        <RootStack.Screen
          name={SCREENS_NAME.AUTH_STACK}
          component={AuthStackScreen}
        />
      ) : (
        <RootStack.Screen
          name={SCREENS_NAME.APP_STACK}
          component={AppStackScreen}
        />
      )}
    </RootStack.Navigator>
  );
};

const RootNavigator = props => {
  const [isBlack, setBlack] = React.useState(false);

  const routeNameRef = useRef();
  const navigationRef = useNavigationContainerRef();

  const [route, setRoute] = useState("");

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name || "";
      }}
      onStateChange={async state => {
        const currentRouteName = navigationRef.getCurrentRoute()?.name || "";
        setRoute(currentRouteName);
        routeNameRef.current = currentRouteName;
        if (
          [
            SCREENS_NAME.CAMERA_CREATE_QUESTION,
            SCREENS_NAME.PREVIEW_CREATE_QUESTION,
          ].includes(currentRouteName)
        ) {
          setBlack(true);
        } else {
          setBlack(false);
        }
      }}
    >
      <Suspense>
        <>
          <SafeAreaProvider>
            <StatusBar barStyle={"light-content"} />
            <RootStackScreen {...props} />
          </SafeAreaProvider>
          <SafeAreaView
            style={[
              {
                backgroundColor: isBlack
                  ? CUSTOM_COLOR.Black
                  : CUSTOM_COLOR.White,
              },
              styles.flex0,
            ]}
            edges={["top"]}
          />
        </>
      </Suspense>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  flex0: {
    flex: 0,
  },
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
const mapStateToProps = state => ({
  isLogin: state.auth.isLogin,
});

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
