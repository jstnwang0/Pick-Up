import React from "react";
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { FontText, FontTextBold } from "../components/FontText";
import colors from "../config/colors";
import SwipeDownBar from "../components/SwipeDownBar";

export default function GameDetails() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View style={{ width: "90%" }}>
        <SwipeDownBar />
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            marginTop: 30,
          }}
        >
          <View
            style={{
              width: "75%",
              height: "100%",
            }}
          >
            <FontTextBold style={{ fontSize: 25 }} numberOfLines={2}>
              Sunday Morning Pickup Football
            </FontTextBold>

            <FontText style={{ marginTop: 5, fontSize: 16 }}>
              Sunday, Aug 08, 2021, 10:00am
            </FontText>
          </View>
          <View
            style={{
              position: "absolute",
              width: "20%",
              height: "100%",
              right: 0,
            }}
          >
            <View
              style={{
                flex: 2,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/EditGameIcon.png")}
                style={{ height: 25, width: 25 }}
              />
              <Image
                source={require("../assets/ShareIcon.png")}
                style={{ height: 25, width: 25 }}
              />
            </View>
            <View
              style={{
                flex: 3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/CircleIcon.png")}
                style={{ position: "absolute", height: 40, width: 40 }}
              />
              <Image
                source={require("../assets/FootballIcon.png")}
                style={{ position: "absolute", height: 25, width: 25 }}
              />
            </View>
          </View>
        </View>
        <FontTextBold style={{ marginTop: 20, fontSize: 19 }}>
          About Location
        </FontTextBold>
        <View
          style={{
            marginTop: 10,
            height: 200,
            backgroundColor: colors.lightGray,
            borderRadius: 10,
          }}
        >
          <View style={{ flex: 1, width: "100%" }}>
            <MapView
              style={styles.map}
              mapPadding={{ top: -30, bottom: -40 }}
              initialRegion={{
                latitude: 37.86792,
                longitude: -122.27137,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                key="0"
                coordinate={{ latitude: 37.86792, longitude: -122.27137 }}
                centerOffset={{ x: 0, y: -25 }}
                image={require("../assets/SoccerMarker.png")}
              >
                <Callout tooltip={true}></Callout>
              </Marker>
            </MapView>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
            }}
          >
            <FontText
              style={{
                fontSize: 15,
                textDecorationLine: "underline",
              }}
              numberOfLines={2}
            >
              1980 Allston Way, Berkeley, CA 94704
            </FontText>
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              Linking.openURL(
                "maps:0,0?q=" +
                  "1980 Allston Way, Berkeley, CA 94704" +
                  "@37.86792,-122.27137"
              );
            }}
          >
            <View
              style={{
                width: "100%",
                height: "100%",
                // backgroundColor: "red",
                position: "absolute",
              }}
            ></View>
          </TouchableWithoutFeedback>
        </View>
        <FontTextBold style={{ marginTop: 20, fontSize: 19 }}>
          Details
        </FontTextBold>
        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontTextBold style={{ fontSize: 16 }}>Sports Type:</FontTextBold>
          <FontText style={{ marginLeft: 5, fontSize: 16 }}>Soccer</FontText>
        </View>
        <FontText style={{ fontSize: 16, marginTop: 5 }} numberOfLines={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo cras in
          at ultricies ut faucibus. Integer lectus et, sit imperdiet quam
          nunc.ur mom gay Hac pellentesque odio rutrum scelerisque mattis...
        </FontText>
        <FontTextBold style={{ marginTop: 20, fontSize: 19 }}>
          Sports Organizer
        </FontTextBold>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: 50,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <FontText style={{ fontSize: 18 }}>Jerry Hamada</FontText>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                width: 110,
                height: 35,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: colors.lightGreen,
                borderRadius: 5,
                justifyContent: "space-evenly",
              }}
            >
              <Image
                source={require("../assets/Chat.png")}
                style={{ width: 25, height: 25 }}
              />
              <FontText>Message</FontText>
            </View>
          </View>
        </View>
      </View>
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
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject,
  },
});
