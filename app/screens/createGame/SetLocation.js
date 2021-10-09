import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../../redux/CreateGameLocation";
import SwipeDownBar from "../../components/SwipeDownBar";
import * as Location from "expo-location";
import { FontText, FontTextBold } from "../../components/FontText";
import colors from "../../config/colors";
import * as Haptics from "expo-haptics";

const SetLocation = () => {
  const dispatch = useDispatch();
  const map = useRef(null);
  const locationPerms = useSelector(
    (state) => state.locationPerms.locationPerms
  );

  const markerLocation = useSelector((state) => state.location.location);
  const [faded, setFaded] = useState(false);
  const [animateValue] = useState(new Animated.Value(1));
  const [initialRegion, setInitialRegion] = useState(null);
  const [instantLocation, setInstantLocation] = useState(null);

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
      Location.getLastKnownPositionAsync().then((location) => {
        const latitude = location.coords.latitude;
        const longitude = location.coords.longitude;
        const region = {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        };
        setInitialRegion(region);
      });
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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          height: 75,
          width: "100%",
          marginBottom: -15,
          backgroundColor: "white",
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,
          zIndex: 1,
          justifyContent: "center",
          paddingHorizontal: 15,
          ...styles.shadow,
        }}
      >
        <SwipeDownBar />
        <FontTextBold style={{ fontSize: 18, top: 5 }}>
          Choose Location
        </FontTextBold>
      </View>
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
            onRegionChange={(camera) => {
              animateValue.setValue(1);
              setFaded(false);
              setInstantLocation({
                latitude: camera.latitude,
                longitude: camera.longitude,
              });
            }}
            compassOffset={{ y: 10 }}
            mapPadding={{ top: 15, bottom: -25, left: 10, right: 10 }}
            initialRegion={initialRegion}
          >
            {markerLocation ? (
              <Marker
                key="0"
                coordinate={{
                  latitude: markerLocation.latitude,
                  longitude: markerLocation.longitude,
                }}
              >
                <Image
                  style={{
                    height: 80,
                    resizeMode: "contain",
                    tintColor: colors.darkGreen,
                    bottom: 28,
                  }}
                  source={require("../../assets/locationMarker.png")}
                />
              </Marker>
            ) : (
              <View />
            )}
          </MapView>
        </Pressable>
        <View
          pointerEvents="none"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {markerLocation ? (
            <View />
          ) : (
            <Image
              style={{ height: 80, resizeMode: "contain", bottom: 25 }}
              source={require("../../assets/locationMarker.png")}
            />
          )}
        </View>

        {locationPerms ? (
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
                source={require("../../assets/NavigationIcon.png")}
                style={{ height: 25, width: 25 }}
              />
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <View />
        )}
      </View>
      <View
        style={{
          position: "absolute",
          width: "90%",
          height: 60,
          alignSelf: "center",
          borderRadius: 20,
          bottom: 0,
          marginBottom: 40,
          backgroundColor: markerLocation ? colors.red : colors.darkGreen,
          ...styles.shadow,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            if (markerLocation) {
              dispatch(setLocation(null));
            } else {
              dispatch(setLocation(instantLocation));
            }
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
            {markerLocation ? "CLEAR LOCATION" : "SET LOCATION"}
          </FontText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  shadow: {
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 2,
    },
    shadowRadius: 3,
  },
});

export default SetLocation;
