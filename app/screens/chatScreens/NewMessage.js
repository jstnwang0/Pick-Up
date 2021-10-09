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
import BackButton from "../../components/BackButton";
import { FontTextBold, FontText } from "../../components/FontText";
import SearchBar from "../../components/SearchBar";
import colors from "../../config/colors";

export default function NewMessage({ navigation }) {
  const [contacts, setContacts] = useState([
    { name: "Justin", selected: false },
    { name: "Jerry", selected: false },
    { name: "Justin", selected: false },
    { name: "Jerry", selected: false },
    { name: "Justin", selected: false },
    { name: "Jerry", selected: false },
  ]);

  const [selected, setSelected] = useState([]);

  return (
    <View style={{ backgroundColor: "white" }}>
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
      {selected.length != 0 ? (
        <View>
          <View style={{ marginTop: 15, marginLeft: 20 }}>
            <FontTextBold style={{ fontSize: 18 }}>To</FontTextBold>
            <ScrollView
              style={{ marginTop: 5 }}
              horizontal={true}
              bounces={false}
              showsHorizontalScrollIndicator={false}
            >
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
      ) : (
        <View></View>
      )}

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
      <ScrollView style={{ width: "100%" }}>
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
                height: 75,
                backgroundColor: contact.selected ? "green" : "red",
              }}
            >
              <FontText style={{ fontSize: 17 }}>{contact.name}</FontText>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
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
});
