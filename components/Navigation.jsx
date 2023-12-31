import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Storedpassword from "./screens/Storedpassword";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Savedpasswords from "./Savedpasswords";
import Profile from "./screens/Profile";
import { MaterialIcons } from '@expo/vector-icons';
import Settings from "./screens/Settings";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()
export default function Navigation() {
  function Homestack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
  function MyTabs() {
    return (
      <Tab.Navigator screenOptions={({route})=>({tabBarIcon: ({focused, color, size})=>{
        var iconName = ''
        if(route.name === 'Homestack'){
            iconName = 'security'
        }else if(route.name === 'profile'){
            iconName = 'person'
        }else if(route.name === 'storedpassword'){
            iconName = 'book'
        }else if(route.name === 'settings'){
            iconName = 'settings'
        }
        return <MaterialIcons name={iconName} size={24} color="black" />
      }})}>
        <Tab.Screen options={{headerShown: false, tabBarLabel: 'Tools'}} name="Homestack" component={Homestack} />
        <Tab.Screen
          name="storedpassword"
          component={Storedpassword}
          options={{ headerBackTitle: "GoBack", headerTintColor: "red", tabBarLabel: 'Vaults' }}
        />
        <Tab.Screen name='profile' component={Profile} />
        <Tab.Screen name='settings' component={Settings} />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}