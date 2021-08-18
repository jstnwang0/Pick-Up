import React, { useEffect, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { HomeTabContext } from "../contexts/HomeTabContext";

export default function FindGames({ navigation }) {
  const { animateLeft } = useContext(HomeTabContext);
  useEffect(() => {
    const animator = navigation.addListener("tabPress", (e) => {
      animateLeft();
    });

    return animator;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
        // showsCompass={false}
        // rotateEnabled={false}
        mapPadding={{ top: 35, bottom: 30 }}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
