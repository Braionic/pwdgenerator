import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Profileheader from "../Profileheader";
import { Avatar } from "react-native-elements";
import { ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function Settings() {
  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingVertical: 10 }}>
      <Profileheader />
      <View style={{ margin: 20, alignItems: "center" }}>
        <Avatar
          source={require("../../assets/favicon.png")}
          rounded
          size="large"
        />
        <Text style={{ marginVertical: 10, fontSize: 20 }}>Obuh Henry</Text>
        <Text>trustedward@gmail.com</Text>
      </View>
      <ScrollView>
      <Text style={{paddingHorizontal: 5}}>PROMOTED</Text>
    
    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor: 'grey', padding: 20, marginVertical: 10, marginHorizontal: 20, borderRadius: 5}}>
      <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}><Text style={{color: 'white', marginRight: 5}}>Upgrade to PRO</Text><FontAwesome name="diamond" size={15} color="white" /></View>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
    </TouchableOpacity>
    <Text style={{paddingHorizontal: 5}}>GENERAL</Text>
    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor: 'grey', padding: 20, marginVertical: 5, marginHorizontal: 20, borderRadius: 5}}>
      <Text style={{color: 'white'}}>Account settings</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor: 'grey', padding: 20, marginVertical: 5, marginHorizontal: 20, borderRadius: 5}}>
      <Text style={{color: 'white'}}>Sync</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor: 'grey', padding: 20, marginVertical: 5, marginHorizontal: 20, borderRadius: 5}}>
      <Text style={{color: 'white'}}>Auto fill</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
    </TouchableOpacity>
    <Text style={{paddingHorizontal: 5}}>OTHER</Text>
    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor: 'grey', padding: 20, marginVertical: 5, marginHorizontal: 20, borderRadius: 5}}>
      <Text style={{color: 'white'}}>Help center</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor: 'grey', padding: 20, marginVertical: 5, marginHorizontal: 20, borderRadius: 5}}>
      <Text style={{color: 'white'}}> About</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
    </TouchableOpacity>
    <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between',backgroundColor: 'grey', padding: 20, marginVertical: 5, marginHorizontal: 20, borderRadius: 5}}>
      <Text style={{color: 'white'}}>Upgrade to PRO</Text>
      <MaterialIcons name="keyboard-arrow-right" size={24} color="white" />
    </TouchableOpacity>
      </ScrollView>
      
      
      
    </View>
  );
}
