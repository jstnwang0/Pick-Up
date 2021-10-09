import React, { useState, useEffect, useRef } from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import ChatTab from "./chatScreens/ChatTab";
import { ChatIcon, GamesIcon, ProfileIcon } from "./TabBarIcons";
import AddPost from "./AddPost";
import EditProfile from "./EditProfile";
import ChatDetails from "./chatScreens/ChatDetails";
import GroupDetails from "./chatScreens/GroupDetails";
import NewMessage from "./chatScreens/NewMessage";
import DirectChatMessage from "./chatScreens/DirectChatMessage";
import GroupChatMessage from "./chatScreens/GroupChatMessage";
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
import Settings from "./Settings";

import * as Haptics from "expo-haptics";
import { CreateGame, CreateGamePopup } from "./CreateGame";
import Friends from "./Friends";
import AllPlayers from "./AllPlayers";
import Landing from "./landing/Landing";

const width = Dimensions.get("screen").width;
const AppStack = createStackNavigator();
const MainStack = createStackNavigator();
const LoginStack = createStackNavigator();
const MenuTab = createBottomTabNavigator();

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
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              }}
            />
          ),
        }}
      ></MenuTab.Screen>
      <MenuTab.Screen
        name="ChatTab"
        component={ChatTab}
        options={{
          tabBarIcon: ({ focused }) => <ChatIcon focused={focused} />,
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              activeOpacity={0.6}
              style={{ flex: 1 }}
              onPressIn={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
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
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
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
        // options={{
        //   cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        // }}
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
        name="Friends"
        component={Friends}
        options={{ gestureEnabled: false }}
      />
      <MainStack.Screen
        name="CreateGame"
        component={CreateGame}
        options={{ presentation: "modal" }}
      />
      <MainStack.Screen
        name="AddPost"
        component={AddPost}
        options={{ gestureEnabled: false }}
      />
      <MainStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ gestureEnabled: false }}
      />
      <MainStack.Screen
        name="Settings"
        component={Settings}
        options={{ gestureEnabled: false }}
      />
      <MainStack.Screen
        name="AllPlayers"
        component={AllPlayers}
        options={{ presentation: "modal" }}
      />
      <MainStack.Screen
        name="ChatDetails"
        component={ChatDetails}
        options={{ gestureEnabled: false }}
      />
      <MainStack.Screen
        name="GroupDetails"
        component={GroupDetails}
        options={{ gestureEnabled: false }}
      />
      <MainStack.Screen
        name="DirectChatMessage"
        component={DirectChatMessage}
        options={{ gestureEnabled: false }}
      />
      <MainStack.Screen
        name="GroupChatMessage"
        component={GroupChatMessage}
        options={{ gestureEnabled: false }}
      />

      <MainStack.Screen
        name="CreateGamePopup"
        component={CreateGamePopup}
        options={{
          presentation: "transparentModal",
          // transitionSpec: {
          //   open: { animation: "timing", config: { duration: 100 } },
          //   close: { animation: "timing", config: { duration: 150 } },
          // },
        }}
      />
      <MainStack.Screen name="NewMessage" component={NewMessage} />
    </MainStack.Navigator>
  );
}

function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <LoginStack.Screen name="Landing" component={Landing} />
      {/* <LoginStack.Screen name="Landing2" component={Landing2} /> */}
    </LoginStack.Navigator>
  );
}

function AppStackScreen() {
  return (
    <AppStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <AppStack.Screen name="LoginStack" component={LoginStackScreen} />
      <AppStack.Screen name="MainStack" component={MainStackScreen} />
    </AppStack.Navigator>
  );
}

function Routes() {
  return <AppStackScreen></AppStackScreen>;
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
    marginTop: -15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
