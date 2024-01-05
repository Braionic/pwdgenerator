import { View, Text } from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "./Authcontext";
export default function Profileheader() {
  const { handleLogout } = useContext(UserContext);
  const { navigate } = useNavigation();

  
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
      }}
    >
      <Text onPress={() => navigate("Homestack")}>BACK</Text>
      <Text onPress={handleLogout}>LOGOUT</Text>
    </View>
  );
}
