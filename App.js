import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useContext, useState } from "react";
import { Keyboard, TextInput } from "react-native";
import { Button } from "react-native";
import uuid from "react-native-uuid";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./components/Navigation";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import { SafeAreaView, FlatList } from "react-native";
import { ScrollView } from "react-native";
import InputField from "./components/InputField";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Savedpasswords from "./components/Savedpasswords";
import Authcontext from "./components/Authcontext";

export default function App() {
  
  return (
    <Authcontext>
      <Navigation />
    </Authcontext>
  );
}

const styles = StyleSheet.create({
  container: {},
});
