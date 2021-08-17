import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "./Profile";
import DirectMessages from "./DirectMessages";
import FindGames from "./FindGames";
import { ChatIcon, GamesIcon, ProfileIcon } from "./TabBarIcons";
import MyGames from "./MyGames";
import {
  Animated,
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

const width = Dimensions.get("screen").width;
const MainStack = createStackNavigator();
const MenuTab = createBottomTabNavigator();
const HomeTab = createMaterialTopTabNavigator();
const ChatTab = createBottomTabNavigator();

function HomeTabScreen({ navigation }) {
  const [animateValue] = useState(new Animated.Value(-1));

  const homeTabContext = {
    animateRight: () => {
      animate(1);
    },
    animateLeft: () => {
      animate(-1);
    },
  };
  animate = (newState) => {
    Animated.timing(animateValue, {
      toValue: newState,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  return (
    <HomeTabContext.Provider value={homeTabContext}>
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          paddingTop: 30,
        }}
      >
        <HomeTab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarContentContainerStyle: styles.tabBarContainer,
            swipeEnabled: false,
            tabBarShowLabel: false,
            tabBarIndicator: () => null,
          }}
        >
          <HomeTab.Screen
            name="FindGames"
            component={FindGames}
          ></HomeTab.Screen>
          <HomeTab.Screen name="MyGames" component={MyGames}></HomeTab.Screen>
        </HomeTab.Navigator>
        {/* Box that matches gray bar for indicator */}
        <View pointerEvents="none" style={styles.indicatorBarContainer}>
          {/* Indicator */}
          <Animated.View
            style={{
              position: "absolute",
              height: "80%",
              width: width * 0.9 * 0.45,
              backgroundColor: "white",
              borderRadius: 20,
              transform: [
                {
                  translateX: animateValue.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [(-width * 0.9) / 4, (width * 0.9) / 4],
                  }),
                },
              ],
            }}
          ></Animated.View>
          <View style={styles.center}>
            <Text>Find Games</Text>
          </View>
          <View style={styles.center}>
            <Text>My Games</Text>
          </View>
        </View>
      </View>
    </HomeTabContext.Provider>
  );
}

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
        tabBarStyle: {
          // position: "absolute",
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          ...styles.shadow,
        },
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
    ...this.shadow,
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
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
});
