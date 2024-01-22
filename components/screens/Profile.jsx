import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useContext } from "react";
import Profileheader from "../Profileheader";
import { Avatar } from "react-native-elements";
import { UserContext } from "../Authcontext";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
  const { userData } = useContext(UserContext);
  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingVertical: 10 }}>
      <Profileheader />
      <View style={{ margin: 20, alignItems: "center" }}>
        <View
          style={{
            borderWidth: 3,
            borderColor: "green",
            borderRadius: 100,
            padding: 5,
          }}
        >
          <Avatar
            source={
              userData.profileImage
                ? { uri: userData.profileImage }
                : {uri: "https://i.ibb.co/fQ65jDN/cover-jpg-C7-BB7385-C5-CE-46-D3-9-B2-B-0-E1-F0806-E7-C8-Default.jpg"}
            }
            rounded
            size="xlarge"
          />
        </View>

        <Text style={{ marginVertical: 10, fontSize: 20 }}>
          {userData.name}
        </Text>
        <Text>{userData.email}</Text>
      </View>
      <ScrollView>
        <Text style={{ paddingHorizontal: 5 }}>GENERAL</Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "grey",
            padding: 20,
            marginVertical: 5,
            marginHorizontal: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Update Details</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "grey",
            padding: 20,
            marginVertical: 5,
            marginHorizontal: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Change Password</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "grey",
            padding: 20,
            marginVertical: 5,
            marginHorizontal: 20,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: "white" }}>Auto fill</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
