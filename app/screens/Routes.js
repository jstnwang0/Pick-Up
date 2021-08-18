import React, { useState, useEffect, useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import DirectMessages from "./DirectMessages";
import FindGames from "./FindGames";
import { ChatIcon, GamesIcon, ProfileIcon } from "./TabBarIcons";
import MyGames from "./MyGames";
import {
  Animated,
  Button,
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import colors from "../config/colors";
import { HomeTabContext } from "../contexts/HomeTabContext";
import FontText from "../assets/Fonts/FontText";
import PagerView from "react-native-pager-view";
import HomeTabScreen from "./HomeTabScreen";

const width = Dimensions.get("screen").width;
const MainStack = createStackNavigator();
const MenuTab = createBottomTabNavigator();
const ChatTab = createBottomTabNavigator();

function ChatTabScreen() {
  return (
    <ChatTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute", height: 10 },
      }}
    >
      <ChatTab.Screen
        name="DirectMessages"
        component={DirectMessages}
      ></ChatTab.Screen>
    </ChatTab.Navigator>
  );
}

function MenuTabScreen() {
  return (
    <MenuTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: StyleSheet.compose(styles.menuTabBar, styles.shadow),
      }}
    >
      <MenuTab.Screen
        name="HomeTab"
        component={HomeTabScreen}
        options={{
          tabBarIcon: ({ focused }) => <GamesIcon focused={focused} />,
        }}
      ></MenuTab.Screen>
      <MenuTab.Screen
        name="ChatTab"
        component={ChatTabScreen}
        options={{
          tabBarIcon: ({ focused }) => <ChatIcon focused={focused} />,
        }}
      ></MenuTab.Screen>
      <MenuTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
        }}
      ></MenuTab.Screen>
    </MenuTab.Navigator>
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen
        name="MenuTab"
        component={MenuTabScreen}
      ></MainStack.Screen>
    </MainStack.Navigator>
  );
}

function Routes() {
  return <MainStackScreen></MainStackScreen>;
}

export default Routes;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBar: {
    height: 100,
    alignSelf: "center",
    width: width,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: "white",
    marginBottom: -30,
    justifyContent: "center",
  },
  tabBarContainer: {
    backgroundColor: colors.lightGray,
    height: 60,
    marginHorizontal: "5%",
    borderRadius: 25,
  },
  indicatorBarContainer: {
    position: "absolute",
    top: 50,
    width: width * 0.9,
    height: 60,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  indicator: {
    position: "absolute",
    height: "80%",
    width: width * 0.9 * 0.45 + 10,
    backgroundColor: "white",
    borderRadius: 20,
  },
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
    },
  },
  menuTabBar: {
    marginTop: -25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    fontSize: 15,
    color: colors.darkText,
  },
});
