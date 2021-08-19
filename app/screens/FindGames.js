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
  const [animateValue] = useState(new Animated.Value(1));

  const animateFade = () => {
    Animated.timing(animateValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(
    (faded) => {
      if (!faded) {
        setFaded(true);
        const timer = setTimeout(animateFade, 3000);

        return () => {
          if (!faded) {
            clearTimeout(timer);
          }
        };
      }
      return () => {};
    },
    [faded]
  );

  useEffect(() => {
    if (locationPerms) {
      moveToMyLocation();
    }
  }, [locationPerms]);

  const moveToMyLocation = () => {
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
        animateValue.setValue(1);
        setFaded(false);
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
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
          onPress={moveToMyLocation}
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
          compassOffset={{ x: -10, y: 15 }}
          mapPadding={{ top: 20, bottom: 25 }}
        ></MapView>
      </Pressable>
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
