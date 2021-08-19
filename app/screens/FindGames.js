import React, {
  useEffect,
  useContext,
  useRef,
  useCallback,
  useState,
} from "react";
import {
  Animated,
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { LocationPermsContext } from "../contexts/LocationPermsContext";

export default function FindGames({ navigation }) {
  const map = useRef(null);
  let locationPerms = useContext(LocationPermsContext);

  const [faded, setFaded] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [timer, setTimer] = useState(null);
  // const [fadeRefresh, setfadeRefresh] = useState(false);
  const [animateValue] = useState(new Animated.Value(1));

  const animateFade = () => {
    Animated.timing(animateValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setDisabled(true);
    });
  };

  useEffect(() => {
    if (!faded) {
      setFaded(true);
      setDisabled(false);
      if (timer) {
        clearTimeout(timer);
      }
      setTimer(
        setTimeout(() => {
          animateFade();
        }, 3000)
      );
    }
  }, [faded]);

  useEffect(() => {
    if (locationPerms) {
      moveToMyLocation();
    }
  }, [locationPerms]);

  const moveToMyLocation = () => {
    if (locationPerms) {
      setFaded(false);
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
  };

  return (
    <View style={{ flex: 1 }}>
      {/* custom my location button */}
      {/* {locationPerms ? (
        <TouchableOpacity activeOpacity={0.7} onPress={moveToMyLocation}>
          <Animated.View
            pointerEvents="none"
            style={{
              x: 100,
              y: 100,
              height: 50,
              width: 50,
              marginTop: 35,
              marginLeft: 10,
              backgroundColor: "white",
              borderRadius: 15,
              opacity: animateValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
              ...styles.shadow,
              justifyContent: "center",
              alignItems: "center",
              zIndex: 5,
            }}
          >
            <Image
              source={require("../assets/navigation.png")}
              style={{ height: 25, width: 25 }}
            />
          </Animated.View>
        </TouchableOpacity>
      ) : (
        <View></View>
      )} */}

      <Animated.View
        style={{
          position: "absolute",
          height: 50,
          width: 50,
          marginTop: 35,
          marginLeft: 10,
          backgroundColor: "white",
          borderRadius: 15,
          opacity: animateValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          ...styles.shadow,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 5,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => {
            moveToMyLocation();
            animateValue.setValue(1);
            setFaded(false);
          }}
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/navigation.png")}
            style={{ height: 25, width: 25 }}
          />
        </TouchableOpacity>
      </Animated.View>

      <Pressable
        onPressIn={() => {
          animateValue.setValue(1);
          setFaded(false);
        }}
        style={{ flex: 1 }}
      >
        <MapView
          ref={map}
          style={styles.map}
          showsUserLocation={true}
          showsMyLocationButton={false}
          zoomTapEnabled={false}
          // onRegionChange={() => {
          //   animateValue.setValue(1);
          //   setFaded(false);
          // }}
          compassOffset={{ x: -10, y: 15 }}
          mapPadding={{ top: 20, bottom: 25 }}
        ></MapView>
      </Pressable>
      {/* <Animated.View
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          marginLeft: 10,
          marginTop: 40,
          backgroundColor: "red",
        }}
      ></Animated.View> */}
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
