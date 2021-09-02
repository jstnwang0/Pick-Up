import React from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import BackButton from "../components/BackButton";
import { FontText, FontTextBold } from "../components/FontText";
import colors from "../config/colors";

export default function EditProfile({ navigation }) {
  const [title, setName] = React.useState(null);
  const [details, setDetails] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.paddingBox}>
        <View style={styles.topBar}>
          <View style={{ flex: 1, alignItems: "flex-start" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <FontText style={{ color: colors.mediumGray, fontSize: 16 }}>
                Cancel
              </FontText>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <FontTextBold style={{ fontSize: 18 }}>Edit Profile</FontTextBold>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <FontText style={{ color: colors.darkGreen, fontSize: 16 }}>
              Save
            </FontText>
          </View>
        </View>
        <View
          style={{
            marginTop: 10,
            // backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/EditProfileProfile.png")}
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <FontText>Name</FontText>

          <TextInput
            style={styles.inputName}
            onChangeText={setName}
            value={title}
            placeholder="Name"
            placeholderTextColor={colors.mediumGray}
            returnKeyType="done"
            autoCorrect={false}
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <FontText>Bio</FontText>

          <TextInput
            style={styles.inputDetails}
            onChangeText={setDetails}
            value={details}
            multiline
            placeholder="Enter Bio"
            placeholderTextColor={colors.mediumGray}
            returnKeyType="done"
            blurOnSubmit={true}
            autoCorrect={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  paddingBox: {
    width: "90%",
    height: "100%",
  },
  topBar: {
    height: 60,
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputName: {
    fontFamily: "Manrope_400Regular",
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    paddingLeft: 10,
    width: "100%",
    marginTop: 5,
    fontSize: 15,
    height: 50,
  },
  inputDetails: {
    fontFamily: "Manrope_400Regular",
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    paddingLeft: 10,
    width: "100%",
    paddingTop: 10,
    marginTop: 5,
    fontSize: 15,
    height: 100,
  },
});
