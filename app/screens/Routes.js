import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import DirectMessages from "./DirectMessages";
import FindGames from "./FindGames";
import { ChatIcon, GamesIcon, ProfileIcon } from "./TabBarIcons";
import { View } from "react-native";
import colors from "../config/colors";

const MainStack = createStackNavigator();
const MenuTab = createBottomTabNavigator();
const HomeTab = createBottomTabNavigator();
const ChatTab = createBottomTabNavigator();

function HomeTabScreen() {
  return (
    <HomeTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute" },
      }}
    >
      <HomeTab.Screen name="FindGames" component={FindGames}></HomeTab.Screen>
    </HomeTab.Navigator>
  );
}

function ChatTabScreen() {
  return (
    <ChatTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute" },
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
        tabBarStyle: { position: "absolute" },
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
