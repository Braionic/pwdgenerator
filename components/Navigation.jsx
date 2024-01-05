import { View, Text } from "react-native";
import React, { useState, useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Storedpassword from "./screens/Storedpassword";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Savedpasswords from "./Savedpasswords";
import Profile from "./screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import Settings from "./screens/Settings";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Myhome from "./screens/Myhome";
import { UserContext } from "./Authcontext";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function Navigation() {
  const {isLoggedin} = useContext(UserContext)

  function Loginstack(){
    
    return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="signup" component={Signup} />
        <Stack.Screen name="myhome" component={Myhome} />
      </Stack.Navigator>
      
    )
  }
  function Homestack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }
  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName = "";
            if (route.name === "Homestack") {
              iconName = focused
                ? "shield-checkmark"
                : "shield-checkmark-outline";
            } else if (route.name === "profile") {
              iconName = focused ? "md-person-sharp" : "md-person-outline";
            } else if (route.name === "storedpassword") {
              iconName = focused ? "save" : "save-outline";
            } else if (route.name === "settings") {
              iconName = focused ? "settings" : "settings-outline";
            }
            return <Ionicons name={iconName} size={24} color="black" />;
          },
        })}
      >
        <Tab.Screen
          options={{ headerShown: false, tabBarLabel: "Tools" }}
          name="Homestack"
          component={Homestack}
        />
        <Tab.Screen
          name="storedpassword"
          component={Storedpassword}
          options={{
            headerBackTitle: "GoBack",
            headerTintColor: "red",
            tabBarLabel: "Vaults",
          }}
        />
        <Tab.Screen name="profile" component={Profile} />
        <Tab.Screen name="settings" component={Settings} />
      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      {isLoggedin?<MyTabs />: <Loginstack />}
    </NavigationContainer>
  );
}
