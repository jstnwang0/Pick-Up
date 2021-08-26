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
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { LocationPermsContext } from "../contexts/LocationPermsContext";
import colors from "../config/colors";

import * as Haptics from "expo-haptics";
import { FontText } from "../components/FontText";

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
          onRegionChange={() => {
            animateValue.setValue(1);
            setFaded(false);
          }}
          compassOffset={{ x: -10, y: 70 }}
          mapPadding={{ top: 15, bottom: 15 }}
        >
          <Marker
            key="0"
            coordinate={{ latitude: 37.86792, longitude: -122.27137 }}
            centerOffset={{ x: 0, y: -25 }}
            image={require("../assets/SoccerMarker.png")}
            onPress={() => {
              navigation.navigate("GameDetails");
            }}
          >
            <Callout tooltip={true}></Callout>
          </Marker>
        </MapView>
      </Pressable>

      <Animated.View
        style={{
          position: "absolute",
          height: 50,
          width: 50,
          marginTop: 30,
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
            source={require("../assets/NavigationIcon.png")}
            style={{ height: 25, width: 25 }}
          />
        </TouchableOpacity>
      </Animated.View>

      <View
        style={{
          position: "absolute",
          height: 50,
          width: 50,
          marginTop: 30,
          right: 0,
          marginRight: 10,
          backgroundColor: colors.darkText,
          borderRadius: 15,
          ...styles.shadow,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => {
            navigation.navigate("Filters");
          }}
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/FilterIcon.png")}
            style={{ height: 25, width: 25 }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          width: 150,
          height: 45,
          alignSelf: "center",
          borderRadius: 30,
          bottom: 0,
          marginBottom: 30,
          backgroundColor: colors.darkGreen,
          ...styles.shadow,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigation.navigate("CreateGame");
          }}
          onPressIn={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          }}
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontText style={{ color: "white", fontSize: 16 }}>
            + Create Game
          </FontText>
        </TouchableOpacity>
      </View>
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
