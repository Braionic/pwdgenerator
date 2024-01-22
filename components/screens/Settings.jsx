import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Profileheader from "../Profileheader";
import { Avatar } from "react-native-elements";
import { ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Settings() {
  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingVertical: 10 }}>
      <Profileheader />
      <View style={{ margin: 20, alignItems: "center" }}>
        <Avatar
          source={{uri: "https://i.ibb.co/fQ65jDN/cover-jpg-C7-BB7385-C5-CE-46-D3-9-B2-B-0-E1-F0806-E7-C8-Default.jpg"}}
          rounded
          size="large"
        />
        <Text style={{ marginVertical: 10, fontSize: 20 }}>Braionic</Text>
        <Text>braionic@gmail.com</Text>
        <View style={{marginVertical: 10, backgroundColor: "green", paddingHorizontal: 5, borderRadius: 4}}>
        <Text style={{ color: "white" }}>Developer</Text>
        </View>
      </View>
      <ScrollView>
        <Text style={{ paddingHorizontal: 5 }}>PROMOTED</Text>

        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "grey",
            padding: 20,
            marginVertical: 10,
            marginHorizontal: 20,
            borderRadius: 5,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", marginRight: 5 }}>
              Upgrade to PRO
            </Text>
            <FontAwesome name="diamond" size={15} color="white" />
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
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
          <Text style={{ color: "white" }}>Account settings</Text>
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
          <Text style={{ color: "white" }}>Sync</Text>
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
        <Text style={{ paddingHorizontal: 5 }}>OTHER</Text>
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
          <Text style={{ color: "white" }}>Help center</Text>
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
          <Text style={{ color: "white" }}> About</Text>
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
          <Text style={{ color: "white" }}>Upgrade to PRO</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
