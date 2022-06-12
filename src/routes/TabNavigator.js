import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { BackHeader, TabBar } from "components";
import SCREENS_NAME from "constants/screens";
import React from "react";
import HomeScreen from "screens/home";
import ListInvoicesScreen from "screens/list";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function RankStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: props => <BackHeader {...props} />,
        presentation: "card",
      }}
    >
      <Stack.Screen
        name={SCREENS_NAME.RANK_SCREEN}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function TabStack() {
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      initialRouteName={SCREENS_NAME.HOME_STACK_SCREEN}
    >
      <Tab.Screen
        name={SCREENS_NAME.QUIZ_SCREEN}
        component={ListInvoicesScreen}
        options={{
          tabBarLabel: "LIST",
          key: 1,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={SCREENS_NAME.HOME_STACK_SCREEN}
        component={RankStack}
        options={{
          tabBarLabel: "CREATE",
          key: 2,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export const AppStackScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS_NAME.MAIN_TAB_SCREEN}
      screenOptions={{
        header: headerProps => <BackHeader {...headerProps} />,
        presentation: "card",
      }}
    >
      <Stack.Screen
        name={SCREENS_NAME.MAIN_TAB_SCREEN}
        component={TabStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREENS_NAME.QUIZ_SCREEN}
        component={ListInvoicesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
