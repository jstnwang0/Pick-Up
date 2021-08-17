import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Home2 from "./Home2";
import Profile from "./Profile";
import Profile2 from "./Profile2";

const MenuTabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Tabs"
      options={{
        headerTitle: "Tab Nav",
      }}
      component={MenuTabsScreen}
    ></HomeStack.Screen>
    <HomeStack.Screen
      name="Home2"
      // options={{
      //   animationEnabled: true,
      //   presentation: "modal",
      // }}
      component={Home2}
    />
    <HomeStack.Screen
      name="Profile2"
      // options={{
      //   animationEnabled: true,
      //   presentation: "modal",
      // }}
      component={Profile2}
    ></HomeStack.Screen>
  </HomeStack.Navigator>
);

const MenuTabsScreen = () => (
  <MenuTabs.Navigator>
    <MenuTabs.Screen name="Home" component={Home}></MenuTabs.Screen>
    <MenuTabs.Screen name="Profile" component={Profile}></MenuTabs.Screen>
  </MenuTabs.Navigator>
);

function Navigator(props) {
  return (
    <NavigationContainer>
      <HomeStackScreen></HomeStackScreen>
    </NavigationContainer>
  );
}

export default Navigator;
