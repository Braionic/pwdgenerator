import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Profileheader from "../Profileheader";
import { Avatar } from "react-native-elements";
import { UserContext } from "../Authcontext";



export default function Profile() {
  const {userData} = useContext(UserContext)
  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingVertical: 10 }}>
      <Profileheader />
      <View style={{ margin: 20, alignItems: "center" }}>
        <Avatar
          source={userData.profileImage? {uri: userData.profileImage}: require("../../assets/favicon.png")}
          rounded
          size="large"
        />
        <Text style={{ marginVertical: 10, fontSize: 20 }}>{userData.name}</Text>
        <Text>{userData.email}</Text>
      </View>
      
      
      
    </View>
  );
}
