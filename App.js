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
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

export default function App() {

  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'yellow', backgroundColor: 'purple' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
          color: 'white'
        }}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17
        }}
        text2Style={{
          fontSize: 15
        }}
      />
    )
      }
  return (
    <>
      <Authcontext>
        <Navigation />
      </Authcontext>
      <Toast config={toastConfig} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
