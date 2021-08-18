import React, { useEffect, useContext, useRef, useCallback } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView from "react-native-maps";
import { HomeTabContext } from "../contexts/HomeTabContext";
import * as Location from "expo-location";
import { LocationPermsContext } from "../contexts/LocationPermsContext";

export default function FindGames({ navigation }) {
  const { animateLeft } = useContext(HomeTabContext);
  useEffect(() => {
    const animator = navigation.addListener("tabPress", (e) => {
      animateLeft();
    });

    return animator;
  }, [navigation]);

  const map = useRef(null);
  let locationPerms = useContext(LocationPermsContext);

  useEffect(() => {
    if (locationPerms) {
      moveToMyLocation();
    }
  }, [locationPerms]);

  const moveToMyLocation = useCallback(() => {
    if (locationPerms) {
      Location.getLastKnownPositionAsync().then((location) => {
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;
        const region = {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };
        map.current.animateToRegion(region);
      });
    }
  });

  map.onMa;
  return (
    <View style={{ flex: 1 }}>
      <MapView
        ref={map}
        style={styles.map}
        showsUserLocation={true}
        showsMyLocationButton={false}
        compassOffset={{ x: -10, y: 10 }}
        mapPadding={{ top: 30, bottom: 30 }}
      ></MapView>
      {locationPerms ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={moveToMyLocation}
          style={{
            height: 50,
            width: 50,
            marginTop: 40,
            marginLeft: 10,
            backgroundColor: "white",
            borderRadius: 15,
            ...styles.shadow,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/navigation.png")}
            style={{ height: 30, width: 30 }}
          />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 1,
    },
    shadowRadius: 3,
  },
});
