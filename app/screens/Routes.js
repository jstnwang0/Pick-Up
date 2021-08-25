import React, { useState, useEffect, useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import DirectMessages from "./DirectMessages";
import FindGames from "./FindGames";
import { ChatIcon, GamesIcon, ProfileIcon } from "./TabBarIcons";
import MyGames from "./MyGames";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HomeTab from "./HomeTab";
import GameDetails from "./GameDetails";
import Filters from "./Filters";

import * as Haptics from "expo-haptics";
import CreateGame from "./CreateGame";

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

function MenuTabScreen({ navigation }) {
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
        component={HomeTab}
        options={{
          tabBarIcon: ({ focused }) => <GamesIcon focused={focused} />,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              activeOpacity={0.6}
              style={{ flex: 1 }}
              onPressIn={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              }}
            />
          ),
        }}
      ></MenuTab.Screen>
      <MenuTab.Screen
        name="ChatTab"
        component={ChatTabScreen}
        options={{
          tabBarIcon: ({ focused }) => <ChatIcon focused={focused} />,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              activeOpacity={0.6}
              style={{ flex: 1 }}
              onPressIn={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              }}
            />
          ),
        }}
      ></MenuTab.Screen>
      <MenuTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => <ProfileIcon focused={focused} />,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              activeOpacity={0.6}
              style={{ flex: 1 }}
              onPressIn={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
              }}
            />
          ),
        }}
      ></MenuTab.Screen>
    </MenuTab.Navigator>
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="MenuTab" component={MenuTabScreen} />
      <MainStack.Screen
        name="GameDetails"
        component={GameDetails}
        options={{ presentation: "modal" }}
      />
      <MainStack.Screen
        name="Filters"
        component={Filters}
        options={{
          presentation: "transparentModal",
          transitionSpec: {
            open: { animation: "timing", config: { duration: 100 } },
            close: { animation: "timing", config: { duration: 150 } },
          },
        }}
      />
      <MainStack.Screen
        name="CreateGame"
        component={CreateGame}
        options={{ presentation: "modal" }}
      />
    </MainStack.Navigator>
  );
}

function Routes() {
  return <MainStackScreen></MainStackScreen>;
}

export default Routes;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: {
      height: -2,
    },
  },
  menuTabBar: {
    marginTop: -25,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});
