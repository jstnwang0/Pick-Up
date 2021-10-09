import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import BackButton from "../../components/BackButton";
import { FontTextBold, FontText } from "../../components/FontText";
import SearchBar from "../../components/SearchBar";
import colors from "../../config/colors";

export default function NewMessage({ navigation }) {
  const [contacts, setContacts] = useState([
    { name: "Justin Wang", selected: false },
    { name: "Jerry Hamada", selected: false },
    { name: "Justin Wang", selected: false },
    { name: "Jerry Hamada", selected: false },
    { name: "Justin Wang", selected: false },
    { name: "Jerry Hamada", selected: false },
  ]);

  const [selected, setSelected] = useState([]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.topBar}>
        <View>
          <BackButton navigation={navigation} />
        </View>
        <View style={{ marginLeft: 15 }}>
          <View>
            <FontText style={{ fontSize: 18 }}>Select Contact</FontText>
          </View>
          <View>
            <FontText style={{ color: colors.mediumGray }}>
              {selected.length} of {contacts.length} selected
            </FontText>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 15,
          height: 50,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View>
          <View>
            <ScrollView
              style={{ marginTop: 5 }}
              horizontal={true}
              bounces={false}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ alignSelf: "center" }}>
                <FontTextBold style={{ fontSize: 18, marginLeft: 20 }}>
                  To:{" "}
                </FontTextBold>
              </View>
              {selected.map((contact, index) => (
                <View key={index}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => {
                      const newContacts = [...contacts];
                      const contactsIndex = contacts.indexOf(contact);
                      newContacts[contactsIndex].selected =
                        !contacts[contactsIndex].selected;
                      setContacts(newContacts);

                      const newSelected = [...selected];
                      newSelected.splice(newSelected.indexOf(contact), 1);

                      setSelected(newSelected);
                    }}
                    style={{
                      backgroundColor: colors.darkGreen,
                      paddingLeft: 15,
                      paddingRight: 10,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 20,
                      marginRight: 10,
                      flexDirection: "row",
                    }}
                  >
                    <FontText style={{ color: "white", marginRight: 5 }}>
                      {contact.name}
                    </FontText>
                    <Image
                      source={require("../../assets/closeIcon.png")}
                      style={{ height: 20, width: 20, tintColor: "white" }}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          marginTop: 15,
          paddingBottom: 15,
          alignItems: "center",
        }}
      >
        <SearchBar />
      </View>
      <ScrollView style={{ width: "100%", marginBottom: 10 }}>
        {contacts.map((contact, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => {
              const newContacts = [...contacts];
              newContacts[index].selected = !contacts[index].selected;
              setContacts(newContacts);

              const newSelected = [...selected];
              if (newSelected.includes(contact)) {
                newSelected.splice(newSelected.indexOf(contact), 1);
              } else {
                newSelected.push(contact);
              }

              setSelected(newSelected);
            }}
          >
            <View
              style={{
                width: "100%",
                height: 85,
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ url: "https://picsum.photos/200" }}
                  style={{ width: 60, height: 60, borderRadius: 60 / 2 }}
                />
              </View>
              <View style={{ flex: 0.8, justifyContent: "center" }}>
                <FontTextBold style={{ fontSize: 18 }}>
                  {contact.name}
                </FontTextBold>
              </View>
              <View
                style={{
                  flex: 0.3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 5,
                    borderColor: contact.selected ? "green" : colors.mediumGray,
                    backgroundColor: contact.selected ? "green" : "transparent",
                    borderWidth: 2,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={
                      contact.selected
                        ? require("../../assets/CheckMark.png")
                        : {}
                    }
                    style={{ width: 12, height: 12 }}
                  />
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
      <View
        style={{
          width: "90%",
          height: 75,
          borderRadius: 15,
          backgroundColor:
            selected.length == 0 ? colors.lightGreen : colors.darkGreen,
          alignSelf: "center",
          marginBottom: "5%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {(() => {
          if (selected.length == 1) {
            return (
              <FontTextBold style={styles.bottomButtonText}>
                START DIRECT MESSAGE
              </FontTextBold>
            );
          } else if (selected.length == 0) {
            return (
              <FontTextBold style={styles.bottomButtonText}>CHAT</FontTextBold>
            );
          }
          return (
            <FontTextBold style={styles.bottomButtonText}>
              CREATE A GROUP CHAT
            </FontTextBold>
          );
        })()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    width: "100%",
    marginTop: 60,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  bottomButtonText: {
    color: "white",
    fontSize: 18,
  },
});
